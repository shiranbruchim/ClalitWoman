import {createStackNavigator} from '@react-navigation/stack';
// import BottomMenu from 'components/BottomMenu';
import Home from 'components/Home';
import LoginLayoutSignWithPasswordForm from 'components/LoginLayout/LoginLayoutLoginWithPassword/LoginLayoutSignWithPasswordForm';
import LoginLayoutLoginWithSMSComponent from 'components/LoginLayout/LoginLayoutLoginWithSMS/LoginWithSMSStepOne/LoginLayoutLoginWithSMSStepOne';
import LoginLayoutLoginWithSMSStepTwoComponent from 'components/LoginLayout/LoginLayoutLoginWithSMS/LoginWithSMSStepTwo/LoginLayoutLoginWithSMSStepTwo';
import LoginLayoutWithFaceRecognitionSettings from 'components/LoginLayout/LoginLayoutWithFaceRecognition/LoginLayoutWithFaceRecognitionSettings/LoginLayoutWithFaceRecognitionSettings';
import LoginLayoutWithFaceRecognitionStepOne from 'components/LoginLayout/LoginLayoutWithFaceRecognition/LoginLayoutWithFaceRecognitionStepOne/LoginLayoutWithFaceRecognitionStepOne';
import LoginLayoutWithFaceRecognitionStepThree from 'components/LoginLayout/LoginLayoutWithFaceRecognition/LoginLayoutWithFaceRecognitionStepThree/LoginLayoutWithFaceRecognitionStepThree';
import LoginLayoutWithFaceRecognitionStepTwo from 'components/LoginLayout/LoginLayoutWithFaceRecognition/LoginLayoutWithFaceRecognitionStepTwo/LoginLayoutWithFaceRecognitionStepTwo';
import LoginLayoutWithFaceRecognitionSuccess from 'components/LoginLayout/LoginLayoutWithFaceRecognition/LoginLayoutWithFaceRecognitionSuccess/LoginLayoutWithFaceRecognitionSuccess';
import LoginLayoutWithFingerPrintSettings from 'components/LoginLayout/LoginLayoutWithFingerPrint/LoginLayoutWithFingerPrintSettings/LoginLayoutWithFingerPrintSettings';
import LoginLayoutWithFingerPrintStepOne from 'components/LoginLayout/LoginLayoutWithFingerPrint/LoginLayoutWithFingerPrintStepOne/LoginLayoutWithFingerPrintStepOne';
import LoginLayoutWithFingerPrintStepThree from 'components/LoginLayout/LoginLayoutWithFingerPrint/LoginLayoutWithFingerPrintStepThree/LoginLayoutWithFingerPrintStepThree';
import LoginLayoutWithFingerPrintStepTwo from 'components/LoginLayout/LoginLayoutWithFingerPrint/LoginLayoutWithFingerPrintStepTwo/LoginLayoutWithFingerPrintStepTwo';

import React from 'react';
import {ScreenNames} from './ScreenNames.types';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const screenParams = [
    {
      name: ScreenNames.Login,
      component: LoginLayoutSignWithPasswordForm,
    },
    {
      name: ScreenNames.LoginWithSMS,
      component: LoginLayoutLoginWithSMSComponent,
    },
    {
      name: ScreenNames.LoginWithSMSStepTwo,
      component: LoginLayoutLoginWithSMSStepTwoComponent,
    },
    {
      name: ScreenNames.LoginWithFaceid,
      component: LoginLayoutWithFaceRecognitionStepOne,
    },
    {
      name: ScreenNames.LoginWithFaceidSettings,
      component: LoginLayoutWithFaceRecognitionSettings,
    },
    {
      name: ScreenNames.LoginWithFaceidStepTwo,
      component: LoginLayoutWithFaceRecognitionStepTwo,
    },
    {
      name: ScreenNames.LoginWithFaceidStepThree,
      component: LoginLayoutWithFaceRecognitionStepThree,
    },
    {
      name: ScreenNames.LoginWithFingerPrint,
      component: LoginLayoutWithFingerPrintStepOne,
    },
    {
      name: ScreenNames.LoginWithFingerPrintSettings,
      component: LoginLayoutWithFingerPrintSettings,
    },
    {
      name: ScreenNames.LoginWithFingerPrintStepTwo,
      component: LoginLayoutWithFingerPrintStepTwo,
    },
    {
      name: ScreenNames.LoginWithFingerPrintStepThree,
      component: LoginLayoutWithFingerPrintStepThree,
    },
    {
      name: ScreenNames.LoginSuccess,
      component: LoginLayoutWithFaceRecognitionSuccess,
    },
    {
      name: ScreenNames.Home,
      component: Home,
    },
    // {
    //   name: ScreenNames.Notification,
    //   component: Notification,
    // },
    // {
    //   name: 'test',
    //   component: BottomMenu,
    // },
  ];

  const MainNavAttributes = {
    initialRouteName: ScreenNames.Login,
    screenOptions: {
      headerShown: false,
    },
  };

  return (
    <Stack.Navigator {...MainNavAttributes}>
      {screenParams.map(screen => (
        <Stack.Screen key={screen.name} {...screen} />
      ))}
    </Stack.Navigator>
  );
};

export default AppNavigator;
