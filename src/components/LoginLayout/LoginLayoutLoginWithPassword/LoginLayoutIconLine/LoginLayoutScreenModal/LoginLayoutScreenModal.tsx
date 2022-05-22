import useTheme from 'common/Hooks/useTheme';
import Button from 'components/Button';
import React, {useState, useEffect} from 'react';
import {Modal, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SlideInDownView} from 'common/Theme/animation/SlideInDown';
import {
  compatibleType,
  isCompatible,
} from 'common/Utils/biometricAuth/biometricAuth';
import Loading from 'components/Loading';
import {LoginLayoutScreenModal as styles} from './LoginLayoutScreenModal.style';
import {loginLayoutScreenModal} from './LoginLayoutScreenModal.types';

const LoginLayoutScreenModal = (props: loginLayoutScreenModal) => {
  const {strings, images} = useTheme();
  const {modalData, setModalData} = props;
  const {iconName, title, subTitle, numberIndicator, onPress} = modalData;
  const [loading, setLoading] = useState<boolean>(true);
  const [compatiblity, setCompatiblity] = useState<boolean>(false);

  const icon = images[iconName as keyof typeof images];

  const SMSConnection = () => {
    setCompatiblity(true);
    setLoading(false);
  };

  const compatibleCheck = async () => {
    const compatible = await isCompatible();

    if (!compatible) {
      setCompatiblity(false);
      setLoading(false);
      return false;
    }
    return true;
  };

  useEffect(() => {
    const compatibilityCheck = async () => {
      if (numberIndicator === 0) {
        return SMSConnection();
      }

      const compatible = await compatibleCheck();

      if (!compatible) {
        return false;
      }

      const compatiblitytype = await compatibleType();
      if (!compatiblitytype) {
        return false;
      }
      setCompatiblity(compatiblitytype.includes(numberIndicator));
      setLoading(false);
      return true;
    };
    compatibilityCheck();
  }, [numberIndicator]);

  const onPressHandler = () => {
    onPress();
    setModalData({});
  };

  const mainModalText = () => {
    if (loading) {
      return <Loading />;
    }
    if (compatiblity) {
      return (
        <>
          <View style={styles.ModalInnerBottomTextContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
          <Button
            value={strings('loginLayout.startProcces')}
            onPress={onPressHandler}
            borderXL
            slim
          />
        </>
      );
    }
    return (
      <View style={styles.ModalInnerBottomTextContainer}>
        <Text style={styles.subTitle}>
          לא קיימת האפשרות להתחברות בצורה זו במכשירך
        </Text>
      </View>
    );
  };

  return (
    <Modal animationType="fade" transparent>
      <View style={styles.ModalContainer}>
        <SlideInDownView finalMargin={116} durationTime={300} style={{}}>
          <View style={styles.ModalInnerContainer}>
            <TouchableOpacity onPress={() => setModalData({})}>
              <View style={styles.ModalInnerTopCircul}>
                <Text style={styles.ModalInnerTopCirculIcon}>X</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.ModalInnerBottomContainer}>
              <Image style={styles.icon} source={icon} />
              {mainModalText()}
            </View>
          </View>
        </SlideInDownView>
      </View>
    </Modal>
  );
};

export default LoginLayoutScreenModal;
