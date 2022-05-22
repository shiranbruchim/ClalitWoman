type modalType =
  | {
      onPress: () => void;
      numberIndicator: number;
      iconName: string;
      title: string;
      subTitle: string;
    }
  | Record<string, never>;

export type loginLayoutScreenModal = {
  modalData: modalType;
  setModalData: (prev: modalType) => void;
};
