export type ThankYouFeedbackProps = {
  titleFeedback?: string;
  subtitle?: string;
  text?: string;
  btnString?: string;
  handleClose?: () => void;
  isModalContent?: boolean;
  handleSubmit?: () => void;
  isOpen: boolean;
};
