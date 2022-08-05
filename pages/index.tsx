import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from '@emotion/styled'
import H1 from '../components/H1'
import Button from '../components/Button'
import { Form, FormRow, Input, Label } from '../components/Forms'

const Main = styled.div`
  padding: 50px 0px;
  background: #5acee8;
`

// Export to its own component, can get props for sizes...
const P = styled.p`
  color: #707070;
`

const Headline = styled(P)`
  font-size: 18px;
  font-weight: 600;
`;

const Span = styled.span`
  color: gray;
  font-size: 14px;
`

const Home: NextPage = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (!acceptedTerms) {
      alert('Please accept terms')
      return
    }

    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/)) {
      alert('Password must contain a minimum of 8 characters, with atleast one uppercase letter, one number and one special character')
      return
    }

    if (password !== passwordConfirmation) {
      alert('Password and password confirmation are different!')
      return
    }

    const user: UserRequest = {
      firstname,
      lastname,
      email,
      password
    }

    try {
      const req = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify(user)
      })

      alert('User created')
    } catch(e) {
      alert('Oooooops')
    }
  }

  return (
    <div>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        

        <Form onSubmit={handleSubmit}>
          <H1>S'inscrire</H1>
          <Headline>Rejoignez Tipaw aujourd'hui. C'est gratuit !</Headline>
          <P>Vous êtes un refuge, un éleveur, un vétérinaire ou toiletteur ? <a href="">Cliquez-ici</a></P>

          <hr />

          <FormRow>
            <Label htmlFor="firstname">Votre prénom *</Label>
            <Input 
              name="firstname"
              id="firstname"
              type="text"
              required 
              value={firstname}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstname(e.target.value)}
            />
          </FormRow>

          <FormRow>
            <Label htmlFor="lastname">Votre nom *</Label>
            <Input 
              name="lastname"
              id="lastname"
              type="text"
              required
              value={lastname}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastname(e.target.value)}
            />
          </FormRow>

          <FormRow>
            <Label htmlFor="email">Votre email *</Label>
            <Input 
              name="email"
              id="email"
              type="email"
              required
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
            />
          </FormRow>

          <FormRow>
            <Label htmlFor="password">Votre mot de passe *</Label>
            <Input 
              name="password"
              id="password"
              type="password"
              required
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
          </FormRow>

          <FormRow>
            <Label htmlFor="passwordConfirmation">Confirmez votre mot de passe *</Label>
            <Input 
              name="passwordConfirmation"
              id="passwordConfirmation"
              type="password"
              required 
              value={passwordConfirmation} 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordConfirmation(e.target.value)}
            />
          </FormRow>

          <FormRow>
            <input type="checkbox" onChange={(e) => setAcceptedTerms(e.target.checked)} />
            <Span>J'ai lu et accepté les conditions générales d'utilisation de Tipaw</Span>
          </FormRow>

          <FormRow>
            <Button type="submit">S'inscrire</Button>
          </FormRow>
        </Form>
      </Main>
    </div>
  )
}

export default Home
