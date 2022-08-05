// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type ExtendedNextApiRequest = NextApiRequest & {
  body: UserRequest;
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // Validate the request body
    let body: UserRequest;
    try {
      body = JSON.parse(req.body)
    } catch(e: any) {
      res.status(500).send({ error: e.message })
      return
    }

    if (
      !body
      || typeof body.firstname !== 'string'
      || typeof body.lastname !== 'string'
      || typeof body.email !== 'string'
      || typeof body.password !== 'string'
    ) {
      res.status(400).send({ error: 'All fields are required.' })
      return
    }

    const newUser = await prisma.user.create({
      data: {
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email,
        password: body.password // Best method to store passwords
        // It is a joke man, hash it please
      },
    })

    res.status(200).send({ newUser })
  }
}
