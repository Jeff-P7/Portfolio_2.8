import type { ICommon } from '../../../shared/global';

// export interface ICarousel extends ICommon {}

export type TProject = {
    title: string;
    description: string;
    languages?: Array<string>;
    technologies?: Array<string>;
    tools?: Array<string>;
    images?: Array<string>;
    link?: string;
  };
export interface ICarousel {
    data: Array<TProject>;
}

export default ICarousel;
