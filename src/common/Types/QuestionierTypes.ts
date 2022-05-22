export type InputType =
  | 'textInput'
  | 'emailInput'
  | 'dateInput'
  | 'heading'
  | 'radio'
  | 'numberBox'
  | 'checkbox'
  | 'comment'
  | 'repeater'
  | 'file';

export type onChangeType = (value: string | object) => EventListener;
export interface QuestionTypes {
  textInput: (onChange: onChangeType) => JSX.Element;
  emailInput: (onChange: onChangeType) => JSX.Element;
  dateInput: (onChange: onChangeType) => JSX.Element;
  heading: (onChange: onChangeType) => JSX.Element;
  radio: (onChange: onChangeType) => JSX.Element;
  numberBox: (onChange: onChangeType) => JSX.Element;
  checkbox: (onChange: onChangeType) => JSX.Element;
  comment: (onChange: onChangeType) => JSX.Element;
  repeater: (onChange: onChangeType) => JSX.Element;
  file: (onChange: onChangeType) => JSX.Element;
}

export type Option = {
  value: string;
  label: string;
  components: ComponentProps[];
};
export interface InputProps {
  type: string;
  defaultValue?: string;
  placeholder?: string;
  title?: string;
  subTitle?: string;
  options: Option[];
  id: string;
  content: string;
  direction?: 'horizontal' | 'vertical';
}

export interface ComponentProps {
  type: InputType;
  placeholder?: string;
  defaultValue?: string;
  editable?: boolean;
  validate?: string[];
  id: string;
  direction?: 'horizontal' | 'vertical';
  title?: string;
  subTitle?: string;
  allowOther?: boolean;
  content: string;
  options: Option[];
  rules: object;
}

export type SubmitData = {
  [key: string]: unknown;
};
