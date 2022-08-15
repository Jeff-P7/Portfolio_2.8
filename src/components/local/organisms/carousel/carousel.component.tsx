import React, { FC, useState } from 'react';
import ICarousel from './carousel.d';
import CarouselProps from './carousel.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../../shared/global';
import { Div, Row, Col, Text } from '../../../shared';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styles from './carousel.module.scss';
import ImageSlider from '../imageSlider';


interface IProps extends ICarousel {}

/**
 * Carousel Component
 */
export const Carousel: FC<IProps> = (props): JSX.Element => {
  const { data, children } = props;
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepsList = data ? data.map((item: any) => item.title) : [];

  const handleNext = (e) => e.preventDefault() || setActiveStep(activeStep + 1);
  const handlePrev = (e) => e.preventDefault() || setActiveStep(activeStep - 1);

  return (
    <Div classes={styles.carousel} margin="y-28" colorize>
      <Row justify="center">
        <Col auto colorize>
          <Stepper stepsList={stepsList} currentStep={activeStep} />
        </Col>
      </Row>
      <Row classes="h-inherit">
        <Col classes={styles.carousel__nav} align="center" colorize>
          <button type="button" onClick={handlePrev} disabled={activeStep <= 0}>
            <MdKeyboardArrowLeft size="2x" />
          </button>
        </Col>
        <Col size={10}>
          <ProjectInfo projectData={data[activeStep]} />
        </Col>
        <Col classes={styles.carousel__nav} align="center" colorize>
          <button
            type="button"
            onClick={handleNext}
            disabled={activeStep >= stepsList.length - 1}
          >
            <MdKeyboardArrowRight size="2x" />
          </button>
        </Col>
      </Row>
    </Div>
  );
};

Carousel.propTypes = CarouselProps.type;
Carousel.defaultProps = CarouselProps.default;

export default Carousel;

const Stepper = ({
  stepsList = ['test1', 'test2', 'test3'],
  currentStep = 0,
}): JSX.Element => (
  <Div classes={styles.stepper} colorize>
    {stepsList.map((item, index) => (
      <span
        className={classNames(
          `step ${currentStep === index ? 'step_active' : ''}`
        )}
        key={index}
      >
        <Text size="2xl">{item}</Text>
      </span>
    ))}
  </Div>
);

const ProjectInfo = ({ projectData }): JSX.Element => {
  const { title, description, languages, technologies, tools, images, link } =
    projectData;

  return (
    <>
      <Row>
        <Col classes="h-auto">
          <Row stack>
            <Col classes={styles.carousel__project} padding="y-3" colorize>
              <Text tag="h4" value={title} />
              <Text tag="h5" value={description || 'Waiting'} />
            </Col>
            <Col classes={styles.carousel__project} padding="y-3" colorize>
              <Text tag="h4" value="Languages" />
              {languages
                ? languages.map((item: string, index: number) => (
                    <Text tag="h5" key={`${item}-${index}`} value={item} />
                  ))
                : ''}
            </Col>
          </Row>
        </Col>
        <Col classes="h-full" size={8}>
          <ImageSlider />
          {/* <ImageCarousel projectTitle={title} imageList={images} /> */}
        </Col>
        {/* </Row>
      <Row> */}
        <div className="w-full" />
        <Col classes={styles.carousel__project} padding="y-3" colorize>
          <Text tag="h4" value="Technologies" />
          {technologies
            ? technologies.map((item: string, index: number) => (
                <Text tag="h5" key={`${item}-${index}`} value={item} />
              ))
            : ''}
        </Col>
        <Col classes={styles.carousel__project} padding="y-3" colorize>
          <Text tag="h4" value="Tools" />
          {tools
            ? tools.map((item: string, index: number) => (
                <Text tag="h5" key={`${item}-${index}`} value={item} />
              ))
            : ''}
        </Col>
      </Row>
    </>
  );
};
