import ErrorBoundary from 'common/Components/ErrorBoundary';
import FallbackComponent from 'common/Components/FallbackComponent';
import {log} from 'common/Utils';
import {AppContextProvider} from 'common/Context/AppContextProvider';
import React from 'react';
import {KeyboardAvoidingView, LogBox} from 'react-native';
import AppNavigation from 'components/Navigation/AppNavigation';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'Warning: Encountered two children with the same key,',
]);

const App = () => {
  const errorHandler = (
    current: ErrorBoundary,
    error: null | Error,
    stack: string,
  ) => {
    log(stack);
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ErrorBoundary
        FallbackComponent={FallbackComponent}
        onError={errorHandler}>
        <AppContextProvider>
          <AppNavigation />
        </AppContextProvider>
      </ErrorBoundary>
    </KeyboardAvoidingView>
  );
};

export default App;
