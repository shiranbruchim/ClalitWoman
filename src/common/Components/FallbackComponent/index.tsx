// @flow
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import fallbackComponentStyles from './FallbackComponent.styles';
import {FallbackComponentProps} from './FallbackComponent.types';

const FallbackComponent = (props: FallbackComponentProps): JSX.Element => {
  const {error, resetError} = props;

  return (
    <SafeAreaView style={fallbackComponentStyles.container}>
      <View style={fallbackComponentStyles.content}>
        <Text style={fallbackComponentStyles.title}>Oops!</Text>
        <Text style={fallbackComponentStyles.subtitle}>There's an error</Text>
        <Text style={fallbackComponentStyles.error}>{error.toString()}</Text>
        <TouchableOpacity
          style={fallbackComponentStyles.button}
          onPress={resetError}>
          <Text style={fallbackComponentStyles.buttonText}>Try again</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FallbackComponent;
