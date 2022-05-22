import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import RightMenuBar from '.';

describe('RightMenuBar test', () => {
  afterEach(cleanup);

  it('should do somthing with RightMenuBar', () => {
    renderer.create(<RightMenuBar />);
  });
});
