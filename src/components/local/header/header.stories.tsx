import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './header.component';
import HeaderProps from './header.props';
import { propToArgTypes } from '../../shared';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Headers',
  component: Header,
  args: HeaderProps.default,
  argTypes: propToArgTypes(HeaderProps.argType),
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Header>;

//👇 We create a “Header” of how args map to rendering
const Base: ComponentStory<typeof Header> = (args) =>
  args.children ? (
    <Header {...args}>{args.children}</Header>
  ) : (
    <Header {...args} />
  );

export const Default = Base.bind({});
Default.args = {
  /*👇 The args you need here will depend on your component */
};
