import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import RadioButton from '.';

describe('RadioButton test', () => {
  afterEach(cleanup);

  it('should do somthing with RadioButton', () => {
    renderer.create(<RadioButton />);
  });
});
