import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import TextWithTitle from '.';

describe('TextWithTitle test', () => {
  afterEach(cleanup);

  it('should do somthing with TextWithTitle', () => {
    renderer.create(<TextWithTitle />);
  });
});
