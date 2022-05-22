import {yupResolver} from '@hookform/resolvers/yup';
import useTheme from 'common/Hooks/useTheme';
import {navigate} from 'common/Utils/rootNavigation/navigationRef';
import Button from 'components/Button';
import LoginLayoutComponent from 'components/LoginLayout/LoginLayout';
import LoginTitle from 'components/LoginLayout/LoginTitle/LoginTitle';
import React from 'react';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
// import {LoginLayoutLoginWithSMSProps} from '../LoginLayoutLoginWithSMS.types';
import LoginLayoutCardComponent from '../../LoginLayoutCard/LoginLayoutCard';
import LoginLayoutInputComponent from '../../LoginLayoutInput/LoginLayoutInput';
import {LoginLayoutLoginWithSMSStyle as styles} from '../LoginLayoutLoginWithSMS.style';
import {loginWithSMSSchema} from './LoginLayoutSignWithSMS.yumSchema';

const LoginLayoutLoginWithSMSComponent = () => {
  const {strings} = useTheme();
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      idNumber: 0,
    },
    resolver: yupResolver(loginWithSMSSchema),
  });

  const onSubmit = () => {
    navigate('LoginWithSMSStepTwo');
    reset();
  };

  const errorHandler = () => {
    if (errors.idNumber) {
      errors.idNumber.message = strings('login.SMS.inValidIdNumber');
      return errors;
    }
    return errors;
  };
  return (
    <LoginLayoutComponent>
      <LoginTitle
        title={strings('login.enterWithSMS')}
        subTitle={strings('login.SMS.PutIdNumber')}
        backBtn
      />
      <LoginLayoutCardComponent>
        <LoginLayoutInputComponent
          control={control as never}
          name="idNumber"
          title={strings('login.idNumber')}
          error={errorHandler()}
        />
      </LoginLayoutCardComponent>
      <View style={styles.mainButtonContainer}>
        <Button
          value={strings('login.SMS.sendOneTimeCode')}
          borderXL
          onPress={handleSubmit(onSubmit)}
          semiSlim
        />
      </View>
    </LoginLayoutComponent>
  );
};

export default LoginLayoutLoginWithSMSComponent;
