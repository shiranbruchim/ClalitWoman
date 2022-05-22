import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import MainTopBar from '.';

describe('MainTopBar test', () => {
  afterEach(cleanup);

  it('should do somthing with MainTopBar', () => {
    renderer.create(<MainTopBar />);
  });
});
