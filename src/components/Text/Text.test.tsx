import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import Text from '.';

describe('Text test', () => {
  afterEach(cleanup);

  it('should do somthing with Text', () => {
    renderer.create(<Text />);
  });
});
