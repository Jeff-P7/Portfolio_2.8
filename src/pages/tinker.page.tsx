import React from 'react';
import { Container, Row, Col } from '../components/shared/grids';
// import Log from '../components/utils/log';
import { Div } from '../components/shared/atomicUI/atoms';
import { Carousel } from '../components/local';
import { ProjectsData } from '../data';

interface Props {}

const Template: React.FC<Props> = (props): JSX.Element => {
  return (
    <Container colorize>
      <Row classes="h-screen" justify="center" align="center">
        <Col size={12} colorize>
          <Carousel data={ProjectsData} />
        </Col>
      </Row>
    </Container>
  );
};

export default Template;
