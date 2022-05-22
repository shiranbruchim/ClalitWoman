import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import Avatar from '.';

describe('Avatar test', () => {
  afterEach(cleanup);

  it('should do somthing with Avatar', () => {
    renderer.create(<Avatar />);
  });
});
