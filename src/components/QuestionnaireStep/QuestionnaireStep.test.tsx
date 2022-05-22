import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import QuestionnaireStep from './QuestionnaireStep';

describe('Step test', () => {
  afterEach(cleanup);

  it('should do somthing with Step', () => {
    renderer.create(<QuestionnaireStep />);
  });
});
