import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import Question from '.';

describe('Question test', () => {
  afterEach(cleanup);

  it('should do somthing with Question', () => {
    renderer.create(<Question />);
  });
});
