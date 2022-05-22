jest.mock('react-native-device-info', () => ({
  getVersion: jest.fn(() => Promise.resolve('1.0')),
  getApplicationName: jest.fn(() => Promise.resolve('My App')),
  hasNotch: jest.fn(),
}));
