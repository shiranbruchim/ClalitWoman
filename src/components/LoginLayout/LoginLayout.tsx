import React from 'react';
import {View} from 'react-native';
import LoginPage from 'pages/LoginPage';
import {LoginLayoutStyle as styles} from './LoginLayout.style';

type child = {
  children: JSX.Element | JSX.Element[];
};

const LoginLayoutComponent = (props: child) => {
  const {children} = props;
  return (
    <LoginPage>
      <View style={styles.mainLoginLayoutContainer}>{children}</View>
    </LoginPage>
  );
};

export default LoginLayoutComponent;
