import React, { FC } from 'react';
import { Div, Row, Col, Text } from '../../components/shared';

/**
 * Projects Component
 */
export const Projects: FC = (): JSX.Element => <Div classes="h-96"></Div>;

export default Projects;

const Carousel: FC = (props): JSX.Element => {
  const { data, children } = props;
  const [activeStep, setActiveStep] = useState(0);

  const stepsList = data ? data.map((item) => item.title) : [];

  const handleNext = (event: EventListener) => {
    // event.preventDefault();
    setActiveStep(activeStep + 1);
  };

  const handleBack = (event) => {
    // event.preventDefault();
    setActiveStep(activeStep - 1);
  };

  return (
    <Div classes={styles.carousel} margin="y-28" colorize>
      <Row style={{ alignItems: 'center', justifyItem: 'center' }}>
        <Col style={{ flexBasis: 'auto' }} xs={3} sm={5} colorize>
          <Stepper stepsList={stepsList} currentStep={activeStep} />
        </Col>
      </Row>
      <Row classes="h-inherit">
        <Col classes={styles.carousel__nav} align="center" colorize>
          <button type="button" onClick={handleBack} disabled={activeStep <= 0}>
            <MdKeyboardArrowLeft size="2x" />
          </button>
        </Col>
        <Col size={10}>
          <ProjectInfo data={data} currentStep={activeStep} />
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
