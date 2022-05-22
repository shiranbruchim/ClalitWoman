import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import Button from './Button';

const iconBtn = {
  btnSize: 'small',
  iconName: 'videoCamera',
};

storiesOf('Button', module)
  .add('ButtonDefault', () => {
    return (
      <MainContainer>
        <Button
          heightL
          borderL
          disabled={false}
          secondary={false}
          outline={false}
          formOutline
          RoundedUp={false}
          RoundedDown={false}
          value="לצפיה"
          onPress={() => {}}
        />
      </MainContainer>
    );
  })
  .add('Button1', () => {
    return (
      <MainContainer>
        <Button
          disabled={false}
          secondary={false}
          outline={false}
          RoundedUp={false}
          RoundedDown={false}
          value="לצפיה"
          onPress={() => {}}
          iconBtn={iconBtn}
        />
      </MainContainer>
    );
  });
