import React from 'react';
import {View, Modal as BasedModal, StyleSheet} from 'react-native';
import Text from '../Text';
import Button from '../Button';
import {Color, Layout} from '@controls/Theme';
import {CloseIcon} from '@controls/Icons/Ionicons.icon';

type ModalProps = {
  visible: boolean;
  children: JSX.Element;
  title: string;
  transparent?: boolean;
  onCloseModal: () => void;
  maxBodyHeight?: number;
  animationType?: 'none' | 'slide' | 'fade';
};

const Modal = ({
  children = <></>,
  visible = false,
  title,
  onCloseModal,
  maxBodyHeight,
  animationType = 'fade',
  transparent = true,
}: ModalProps): JSX.Element => {
  return (
    <BasedModal
      style={{}}
      transparent={transparent}
      visible={visible}
      onRequestClose={onCloseModal}
      animationType={animationType}>
      <View style={styles.modalContainer} />
      <View style={styles.modalBlur}></View>
      <View style={styles.centerModal}>
        <View style={styles.centerModalContent}>
          <View style={styles.modalHeader}>
            <Text fontSize={16} fontWeight="700">
              {title}
            </Text>
            <Button icon={<CloseIcon />} onButtonPressed={onCloseModal} />
          </View>
          <View
            style={[
              styles.modalBody,
              {...(maxBodyHeight ? {maxHeight: maxBodyHeight} : {})},
            ]}>
            {children}
          </View>
        </View>
      </View>
    </BasedModal>
  );
};

const styles = StyleSheet.create({
  modalBlur: {
    backgroundColor: Color.Neutral[3],
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  centerModalContent: {
    // backgroundColor: 'red',
    backgroundColor: Color.White[0],
    borderRadius: Layout.BorderRadius,
  },
  centerModal: {
    // backgroundColor: 'red',
    zIndex: 1,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Layout.Padding.xl,
    alignSelf: 'center',
  },
  modalHeader: {
    paddingBottom: Layout.Padding.xl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    // alignSelf: 'center',
    padding: Layout.Padding.xl,
    borderColor: Color.Neutral[3],
  },
  modalBody: {
    padding: Layout.Padding.xl,
    alignSelf: 'center',
    maxHeight: 350,
  },
});

export default Modal;
