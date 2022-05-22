import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import BottomMenu from '.';

describe('BottomMenu test', () => {
  afterEach(cleanup);

  it('should do somthing with BottomMenu', () => {
    renderer.create(<BottomMenu />);
  });
});
