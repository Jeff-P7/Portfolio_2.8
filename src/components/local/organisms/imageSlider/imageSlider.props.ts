import PropTypes from 'prop-types';
import IImageSlider from './imageSlider';
import type { IPropDefines } from '../../../shared/global';
import { CommonProps } from '../../../shared/global';

/**
 * Property categorical types of defines
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof IImageSlider]: any };
  default: IImageSlider;
  argType: { [key in keyof IImageSlider]: any };
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

export const ImageSliderProps: IProps = {
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

export default ImageSliderProps;
