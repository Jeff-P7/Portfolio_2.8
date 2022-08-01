import React, { FC } from 'react';
import { Div, Row, Col, Text } from '../../components/shared';
import styles from './sections.module.scss';

/**
 * Intro Component
 */
export const Intro: FC = (): JSX.Element => (
  <Row classes="h-96" align="center" justify="center">
    <Col size={8} offset={2} align="center">
      <Text tag="h4" size="md">
        Hi, my name is{' '}
      </Text>
      <Text tag="h3" size="md">
        Jeffrey Paulino{' '}
      </Text>
      <Text tag="h3" size="md">
        I build things for the web
      </Text>
    </Col>

    <Div colorize>
      <Div classes={styles.intro__scroll__bar_mouse} colorize />
    </Div>
  </Row>
);

export default Intro;
