import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import ThankYouFeedback from './ThankYouFeedback';

storiesOf('ThankYouFeedback', module).add('ThankYouFeedback', () => {
  return (
    <MainContainer>
      <ThankYouFeedback
        success="סיימתם את מבדק מוטוריקה גסה"
        commentText="ממש רואים את השיפור וההתפתחות."
        isOpen={false}
      />
    </MainContainer>
  );
});
