import useTheme from 'common/Hooks/useTheme';
import {navigate} from 'common/Utils/rootNavigation/navigationRef';
import Button from 'components/Button';
import LoginLayoutComponent from 'components/LoginLayout/LoginLayout';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {LoginLayoutWithFaceRecognitionStyle as styles} from '../LoginLayoutWithFaceRecognition.style';
// import {LoginLayoutWithFaceRecognitionProps} from '../LoginLayoutWithFaceRecognition.types';

const LoginLayoutWithFaceRecognitionSuccess = () => {
  const {strings, images} = useTheme();

  const goHome = () => {
    navigate('Home');
  };

  return (
    <LoginLayoutComponent>
      <View style={styles.mainSuccessContainer}>
        <View style={styles.mainSuccessTextContainer}>
          <Image style={styles.imageSuccessPage} source={images.success()} />
          <Text style={styles.mainTitleSuccessText}>
            {strings('login.faceId.signUpSuccessfully')}
          </Text>
          <Text style={styles.SubTitleText}>
            {strings('login.faceId.fromNowOnYouCanLoginEasily')}
          </Text>
        </View>
        <View style={styles.mainButtonContainer}>
          <Button
            value={strings('login.faceId.connectTheApp')}
            borderXL
            onPress={() => goHome()}
            semiSlim
          />
        </View>
      </View>
    </LoginLayoutComponent>
  );
};

export default LoginLayoutWithFaceRecognitionSuccess;
