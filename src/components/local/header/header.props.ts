import PropTypes from 'prop-types';
import ITemplate from './template';
import type { IPropDefines } from '../../shared';
import { CommonProps } from '../../shared';

/**
 * Property categorical types of defines
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof ITemplate]: any };
  default: ITemplate;
  argType: { [key in keyof ITemplate]: any };
}

const {
  array,
  arrayOf,
  bool,
  func,
  node,
  number,
  oneOf,
  oneOfType,
  shape,
  string,
} = PropTypes;

export const TemplateProps: IProps = {
  type: {
    ...CommonProps.type,
  },
  default: {
    ...CommonProps.default,
  },
  argType: {
    ...CommonProps.argType,
  },
};

export default TemplateProps;
