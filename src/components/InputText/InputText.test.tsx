import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import InputText from '.';

describe('InputText test', () => {
  afterEach(cleanup);

  it('should do somthing with InputText', () => {
    renderer.create(<InputText />);
  });
});
