import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import MiniAvatar from '.';

describe('MiniAvatar test', () => {
  afterEach(cleanup);

  it('should do somthing with MiniAvatar', () => {
    renderer.create(<MiniAvatar />);
  });
});
