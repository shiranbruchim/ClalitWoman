import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import TemplateName from '.';

describe('TemplateName test', () => {
  afterEach(cleanup);

  it('should do somthing with TemplateName', () => {
    renderer.create(<TemplateName />);
  });
});
