import React, { FC, useState } from 'react';
import IImageSlider from './imageSlider.d';
import ImageSliderProps from './imageSlider.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../../shared/global';
import { Div, Text } from '../../../shared/atomicUI/atoms';
import styles from './imageSlider.module.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

interface IProps extends IImageSlider {}

/**
 * ImageSlider Component
 */
export const ImageSlider: FC<IProps> = (props): JSX.Element => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <Div classes="relative h-full" colorize>
      <Div classes="h-72 w-11/12 rounded-2xl" colorize>
        <div ref={sliderRef} className="keen-slider">
          <div className={`keen-slider__slide ${'number-slide1'}`}>1</div>
          <div className={`keen-slider__slide ${'number-slide2'}`}>2</div>
          <div className={`keen-slider__slide ${'number-slide3'}`}>3</div>
          <div className={`keen-slider__slide ${'number-slide4'}`}>4</div>
          <div className={`keen-slider__slide ${'number-slide5'}`}>5</div>
          <div className={`keen-slider__slide ${'number-slide6'}`}>6</div>
        </div>
      </Div>
      <Div classes="absolute right-0 bottom-0" colorize>
        Buttons
      </Div>
    </Div>
  );
};

ImageSlider.propTypes = ImageSliderProps.type;
ImageSlider.defaultProps = ImageSliderProps.default;

export default ImageSlider;
