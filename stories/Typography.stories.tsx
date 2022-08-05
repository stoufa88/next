import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import H1 from '../components/H1';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Typogprahy',
  component: H1,
} as ComponentMeta<typeof H1>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof H1> = (args) => <H1 {...args} />;

export const h1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
h1.args = {
  children: 'Tipaw',
};