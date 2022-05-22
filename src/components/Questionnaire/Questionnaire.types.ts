import {ComponentProps} from 'common/Types/QuestionierTypes';
import {StepHeaderData} from 'components/StepHeader/StepHeader.types';

export type QuestionnaireProps = {
  questionnaireData: {
    steps: QuestionnaireStepProps[];
  };
};

export type QuestionnaireStepProps = {
  header: StepHeaderData;
  components: ComponentProps[];
};
