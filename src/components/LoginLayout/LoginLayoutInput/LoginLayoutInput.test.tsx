import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import LoginLayoutInput from '.';

describe('LoginLayoutInput test', () => {
  afterEach(cleanup);

  it('should do somthing with LoginLayoutInput', () => {
    renderer.create(<LoginLayoutInput />);
  });
});
