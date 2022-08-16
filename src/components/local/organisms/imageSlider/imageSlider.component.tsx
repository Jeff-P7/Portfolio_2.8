import React, { FC, useState, useEffect } from 'react';
import IImageSlider from './imageSlider.d';
import ImageSliderProps from './imageSlider.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../../shared/global';
import { Div, Icon, Text } from '../../../shared/atomicUI/atoms';
import styles from './imageSlider.module.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { arrayGen } from '../../../shared/global/utilities/functions';
import { Row, Col } from 'components/shared/grids';

interface IProps extends IImageSlider {}

// const images = [
//   'https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80',
//   'https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80',
//   'https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80',
//   'https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80',
// ];

const images = [
  './assets/images/tabpik/tabpik-1.png',
  './assets/images/tabpik/tabpik-2.png',
  './assets/images/tabpik/tabpik-3.png',
];

/**
 * ImageSlider Component
 */
export const ImageSlider: FC<IProps> = (props): JSX.Element => {
  const [loaded, setLoaded] = React.useState<boolean[]>([]);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      animationEnded(s) {
        setCurrentSlide(s.track.details.rel);
      },
      loop: true,
      initial: 0,
      // rubberband: false,
      vertical: true,
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
          if (mouseOver && loaded) return;
          timeout = setTimeout(() => {
            // alert(JSON.stringify(loaded));
            slider.next();
          }, 10000);
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

  useEffect(() => {
    const new_loaded = [...loaded];
    new_loaded[currentSlide] = true;
    setLoaded(new_loaded);
  }, [currentSlide]);

  return (
    <Div classes="relative" colorize>
      <Div classes="w-11/12 rounded-2xl" colorize>
        <div ref={sliderRef} className="z-10 h-96 keen-slider">
          {images.map((src, idx) => (
            <Div
              key={idx}
              classes="keen-slider__slide lazy__slide number-slide1 h-20 hidden"
            >
              <img
                src={loaded[idx] ? src : ''}
                className={`number-slide${idx}`}
              />
            </Div>
          ))}
          {/* {Array(6).map((item: number) => (
            <Div
              classes={`keen-slider__slide lazy__slide ${'number-slide'}${item}`}
            >
              1
            </Div>
          ))} */}
          {/* <div className={`keen-slider__slide ${'number-slide1'}`}>1</div>
          <div className={`keen-slider__slide ${'number-slide2'}`}>2</div>
          <div className={`keen-slider__slide ${'number-slide3'}`}>3</div>
          <div className={`keen-slider__slide ${'number-slide4'}`}>4</div>
          <div className={`keen-slider__slide ${'number-slide5'}`}>5</div>
          <div className={`keen-slider__slide ${'number-slide6'}`}>6</div> */}
        </div>
      </Div>
      <Row
        classes="absolute z-0 right-3 -bottom-16 w-96 h-40 rounded-2xl flex" colorize>
        <Col align="end" classes="mb-3 flex items-center flex-wrap content-between" colorize>
          <Text tag="h4" value="01" classes="text-center" />
          <Div classes="h-2 w-44 my-1" colorize />
          <Text tag="h4" value="06" />
        </Col>
        <Col size="auto" align="center" colorize>
          <Icon value="BsArrowUpCircle" size="4xl" classes="mb-10"/>
          <Icon value="BsArrowDownCircle" size="4xl"/>
        </Col>
        {/* <Div classes="left-2 bottom-2 absolute" colorize>
          <Text tag="h4" value={'01'} classes="inline text-center" />
          <Div classes="h-16 w-60 inline-block" colorize />
          <Text tag="h4" value={'06'} classes="inline" />
        </Div>
        <Div classes="absolute right-0" colorize>
          <Icon value="BsArrowUpCircle" size="4xl"/>
          <Icon value="BsArrowDownCircle" size="4xl"/>
        </Div> */}
      </Row>
    </Div>
  );
};

ImageSlider.propTypes = ImageSliderProps.type;
ImageSlider.defaultProps = ImageSliderProps.default;

export default ImageSlider;
