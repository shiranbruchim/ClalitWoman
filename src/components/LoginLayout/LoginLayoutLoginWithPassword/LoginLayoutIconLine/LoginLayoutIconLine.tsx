import useTheme from 'common/Hooks/useTheme';
import {authenticateUser} from 'common/Utils/biometricAuth/biometricAuth';
import Button from 'components/Button';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {navigate} from 'common/Utils/rootNavigation/navigationRef';
import {LoginLayoutIconLine as styles} from './LoginLayoutIconLine.style';
// import {LoginLayoutLWPProps} from '../LoginLayoutLoginWithPassword.types';
import LoginLayoutScreenModal from './LoginLayoutScreenModal/LoginLayoutScreenModal';

type modalType =
  | {
      onPress: () => void;
      numberIndicator: number;
      iconName: string;
      title: string;
      subTitle: string;
    }
  | Record<string, never>;

const LoginLayoutIconLineComponent = () => {
  const {strings} = useTheme();
  const [modalScreen, setModalScreen] = useState<modalType>({});
  const userRegistered = {register: false, type: 2};

  const IconBtnStyle = [
    {
      value: strings('login.useSMS'),
      style: {
        btnSize: 'small',
        iconName: 'videoCamera',
        largeText: true,
      },
      modalData: {
        onPress: () => {
          navigate('LoginWithSMS');
        },
        numberIndicator: 0,
        iconName: 'videoCamera',
        title: 'כניסה עם קוד ב-SMS',
        subTitle: 'כדי להזדהות עם קוד ב-SMS יש לעבור תהליך זיהוי קצר',
      },
    },
    {
      value: strings('login.faceRecognition'),
      style: {
        btnSize: 'small',
        iconName: 'videoCamera',
        largeText: true,
      },
      modalData: {
        onPress: () => {
          navigate('LoginWithFaceid');
        },
        iconName: 'videoCamera',
        numberIndicator: 2,
        title: 'כניסה בזיהוי פנים',
        subTitle: 'כדי להזדהות בזיהוי פנים יש לעבור תהליך זיהוי קצר',
      },
    },
    {
      value: strings('login.fingerPrint'),
      style: {
        btnSize: 'small',
        iconName: 'videoCamera',
        largeText: true,
      },
      modalData: {
        onPress: () => {
          navigate('LoginWithFingerPrint');
        },
        iconName: 'videoCamera',
        numberIndicator: 1,
        title: 'כניסה עם טביעת אצבע',
        subTitle: 'כדי להזדהות עם טביעת אצבע יש לעבור תהליך זיהוי קצר',
      },
    },
  ];

  const authenticate = async () => {
    const authenticatedUser = await authenticateUser();

    if (!authenticatedUser?.success) {
      navigate('Login');
    }

    return navigate('LoginSuccess');
  };

  const connectionHandler = (data: modalType) => {
    if (
      !userRegistered.register ||
      userRegistered.type !== data.numberIndicator
    ) {
      return setModalScreen(data);
    }

    return authenticate();
  };
  return (
    <View style={styles.mainIconLineContainer}>
      <Text style={styles.mainIconLineText}>התחברות באמצעות</Text>
      <View style={styles.mainIconLineIcon}>
        {IconBtnStyle.map(data => {
          return (
            <Button
              key={data.value}
              value={data.value}
              iconBtn={data.style}
              onPress={() => connectionHandler(data.modalData)}
            />
          );
        })}
      </View>
      {Object.keys(modalScreen).length > 0 && (
        <LoginLayoutScreenModal
          modalData={modalScreen}
          setModalData={setModalScreen}
        />
      )}
    </View>
  );
};

export default LoginLayoutIconLineComponent;
