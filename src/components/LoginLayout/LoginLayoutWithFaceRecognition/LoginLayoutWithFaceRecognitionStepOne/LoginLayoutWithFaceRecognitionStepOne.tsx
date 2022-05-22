import useTheme from 'common/Hooks/useTheme';
import Button from 'components/Button';
import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import CheckBoxWrapper from 'components/CheckBoxWrapper';
import CheckBox from 'components/CheckBox';
import LoginLayoutComponent from 'components/LoginLayout/LoginLayout';
import {useEnrollment} from 'common/Hooks/useEnrollment';
import LoginTitle from 'components/LoginLayout/LoginTitle/LoginTitle';
import {navigate} from 'common/Utils/rootNavigation/navigationRef';
import {selectedBoxData} from 'components/CheckBoxWrapper/CheckBoxWrapper.types';
import {LoginLayoutWithFaceRecognitionStyle as styles} from '../LoginLayoutWithFaceRecognition.style';
import {LoginLayoutWithFaceRecognitionProps} from '../LoginLayoutWithFaceRecognition.types';
import LoginLayoutCardComponent from '../../LoginLayoutCard/index';

const LoginLayoutWithFaceRecognitionStepOne = (
  props: LoginLayoutWithFaceRecognitionProps,
) => {
  let {termsOfAgreementData = {title: '', terms: ['']}} = props;
  const {strings} = useTheme();
  const [userReply, setUserSelections] = useState<Array<string>>([]);
  const [errors, setErrors] = useState<string>();

  const {userEnrolled} = useEnrollment();

  // TODO: Find a way to rerender
  // useEffect(() => {
  //   // remove return
  //   userEnrolled().then(enrolled => {
  //     setUserEnrolled(enrolled);
  //   });
  // }, []);

  termsOfAgreementData = {
    title:
      'כללית מאפשרת ללקחותיה כניסה לתיק הרפואי האישי באפליקצית כללית התפתחות הילד.',
    terms: [
      'ידוע לי שהשימוש בשירות הינו זמין רק אם יש לי מכשיר נייד שתומך בהגדרות השירות',
      'מכיוון שלכל מערכת הפעלה בסמרטפון יש מנגנון שונה לסריקת טביעת אצבע,ידוע לי שסריקת האצבע',
      'מכיוון שלכל מערכת הפעלה בסמרטפון יש מנגנון שונה לסריקת טביעת אצבע, ידוע לי שסריקת האצבע',
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

  const onCheckBoxSelect = (data: selectedBoxData) => {
    return setUserSelections(data.userReply);
  };

  const isTermsAprroved = () => {
    return userReply.includes(strings('login.faceId.approve'));
  };

  const checkBoxValidation = () => {
    if (isTermsAprroved()) {
      if (userEnrolled) {
        navigate('LoginWithFaceidStepTwo');
      } else {
        navigate('LoginWithFaceidSettings');
      }
    } else {
      setErrors(strings('login.faceId.approveTermsError'));
    }
  };

  return (
    <LoginLayoutComponent>
      <LoginTitle
        title={strings('login.faceId.enterWithFaceId')}
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

export default LoginLayoutWithFaceRecognitionStepOne;
