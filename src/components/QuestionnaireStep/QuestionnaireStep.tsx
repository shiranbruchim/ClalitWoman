/* eslint-disable consistent-return */
import useTheme from 'common/Hooks/useTheme';
import {SubmitData} from 'common/Types/QuestionierTypes';
import Button from 'components/Button/Button';
import QuestionierList from 'components/QuestionierList';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {ScrollView, View} from 'react-native';
import {QuestionnaireStepStyle as styles} from './QuestionnaireStep.style';
import {QuestionnaireStepProps} from './QuestionnaireStep.types';

const QuestionnaireStep = (props: QuestionnaireStepProps) => {
  const {strings} = useTheme();

  const {
    stepData,
    handleNextStep,
    handlePrevStep,
    submitWizard,
    saveStepData,
    buttonText,
    currentStep,
  } = props;

  const {handleSubmit, control, reset, clearErrors} = useForm({
    shouldFocusError: true,
    mode: 'onChange',
  });

  const submitData = (data: SubmitData) => {
    saveStepData(data);
  };

  const handleNextStepButton = (data: SubmitData) => {
    submitData(data);
    if (buttonText === strings('questionnaire.submit')) {
      submitWizard();
      reset();
    } else {
      handleNextStep();
    }
  };

  const handlePrevStepButton = () => {
    handlePrevStep();
  };

  useEffect(() => {
    reset();
    clearErrors();
    console.log('clearing errors');
  }, [currentStep]);

  return (
    <ScrollView contentContainerStyle={styles.stepContainer}>
      <View style={styles.questionsContainer}>
        <QuestionierList stepData={stepData} control={control} />
      </View>
      <View style={styles.btnStyle}>
        <Button
          buttonWidth={256}
          value={buttonText}
          onPress={handleSubmit(handleNextStepButton)}
        />
        {currentStep > 1 ? (
          <Button
            buttonWidth={256}
            value={strings('questionnaire.prev')}
            onPress={handleSubmit(handlePrevStepButton)}
          />
        ) : null}
      </View>
    </ScrollView>
  );
};

export default QuestionnaireStep;
