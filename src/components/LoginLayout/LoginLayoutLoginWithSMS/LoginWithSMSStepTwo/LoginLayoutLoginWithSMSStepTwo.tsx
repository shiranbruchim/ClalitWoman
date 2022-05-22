import useTheme from 'common/Hooks/useTheme';
import Button from 'components/Button';
import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Text, View} from 'react-native';
import LoginLayoutComponent from 'components/LoginLayout/LoginLayout';
import LoginTitle from 'components/LoginLayout/LoginTitle/LoginTitle';
import {navigate} from 'common/Utils/rootNavigation/navigationRef';
import {loginWithSMSSchema} from './LoginLayoutSignWithSMS.yumSchema';
import {LoginLayoutLoginWithSMSStyle as styles} from '../LoginLayoutLoginWithSMS.style';
// import {LoginLayoutLoginWithSMSProps} from '../LoginLayoutLoginWithSMS.types';
import LoginLayoutCardComponent from '../../LoginLayoutCard/LoginLayoutCard';
import LoginLayoutInputComponent from '../../LoginLayoutInput/LoginLayoutInput';
import LoginWIthSMSGetCode from './LoginWIthSMSGetCode/LoginWIthSMSGetCode';

const LoginLayoutLoginWithSMSStepTwoComponent = () => {
  const {strings} = useTheme();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      CodeNumber: '',
    },
    resolver: yupResolver(loginWithSMSSchema),
  });

  const phoneNuberEnds = '441';
  const SMS = true;

  const subTitle = SMS
    ? strings('login.SMS.PutSMSCode') + phoneNuberEnds
    : strings('login.SMS.PutPhoneCode') + phoneNuberEnds;

  const onSubmit = () => {
    navigate('LoginSuccess');
  };

  const errorHandler = () => {
    if (errors.CodeNumber) {
      errors.CodeNumber.message = strings('login.SMS.inValidSMSCode');
      return errors;
    }
    return errors;
  };
  return (
    <LoginLayoutComponent>
      <LoginTitle
        title={strings('login.enterWithSMS')}
        subTitle={subTitle}
        backBtn
      />
      <LoginLayoutCardComponent>
        <LoginLayoutInputComponent
          control={control as never}
          name="CodeNumber"
          title={strings('login.SMS.SMSCode')}
          error={errorHandler()}
        />
        <View style={styles.CardMainTextContainer}>
          <Text style={styles.CardMainText}>
            {strings('login.SMS.theCodeLastFiveMinutes')}
          </Text>
        </View>
        <LoginWIthSMSGetCode />
      </LoginLayoutCardComponent>
      <View style={styles.mainButtonContainer}>
        <Button
          value={strings('login.SMS.continue')}
          borderXL
          onPress={handleSubmit(onSubmit)}
          semiSlim
        />
      </View>
    </LoginLayoutComponent>
  );
};

export default LoginLayoutLoginWithSMSStepTwoComponent;
