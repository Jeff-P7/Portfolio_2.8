import React, { FC } from "react";
import IHeader from "./header";
import HeaderProps from "./header.props";
import classNames from "classnames";
import { classesToString, purgeEmptyProps } from "../../shared";
import { Div, Text, Image } from "../../shared/atomicUI/atoms";
import { Container, Row, Col } from "../../shared/grids";
import HeaderNav from './subcomponents/headerNav.component';

interface IProps extends IHeader {}

/**
 * Header Component
 */
export const Header: FC<IProps> = (props): JSX.Element => {

  // const { children, classes, styles, ...properties } = props;
  // const componentClasses: Array<string> = [];
  // if (classes?.length) componentClasses.push(classesToString(classes));

  // const componentStyles: Record<string, any> = { ...styles };
  // const attr: Record<string, any> | null = purgeEmptyProps(properties);
  return (
    <header
    // classes={classNames(componentClasses)}
    // styles={componentStyles}
    // {...(attr && { ...attr })}
    >
      <Container fluid>
        <Row classes="h-14" justify="between" align="center" colorize>
          <Col size={1} colorize>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image src="/logo_full.png" size={50} />
          </Col>
          <Col size="auto" colorize><HeaderNav /></Col>
        </Row>
      </Container>
    </header>
  );
};

Header.propTypes = HeaderProps.type;
Header.defaultProps = HeaderProps.default;

export default Header;
