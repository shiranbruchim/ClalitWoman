import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import LoginLayout from '.';

describe('LoginLayout test', () => {
  afterEach(cleanup);

  it('should do somthing with LoginLayout', () => {
    renderer.create(<LoginLayout />);
  });
});
