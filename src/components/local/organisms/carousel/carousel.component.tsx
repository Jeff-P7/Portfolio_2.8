import React, { FC } from 'react';
import ICarousel from './carousel.d';
import CarouselProps from './carousel.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../../shared/global';
import { Div, Text } from '../../../shared/atomicUI';

interface IProps extends ICarousel {}

/**
 * Carousel Component
 */
export const Carousel: FC<IProps> = (props): JSX.Element => {
  const { children, classes, styles, ...properties } = props;
  const componentClasses: Array<string> = [];
  if (classes?.length) componentClasses.push(classesToString(classes));

  const componentStyles: Record<string, any> = { ...styles };
  const attr: Record<string, any> | null = purgeEmptyProps(properties);
  return (
    <Div
      classes={classNames(componentClasses)}
      styles={componentStyles}
      {...(attr && { ...attr })}
    >
      <Text size="8xl" align="center">
        WHy, hellO theRe {children}
      </Text>
    </Div>
  );
};

Carousel.propTypes = CarouselProps.type;
Carousel.defaultProps = CarouselProps.default;

export default Carousel;
