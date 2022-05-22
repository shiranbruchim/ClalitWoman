import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import DatePicker from '.';

describe('DatePicker test', () => {
  afterEach(cleanup);

  it('should do somthing with DatePicker', () => {
    renderer.create(<DatePicker />);
  });
});
