import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Template from './template.component';
import TemplateProps from './template.props';
import { propToArgTypes } from '../../shared';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Templates',
  component: Template,
  args: TemplateProps.default,
  argTypes: propToArgTypes(TemplateProps.argType),
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Template>;

//👇 We create a “template” of how args map to rendering
const Base: ComponentStory<typeof Template> = (args) =>
  args.children ? (
    <Template {...args}>{args.children}</Template>
  ) : (
    <Template {...args} />
  );

export const Default = Base.bind({});
Default.args = {
  /*👇 The args you need here will depend on your component */
};
