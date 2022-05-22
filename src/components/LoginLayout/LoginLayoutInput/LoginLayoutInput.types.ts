import {Control, ControllerRenderProps} from 'react-hook-form';

export type inputError = {
  message?: string;
  ref?: object;
  type?: string;
};

export type LoginLayoutInputProps = {
  title: string;
  subTitle?: string;
  name: string;
  control: Control;
  password?: boolean;
  error?:
    | {
        idNumber?: inputError | undefined;
        userCode?: inputError | undefined;
        password?: inputError | undefined;
        CodeNumber?: inputError | undefined;
      }
    | undefined;
};

export type inputData = {
  idNumber: string;
  userCode: string;
  password: string;
};
