import useTheme from 'common/Hooks/useTheme';
import Button from 'components/Button';
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import LoginLayoutComponent from 'components/LoginLayout/LoginLayout';
import LoginTitle from 'components/LoginLayout/LoginTitle/LoginTitle';
import {navigate} from 'common/Utils/rootNavigation/navigationRef';
import {LoginLayoutWithFaceRecognitionStyle as styles} from '../../LoginLayoutWithFaceRecognition/LoginLayoutWithFaceRecognition.style';
import {LoginLayoutWithFaceRecognitionProps} from '../../LoginLayoutWithFaceRecognition/LoginLayoutWithFaceRecognition.types';
import LoginLayoutCardComponent from '../../LoginLayoutCard/index';

const LoginLayoutWithFingerPrintSettings = (
  props: LoginLayoutWithFaceRecognitionProps,
) => {
  let {termsOfAgreementData} = props;
  const {strings} = useTheme();
  const {title = strings('login.faceId.enterWithFaceId')} = props;

  termsOfAgreementData = {
    terms: [
      'הכנס לתפריט "הגדרות" במכשירך',
      'בחר בתפריט "טביעת אצבע" ועקוב אחר ההנחיות',
    ],
  };

  /* TODO: Exrtact to component */
  const termsList = (): JSX.Element[] => {
    const list = termsOfAgreementData.terms.map((term, index) => {
      return (
        <View style={styles.termTextWrapper} key={term}>
          <Text style={styles.termNumber}>
            .{index > 10 ? '0' : ''}
            {index}
          </Text>
          <Text style={styles.termText}>{term}</Text>
        </View>
      );
    });
    return list;
  };

  const nextPage = () => {
    navigate('LoginWithFingerPrintStepTwo');
  };

  return (
    <LoginLayoutComponent>
      <LoginTitle
        title={title}
        subTitle={strings(
          'login.fingerPrint.youNeedToGoToYourfingerPrintSetting',
        )}
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
      {/* TODO: Exrtact to component */}
      <View style={styles.mainButtonContainer}>
        <Button
          value={strings('login.faceId.goToYourDeviceSettings')}
          borderXL
          onPress={() => nextPage()}
          semiSlim
        />
      </View>
    </LoginLayoutComponent>
  );
};

export default LoginLayoutWithFingerPrintSettings;
