import useTheme from 'common/Hooks/useTheme';
import {SubmitData} from 'common/Types/QuestionierTypes';
import {getContentWidth} from 'common/Utils';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import Step from 'components/QuestionnaireStep/QuestionnaireStep';
import StepHeader from 'components/StepHeader/StepHeader';
import ThankYouFeedback from 'components/ThankYouFeedback';
import React, {useState} from 'react';
import {View} from 'react-native';
import {StepsStyle as styles} from './Questionnaire.style';
import {QuestionnaireProps} from './Questionnaire.types';

const Questionnaire = (props: QuestionnaireProps) => {
  const {questionnaireData} = props;
  const {strings} = useTheme();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [stepsData, setStepsData] = useState<SubmitData[]>([]);

  const questionaireData = questionnaireData.steps;
  const formLength = questionaireData.length;
  const formHeaderData = questionaireData[0].header;
  const isFormEnded = formLength === currentStep;
  const thankYouFeedbackData = questionaireData[formLength - 1].components[0];
  const isLastStep = formLength - 1 === currentStep;

  const questinaireEnded = () => {
    console.log('stepsData: ', stepsData);
    setCurrentStep(1);
  };

  const nextStep = () => {
    if (currentStep !== formLength) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const getCurrentStepData = () => {
    const currentStepKey = getStepKey();

    const newStepData = questionaireData[currentStepKey];

    newStepData.components = newStepData.components.map(component => {
      const newComponent = {...component};

      const previousUserReply = stepsData[currentStepKey]
        ? (stepsData[currentStepKey][component.id] as string)
        : component.defaultValue;

      newComponent.defaultValue = previousUserReply;

      return newComponent;
    });

    return questionaireData[currentStepKey];
  };

  const getStepKey = () => {
    return currentStep - 1;
  };

  const saveStepData = (stepData: SubmitData) => {
    const currentStepNumber = getStepKey();

    const stepQuestionsData = [...stepsData];

    stepQuestionsData[currentStepNumber] = stepData;

    setStepsData(stepQuestionsData);
  };

  const submitWizard = () => {
    nextStep();
  };

  const buttonText = () => {
    let nextStepButtonText = strings('questionnaire.next');

    if (isLastStep) {
      nextStepButtonText = strings('questionnaire.submit');
    } else if (isFormEnded) {
      nextStepButtonText = strings('questionnaire.toHomePage');
    }

    return nextStepButtonText;
  };

  const getQuestionaire = () => {
    return (
      <View style={styles.mainViewContainer}>
        <StepHeader data={formHeaderData} />
        <ProgressBar
          width={getContentWidth()}
          contentLength={formLength}
          index={currentStep}
        />
        <Step
          stepData={getCurrentStepData()}
          handleNextStep={nextStep}
          handlePrevStep={prevStep}
          buttonText={buttonText()}
          saveStepData={saveStepData}
          submitWizard={submitWizard}
          currentStep={currentStep}
        />
      </View>
    );
  };

  const getThankYouMessage = () => {
    return (
      <ThankYouFeedback
        isOpen
        titleFeedback={thankYouFeedbackData.title}
        subtitle={thankYouFeedbackData.subTitle}
        text={thankYouFeedbackData.content}
        btnString={strings('steps.toHomePage')}
        handleSubmit={() => questinaireEnded()}
      />
    );
  };

  return isFormEnded ? getThankYouMessage() : getQuestionaire();
};

export default Questionnaire;
