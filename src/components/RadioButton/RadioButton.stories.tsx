// YourComponent.stories.js | YourComponent.stories.jsx

import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import RadioButton from './RadioButton';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'RadioButton',
  component: RadioButton,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof RadioButton>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  label: 'Option',
  labelPosition: 'left'
};
