import useTheme from 'common/Hooks/useTheme';
import Button from 'components/Button';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {View, Text} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import LoginLayoutComponent from 'components/LoginLayout/LoginLayout';
import {useEnrollment} from 'common/Hooks/useEnrollment';
import LoginTitle from 'components/LoginLayout/LoginTitle/LoginTitle';
import {navigate} from 'common/Utils/rootNavigation/navigationRef';
import {loginWithPasswordSchema} from '../LoginLayoutSignWithPasswordForm.yumSchema';
import {LoginLayoutWithFaceRecognitionStyle as styles} from '../LoginLayoutWithFaceRecognition.style';
import {LoginLayoutWithFaceRecognitionProps} from '../LoginLayoutWithFaceRecognition.types';
import LoginLayoutCardComponent from '../../LoginLayoutCard/index';
import LoginLayoutIForgot from '../../LoginLayoutLoginWithPassword/LoginLayoutIForgot/LoginLayoutIForgot';
import LoginLayoutInputComponent from '../../LoginLayoutInput';

const LoginLayoutWithFaceRecognitionStepTwo = (
  props: LoginLayoutWithFaceRecognitionProps,
) => {
  const {strings} = useTheme();
  const {title = strings('login.faceId.enterWithFaceId')} = props;
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      idNumber: '',
      userCode: '',
      password: '',
    },
    resolver: yupResolver(loginWithPasswordSchema),
  });

  const onSubmit = () => {
    navigate('LoginWithFaceidStepThree');
    reset();
  };

  const {userEnrolled} = useEnrollment();

  useEffect(() => {
    if (userEnrolled) {
      return;
    }
    navigate('LoginWithFaceidSettings');
  }, [userEnrolled]);

  const loginLayoutProps = {
    forgotPasswordClick: () => {
      console.log(1);
    },
    forgotUserCodeClick: () => {
      console.log(2);
    },
  };

  const generalError = () => {
    if (errors.idNumber || errors.password) {
      return (
        <Text style={[styles.errorMessage, styles.errorMessageMarginTop]}>
          {strings('login.schema.incorrectDataPleaseTryAgain')}
        </Text>
      );
    }
    return null;
  };

  return (
    <LoginLayoutComponent>
      <LoginTitle
        title={title}
        subTitle={strings('login.faceId.allThatLeftIsOneTimeIdendification')}
        backBtn
        generalError={generalError}
      />
      <LoginLayoutCardComponent noMarginTop>
        <LoginLayoutInputComponent
          control={control as never}
          name="idNumber"
          title={strings('login.idNumber')}
        />
        <LoginLayoutInputComponent
          control={control as never}
          name="userCode"
          title={strings('login.userCode')}
          error={errors}
        />
        <LoginLayoutInputComponent
          name="password"
          control={control as never}
          title={strings('login.password')}
          password
          subTitle={strings(
            'login.onlyNumberAndEnglishLettersEightCharacterAtleast',
          )}
        />
        <LoginLayoutIForgot {...loginLayoutProps} />
      </LoginLayoutCardComponent>
      <View style={styles.mainButtonContainer}>
        <Button
          value={strings('login.faceId.continue')}
          borderXL
          onPress={handleSubmit(onSubmit)}
          semiSlim
        />
      </View>
    </LoginLayoutComponent>
  );
};

export default LoginLayoutWithFaceRecognitionStepTwo;
