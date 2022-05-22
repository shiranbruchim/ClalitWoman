import {
  hasHardwareAsync,
  supportedAuthenticationTypesAsync,
  isEnrolledAsync,
  authenticateAsync,
} from 'expo-local-authentication';

export const isCompatible = async () => {
  try {
    const compatible = await hasHardwareAsync();
    return compatible;
  } catch (error) {
    throw new Error('was not able to determinant compability');
  }
};

export const compatibleType = async () => {
  try {
    const Type = await supportedAuthenticationTypesAsync();
    return Type;
  } catch (error) {
    throw new Error('was not able to determinant compability type');
  }
};

export const isEnrolled = async () =>
  new Promise((resolve, reject) => {
    try {
      const enrolled = isEnrolledAsync();
      resolve(enrolled);
    } catch (error) {
      reject(error);
    } finally {
      resolve(false);
    }
  });

const LocalAuthenticationOptions = {
  promptMessage: 'login',
  cancelLabel: 'exit',
  disableDeviceFallback: false,
  fallbackLabel: 'fallbacl label',
};

export const authenticateUser = async () => {
  try {
    const authenticate = await authenticateAsync(LocalAuthenticationOptions);
    return authenticate;
  } catch (error) {
    throw new Error('was not able to determinant authentication');
  }
};
