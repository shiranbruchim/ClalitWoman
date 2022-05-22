import useTheme from 'common/Hooks/useTheme';
import Button from 'components/Button';
import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import CheckBoxWrapper from 'components/CheckBoxWrapper';
import CheckBox from 'components/CheckBox';
import LoginLayoutComponent from 'components/LoginLayout/LoginLayout';
import {isEnrolled} from 'common/Utils/biometricAuth/biometricAuth';
import LoginTitle from 'components/LoginLayout/LoginTitle/LoginTitle';
import {selectedBoxData} from 'components/CheckBoxWrapper/CheckBoxWrapper.types';
import {navigate} from 'common/Utils/rootNavigation/navigationRef';
import {LoginLayoutWithFaceRecognitionStyle as styles} from '../../LoginLayoutWithFaceRecognition/LoginLayoutWithFaceRecognition.style';
import {LoginLayoutWithFaceRecognitionProps} from '../../LoginLayoutWithFaceRecognition/LoginLayoutWithFaceRecognition.types';
import LoginLayoutCardComponent from '../../LoginLayoutCard/index';

const LoginLayoutWithFingerPrintStepOne = (
  props: LoginLayoutWithFaceRecognitionProps,
) => {
  let {termsOfAgreementData} = props;
  const {strings} = useTheme();
  const [userReply, setUserReply] = useState<string[]>();
  const [errors, setErrors] = useState<string>();
  const [userEnrolled, setUserEnrolled] = useState(false);

  useEffect(() => {
    const enrollmentCheck = async () => {
      const enrolled = await isEnrolled();

      if (!enrolled) {
        return false;
      }

      return setUserEnrolled(true);
    };
    enrollmentCheck();
  }, []);

  termsOfAgreementData = {
    title:
      'כללית מאפשרת ללקחותיה כניסה לתיק הרפואי האישי באפליקצית כללית התפתחות הילד.',
    terms: [
      'ידוע לי שהשימוש בשירות הינו זמין רק אם יש לי מכשיר נייד שתומך בהגדרות השירות',
      'מכיוון שלכל מערכת הפעלה בסמרטפון יש מנגנון שונה לסריקת טביעת אצבע,ידוע לי שסריקת האצבע',
      'מכיוון שלכל מערכת הפעלה בסמרטפון יש מנגנון שונה לסריקת טביעת אצבע, ידוע לי שסריקת האצבע',
    ],
  };

  /* TODO: Exrtact to component */
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

  const onCheckBoxSelect = (data: selectedBoxData) => {
    return setUserReply(data.userReply);
  };

  const enrollmentValidationn = () => {
    if (userEnrolled) {
      navigate('LoginWithFingerPrintStepTwo');
    } else {
      navigate('LoginWithFingerPrintSettings');
    }
  };

  const checkBoxValidation = () => {
    const found = userReply?.includes(strings('login.faceId.approve'));
    if (found) {
      setErrors('');
      enrollmentValidationn();
    } else {
      setErrors(strings('login.faceId.approveTermsError'));
    }
  };

  return (
    <LoginLayoutComponent>
      <LoginTitle
        title={strings('login.fingerPrint.enterWithFingerPrint')}
        subTitle={strings('login.faceId.approveTermsOfAgreement')}
        backBtn
      />
      <LoginLayoutCardComponent>
        <Text style={styles.termText}>{termsOfAgreementData.title}</Text>
        <ScrollView>{termsList()}</ScrollView>
        <View style={styles.checkboxWrapper}>
          <CheckBoxWrapper
            title="termApprove"
            type="checkBox"
            style={{
              justifyContent: 'space-evenly',
              height: errors ? 100 : 90,
            }}
            onCheckBoxSelected={onCheckBoxSelect}>
            <CheckBox
              error={errors}
              value={strings('login.faceId.approve')}
              key={1}>
              <Button
                value={strings('login.faceId.approveTermsOfUse')}
                nakedBtn
                underLine
                onPress={() => {}}
              />
            </CheckBox>
            <CheckBox
              value={strings('login.faceId.approveDataTransfer')}
              key={2}
            />
          </CheckBoxWrapper>
        </View>
      </LoginLayoutCardComponent>
      <View style={styles.mainButtonContainer}>
        <Button
          value={strings('login.faceId.approveTerms')}
          borderXL
          onPress={() => checkBoxValidation()}
          semiSlim
        />
      </View>
    </LoginLayoutComponent>
  );
};

export default LoginLayoutWithFingerPrintStepOne;
