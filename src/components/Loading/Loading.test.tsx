import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import Loading from '.';

describe('Loading test', () => {
  afterEach(cleanup);

  it('should do somthing with Loading', () => {
    renderer.create(<Loading />);
  });
});
