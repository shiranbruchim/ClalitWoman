import React from 'react';
import {Text, View} from 'react-native';
import {TemplateNameStyle as styles} from './TemplateName.style';
import {TemplateNameProps} from './TemplateName.types';

const TemplateNameComponent = (props: TemplateNameProps) => {
  return (
    <View style={styles.mainViewContainer}>
      <Text>TemplateName</Text>
    </View>
  );
};

export default TemplateNameComponent;
