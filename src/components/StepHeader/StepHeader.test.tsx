import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import StepHeader from '.';

describe('StepHeader test', () => {
  afterEach(cleanup);

  it('should do somthing with StepHeader', () => {
    renderer.create(<StepHeader />);
  });
});
