import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import ProgressBar from '.';

describe('ProgressBar test', () => {
  afterEach(cleanup);

  it('should do somthing with ProgressBar', () => {
    renderer.create(<ProgressBar />);
  });
});
