import {ComponentProps} from 'common/Types/QuestionierTypes';
import {getInputComponent} from 'common/Utils/QuestionaireUtility';
import Question from 'components/Question/Question';
import {QuestionnaireStepProps} from 'components/Questionnaire/Questionnaire.types';
import TextInfo from 'components/Text/Text';
import React from 'react';
import {Controller} from 'react-hook-form';
import {getUniqueId} from 'react-native-device-info';
import {QuestionierListStyle as styles} from './QuestionierList.style';
import {InputsListProps} from './QuestionierList.types';

const QuestionierList = (props: InputsListProps) => {
  const {stepData, control} = props;

  const {components} = stepData as Partial<QuestionnaireStepProps>;

  return components?.map((component: ComponentProps) => {
    const componentId = component.id ? component.id : getUniqueId();
    const inputRenderFunction = getInputComponent(component.type, component);
    return (
      <Question
        question={component.title}
        key={componentId}
        questionNote={component.subTitle}>
        <Controller
          name={componentId}
          control={control}
          rules={component.rules}
          defaultValue={component.defaultValue ? component.defaultValue : null}
          render={({field: {onChange, onBlur, value}, fieldState: {error}}) => {
            return (
              <>
                {component.type
                  ? inputRenderFunction(
                      onChange as never,
                      onBlur as never,
                      value,
                    )
                  : null}
                {error && (
                  <TextInfo style={styles.errorStyles} text={error.message} />
                )}
              </>
            );
          }}
        />
      </Question>
    );
  });
};

export default QuestionierList;
