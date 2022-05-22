import {storiesOf} from '@storybook/react-native';
import ThankYouFeedback from 'components/ThankYouFeedback';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import Modal from './Modal';

storiesOf('Modal', module).add('Modal', () => {
  return (
    <MainContainer>
      <Modal isOpen>
        <ThankYouFeedback
          isOpen
          success="סיימתם את מבדק מוטוריקה גסה"
          commentText="ממש רואים את השיפור וההתפתחות."
        />
      </Modal>
    </MainContainer>
  );
});
