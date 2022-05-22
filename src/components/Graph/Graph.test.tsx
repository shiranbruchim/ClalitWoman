import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import Graph from '.';

describe('Graph test', () => {
  afterEach(cleanup);

  it('should do somthing with Graph', () => {
    renderer.create(<Graph />);
  });
});
