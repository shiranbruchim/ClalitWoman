import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import ProgressBar from './ProgressBar';

storiesOf('ProgressBar', module).add('ProgressBar', () => {
  return (
    <MainContainer>
      {/* progress bar */}
      <ProgressBar width={200} contentLength={6} index={3} />
    </MainContainer>
  );
});
