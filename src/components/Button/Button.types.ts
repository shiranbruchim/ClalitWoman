export type ButtonProps = {
  heightL?: boolean;
  borderL?: boolean;
  borderXL?: boolean;
  disabled?: boolean;
  formOutline?: boolean;
  secondary?: boolean;
  outline?: boolean;
  RoundedUp?: boolean;
  RoundedDown?: boolean;
  nakedBtn?: boolean;
  bold?: boolean;
  slim?: boolean;
  semiSlim?: boolean;
  underLine?: boolean;
  buttonWidth?: number | undefined;
  iconBtn?: {
    btnSize: string;
    btnColor?: string;
    iconName: string;
    largeText?: boolean;
  };
  value: string;
  onPress: () => void;
};
