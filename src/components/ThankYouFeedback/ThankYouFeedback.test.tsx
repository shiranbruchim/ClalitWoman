import React from 'react';
import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import ThankYouFeedback from '.';

describe('ThankYouFeedback test', () => {
  afterEach(cleanup);

  it('should do somthing with ThankYouFeedback', () => {
    renderer.create(<ThankYouFeedback />);
  });
});
