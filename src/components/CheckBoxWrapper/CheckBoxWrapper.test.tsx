import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import CheckBoxWrapper from '.';

describe('CheckBoxWrapper test', () => {
  afterEach(cleanup);

  it('should do somthing with CheckBoxWrapper', () => {
    renderer.create(<CheckBoxWrapper />);
  });
});
