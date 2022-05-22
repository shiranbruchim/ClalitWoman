import useTheme from 'common/Hooks/useTheme';
import Button from 'components/Button';
import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import {AppContext} from 'common/Context/AppContextProvider';
import {navigate} from 'common/Utils/rootNavigation/navigationRef';
import {loginWithPasswordSchema} from './LoginLayoutSignWithPasswordForm.yumSchema';
import {LoginLayoutLoginWithPassword as styles} from './LoginLayoutLoginWithPassword.style';
// import {LoginLayoutLWPProps} from './LoginLayoutLoginWithPassword.types';
import LoginLayoutCardComponent from '../LoginLayoutCard/index';
import LoginLayoutIconLineComponent from './LoginLayoutIconLine/LoginLayoutIconLine';
import LoginLayoutIForgot from './LoginLayoutIForgot/LoginLayoutIForgot';
import LoginLayoutInputComponent from '../LoginLayoutInput';
import LoginLayoutComponent from '../LoginLayout';
import LoginTitle from '../LoginTitle/LoginTitle';

type valueData = {
  idNumber: string;
  userCode: string;
  password: string;
};

const LoginLayoutSignWithPasswordForm = () => {
  const {connectingUser} = useContext(AppContext);
  const {strings} = useTheme();
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

  const onSubmit = (userInput: valueData) => {
    const user = connectingUser(userInput.idNumber);
    if (!user) {
      console.log('falied');
    } else {
      reset();
      navigate('LoginSuccess');
    }
  };

  // const loginLayoutProps = {
  //   forgotPasswordClick: () => {
  //     console.log(1);
  //   },
  //   forgotUserCodeClick: () => {
  //     console.log(2);
  //   },
  // };

  const generalError = () => {
    if (errors.idNumber || errors.password) {
      return strings('login.schema.incorrectDataPleaseTryAgain');
    }
    return null;
  };

  return (
    <LoginLayoutComponent>
      <LoginTitle
        title={strings('login.enterWithPassword')}
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
        <LoginLayoutIForgot />
        <LoginLayoutIconLineComponent />
      </LoginLayoutCardComponent>
      <View style={styles.mainButtonContainer}>
        <Button
          value={strings('login.enter')}
          borderXL
          onPress={handleSubmit(onSubmit)}
          semiSlim
        />
      </View>
    </LoginLayoutComponent>
  );
};

export default LoginLayoutSignWithPasswordForm;
