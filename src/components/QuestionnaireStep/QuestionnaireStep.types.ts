import {ComponentProps, SubmitData} from 'common/Types/QuestionierTypes';
import {QuestionnaireProps} from 'components/Questionnaire/Questionnaire.types';

export type QuestionnaireStepProps = {
  stepData: SubmitData;
  handleNextStep: () => void;
  handlePrevStep: () => void;
  submitWizard: () => void;
  saveStepData: (data: Partial<QuestionnaireProps>) => void;
  buttonText: string;
  components?: ComponentProps[];
  currentStep: number;
};
