import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import Home from '.';

describe('Home test', () => {
  afterEach(cleanup);

  it('should do somthing with Home', () => {
    renderer.create(<Home />);
  });
});
