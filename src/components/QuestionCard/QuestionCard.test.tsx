import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import QuestionCard from '.';

describe('QuestionCard test', () => {
  afterEach(cleanup);

  it('should do somthing with QuestionCard', () => {
    renderer.create(<QuestionCard />);
  });
});
