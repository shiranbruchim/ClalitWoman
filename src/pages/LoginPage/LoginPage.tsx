import React from 'react';
import {View} from 'react-native';
import MainContainer from 'containers/MainContainer';
import {LoginStyle as styles} from './LoginPage.style';

type child = {
  children: JSX.Element;
};

const LoginPage = (props: child) => {
  const {children} = props;
  return (
    <MainContainer>
      <View style={styles.mainLoginContainer}>{children}</View>
    </MainContainer>
  );
};

export default LoginPage;
