import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import InputsList from '.';

describe('InputsList test', () => {
  afterEach(cleanup);

  it('should do somthing with InputsList', () => {
    renderer.create(<InputsList />);
  });
});
