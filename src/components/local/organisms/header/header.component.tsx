import React, { FC } from 'react';
import IHeader from './header';
import HeaderProps from './header.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../../shared';
import { Div, Text, Image } from '../../../shared/atomicUI/atoms';
import { Container, Row, Col } from '../../../shared/grids';
import HeaderNav from './subcomponents/headerNav.component';

// interface IProps extends IHeader {}

/**
 * Header Component
 */
export const Header: FC = (): JSX.Element => (
  <header>
    <Container fluid>
      <Row classes="h-14" justify="between" align="center">
        <Col size={1}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image src="/logo_full.png" size={50} />
        </Col>
        <Col size="auto">
          <HeaderNav />
        </Col>
      </Row>
    </Container>
  </header>
);

// Header.propTypes = HeaderProps.type;
// Header.defaultProps = HeaderProps.default;

export default Header;
