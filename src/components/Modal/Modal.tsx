import React, {cloneElement, useState} from 'react';
import {Modal, View} from 'react-native';
import {ModalStyle as styles} from './Modal.style';
import {ModalProps} from './Modal.types';

const ModalComponent = (props: ModalProps) => {
  const {children, isOpen} = props;
  const [open, setOpen] = useState<boolean>(isOpen);

  const handleClose = () => {
    setOpen(!open);
  };
  // eslint-disable-next-line consistent-return
  const childrenWithProps = () => {
    if (children) {
      return cloneElement(children, {handleClose: () => handleClose()});
    }
  };

  return (
    <Modal animationType="fade" visible={open} transparent>
      <View style={styles.modalWrapper}>{childrenWithProps()}</View>
    </Modal>
  );
};

export default ModalComponent;
