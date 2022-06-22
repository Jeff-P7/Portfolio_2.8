import React, { FC } from 'react';
import IHeader from './header';
import HeaderProps from './header.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../shared';
import { Div, Text } from '../../atomicUI/atoms';

interface IProps extends IHeader {}

/**
 * Header Component
 */
export const Header: FC<IProps> = (props): JSX.Element => {
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

Header.propTypes = HeaderProps.type;
Header.defaultProps = HeaderProps.default;

export default Header;
