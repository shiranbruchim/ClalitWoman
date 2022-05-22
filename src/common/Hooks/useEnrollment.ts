import {
  authenticateUser,
  compatibleType,
  isCompatible,
  isEnrolled,
} from 'common/Utils/biometricAuth/biometricAuth';
import {useEffect, useState} from 'react';

export const useEnrollment = () => {
  const [userEnrolled, setUserEnrolled] = useState(false);

  const LocalAuthenticationOptions = {
    promptMessage: 'login',
    cancelLabel: 'exit',
    disableDeviceFallback: false,
    fallbackLabel: 'fallbacl label',
  };

  useEffect(() => {
    isEnrolled().then((enrolled: boolean) => {
      setUserEnrolled(enrolled);
    });
  }, []);

  const compatible = isCompatible();
  const compatibleTypes = compatibleType();

  const displayAuthenticationModal = () => {
    userEnrolled && authenticateUser(LocalAuthenticationOptions);
  };

  return {
    userEnrolled,
    compatible,
    compatibleTypes,
    displayAuthenticationModal,
  };
};
