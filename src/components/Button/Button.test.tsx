import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import Button from '.';

describe('Button test', () => {
  afterEach(cleanup);

  it('should do somthing with Button', () => {
    renderer.create(<Button />);
  });
});
