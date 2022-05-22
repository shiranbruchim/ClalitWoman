import useTheme from 'common/Hooks/useTheme';
import Button from 'components/Button';
import React from 'react';
import {View, Text, ScrollView, Linking, Platform} from 'react-native';
import LoginLayoutComponent from 'components/LoginLayout/LoginLayout';
import LoginTitle from 'components/LoginLayout/LoginTitle/LoginTitle';
import {navigate} from 'common/Utils/rootNavigation/navigationRef';
import {LoginLayoutWithFaceRecognitionStyle as styles} from '../LoginLayoutWithFaceRecognition.style';
import {LoginLayoutWithFaceRecognitionProps} from '../LoginLayoutWithFaceRecognition.types';
import LoginLayoutCardComponent from '../../LoginLayoutCard/index';

const LoginLayoutWithFaceRecognitionSettings = (
  props: LoginLayoutWithFaceRecognitionProps,
) => {
  const {strings} = useTheme();
  const {title = strings('login.faceId.enterWithFaceId')} = props;

  const termsOfAgreementData = {
    terms: [
      'הכנס לתפריט "הגדרות" במכשירך',
      'בחר בתפריט "טביעת אצבע" ועקוב אחר ההנחיות',
    ],
  };

  const termsList = (): JSX.Element[] => {
    const list = termsOfAgreementData.terms.map((term, index) => {
      return (
        <View style={styles.termTextWrapper} key={term}>
          <Text style={styles.termNumber}>.0{index + 1}</Text>
          <Text style={styles.termText}>{term}</Text>
        </View>
      );
    });
    return list;
  };

  const goToSettings = () => {
    Platform.OS === 'ios'
      ? Linking.openURL('App-Prefs:Privacy')
      : Linking.sendIntent('android.settings.PRIVACY_SETTINGS');
    navigate('LoginWithFaceidStepTwo');
  };

  return (
    <LoginLayoutComponent>
      <LoginTitle
        title={title}
        subTitle={strings('login.faceId.youNeedToGoToYourFaceIdSetting')}
        backBtn
      />
      <LoginLayoutCardComponent>
        <ScrollView>
          {termsList()}
          <View style={styles.helpButton}>
            <Button
              nakedBtn
              value={strings('login.faceId.needHelp')}
              onPress={() => {}}
            />
          </View>
        </ScrollView>
      </LoginLayoutCardComponent>
      <View style={styles.mainButtonContainer}>
        <Button
          value={strings('login.faceId.goToYourDeviceSettings')}
          borderXL
          onPress={() => goToSettings()}
          semiSlim
        />
      </View>
    </LoginLayoutComponent>
  );
};

export default LoginLayoutWithFaceRecognitionSettings;
