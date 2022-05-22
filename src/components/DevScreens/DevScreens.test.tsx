import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import DevScreens from '.';

describe('DevScreens test', () => {
  afterEach(cleanup);

  it('should do somthing with DevScreens', () => {
    renderer.create(<DevScreens />);
  });
});
