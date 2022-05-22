module.exports = {
  roots: ['<rootDir>'],
  preset: 'react-native',
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@fonts(.*)$': '<rootDir>/src/fonts$1',
    '^@common(.*)$': '<rootDir>/src/common$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@hoc(.*)$': '<rootDir>/src/hoc$1',
    '^@containers(.*)$': '<rootDir>/src/containers$1',
  },
  testPathIgnorePatterns: ['./node_modules/'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation)',
  ],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
};
