import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import CheckBox from '.';

describe('CheckBox test', () => {
  afterEach(cleanup);

  it('should do somthing with CheckBox', () => {
    renderer.create(<CheckBox />);
  });
});
