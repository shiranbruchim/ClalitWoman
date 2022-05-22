import useTheme from 'common/Hooks/useTheme';
import Button from 'components/Button';
import CheckBoxWrapper from 'components/CheckBoxWrapper';
import {radioBoxData} from 'components/CheckBoxWrapper/CheckBoxWrapper.types';
import RadioButton from 'components/RadioButton';
import React from 'react';
import {View, Text} from 'react-native';
import {LoginWIthSMSGetCode as styles} from './LoginWIthSMSGetCode.style';

const LoginWIthSMSGetCode = () => {
  const {strings} = useTheme();

  const onCheckBoxSelected = (selectedBox: radioBoxData) => {
    return selectedBox;
  };
  return (
    <View style={styles.getCodeContainer}>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>{strings('login.SMS.didntGotIt')}</Text>
        <Button
          nakedBtn
          underLine
          value={strings('login.SMS.sendAgain')}
          onPress={() => {}}
        />
      </View>
      <CheckBoxWrapper
        onCheckBoxSelected={onCheckBoxSelected}
        title="how to send code"
        type="radioButton"
        style={{flexDirection: 'row-reverse', justifyContent: 'space-around'}}>
        <RadioButton type="roundBox" value="ב-SMS" key={1} />
        <RadioButton type="roundBox" value="בשיחת בטלפון" key={2} />
      </CheckBoxWrapper>
    </View>
  );
};

export default LoginWIthSMSGetCode;
