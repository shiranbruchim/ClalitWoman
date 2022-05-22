import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import Modal from '.';

describe('Modal test', () => {
  afterEach(cleanup);

  it('should do somthing with Modal', () => {
    renderer.create(<Modal isOpen />);
  });
});
