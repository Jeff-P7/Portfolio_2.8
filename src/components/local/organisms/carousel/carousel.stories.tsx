import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Carousel from './carousel.component';
import CarouselProps from './carousel.props';
import { propToArgTypes } from '../../../shared/global';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Carousels',
  component: Carousel,
  args: CarouselProps.default,
  argTypes: propToArgTypes(CarouselProps.argType),
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Carousel>;

//👇 We create a “Carousel” of how args map to rendering
const Base: ComponentStory<typeof Carousel> = (args) =>
  args.children ? (
    <Carousel {...args}>{args.children}</Carousel>
  ) : (
    <Carousel {...args} />
  );

export const Default = Base.bind({});
Default.args = {
  /*👇 The args you need here will depend on your component */
};
