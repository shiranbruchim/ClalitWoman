import {ReactNode} from 'react';

export type LoginTitleProps = {
  title: string;
  subTitle?: string;
  backBtn?: boolean;
  generalError?: () => ReactNode;
};
