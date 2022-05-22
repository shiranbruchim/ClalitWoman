import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import RightMenu from '.';

describe('RightMenu test', () => {
  afterEach(cleanup);

  it('should do somthing with RightMenu', () => {
    renderer.create(<RightMenu />);
  });
});
