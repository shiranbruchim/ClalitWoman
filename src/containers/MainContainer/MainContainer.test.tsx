import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import {Text} from 'react-native';
import MainContainer from './index';

describe('Test MainContainer component', () => {
  afterEach(cleanup);

  it('should show MainContainer', () => {
    renderer.create(
      <MainContainer>
        <Text>TEST</Text>
      </MainContainer>,
    );
  });
});
