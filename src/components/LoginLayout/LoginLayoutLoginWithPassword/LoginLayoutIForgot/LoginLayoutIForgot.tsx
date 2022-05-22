import useTheme from 'common/Hooks/useTheme';
import Button from 'components/Button';
import React from 'react';
import {View} from 'react-native';
import {LoginLayoutIForgot as styles} from './LoginLayoutIForgot.style';
import {LoginLayoutLWPProps} from '../LoginLayoutLoginWithPassword.types';

const LoginLayoutIForgot = (props: LoginLayoutLWPProps) => {
  const {forgotPasswordClick, forgotUserCodeClick} = props;
  const {strings} = useTheme();

  return (
    <View style={styles.mainIForgotContainer}>
      <Button
        value={strings('login.forgotPassword')}
        nakedBtn
        onPress={forgotPasswordClick}
      />
      <View style={styles.mainIForgotBorder} />
      <Button
        value={strings('login.forgotUserCode')}
        nakedBtn
        onPress={forgotUserCodeClick}
      />
    </View>
  );
};

export default LoginLayoutIForgot;
