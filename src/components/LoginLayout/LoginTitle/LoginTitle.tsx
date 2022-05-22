import {goBack} from 'common/Utils/rootNavigation/navigationRef';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {LoginTitleStyle as styles} from './LoginTitle.style';
import {LoginTitleProps} from './LoginTitle.types';

const LoginTitle = (props: LoginTitleProps) => {
  const {title, subTitle, backBtn, generalError} = props;

  return (
    <View style={styles.mainTitleContainer}>
      <View style={styles.TitleContainer}>
        {backBtn && (
          <TouchableOpacity
            style={styles.mainTitleBackArrowButton}
            onPress={() => goBack()}>
            <Text style={styles.mainTitleBackArrow}>{'<'}</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.mainTitleText}>{title}</Text>
      </View>
      {subTitle && <Text style={styles.mainSubTitleText}>{subTitle}</Text>}
      {generalError && (
        <Text style={styles.errorMessage}>{generalError()}</Text>
      )}
    </View>
  );
};

export default LoginTitle;
