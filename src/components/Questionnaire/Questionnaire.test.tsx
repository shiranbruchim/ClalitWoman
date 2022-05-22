import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import Questionnaire from './Questionnaire';

describe('Questionnaire', () => {
  afterEach(cleanup);

  it('Display questionaire', () => {
    renderer.create(<Questionnaire />);
  });
});
