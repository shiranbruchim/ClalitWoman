import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import Exit from '.';

describe('Exit test', () => {
  afterEach(cleanup);

  it('should do somthing with Exit', () => {
    renderer.create(<Exit />);
  });
});
