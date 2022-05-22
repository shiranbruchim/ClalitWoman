import {getScreenHeight} from 'common/Utils';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {mainContainerStyles} from './MainContainer.style';
import {MainContainerProps} from './MainContainer.types';

const MainContainer = (props: MainContainerProps) => {
  const {children, topBar} = props;

  const viewStyles = [
    topBar && {
      height: getScreenHeight() - 110,
      marginTop: 2,
      overflow: 'hidden',
    },
  ];

  return (
    <View style={viewStyles}>
      <LinearGradient useAngle angle={138.37} colors={['#01667C', '#01667C']}>
        <SafeAreaView style={mainContainerStyles.bg}>
          <ScrollView
            style={mainContainerStyles.mainView}
            contentContainerStyle={{flexGrow: 1}}>
            {children}
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default MainContainer;
