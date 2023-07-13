import React from 'react';
import {View, StyleSheet} from 'react-native';
import BaseModal from 'react-native-modal';
// import {View, Modal as BasedModal, StyleSheet} from 'react-native';
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
  propagateSwipe?: boolean;
};

const Modal = ({
  children = <></>,
  visible = false,
  title,
  propagateSwipe = false,
  onCloseModal,
  ...otherProps
}: ModalProps): JSX.Element => {
  return (
    <BaseModal
      {...otherProps}
      isVisible={visible}
      propagateSwipe={propagateSwipe}
      onBackButtonPress={onCloseModal}
      backdropTransitionOutTiming={0}
      animationOut={'fadeOut'}
      onBackdropPress={onCloseModal}>
      <View style={styles.centerModalContent}>
        <View style={styles.modalHeader}>
          <Text fontSize={16} fontWeight="700">
            {title}
          </Text>
          <Button icon={<CloseIcon />} onButtonPressed={onCloseModal} />
        </View>
        <View style={styles.modalBody}>{children}</View>
      </View>
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  centerModalContent: {
    backgroundColor: Color.White[0],
    borderRadius: Layout.BorderRadius,
  },
  modalHeader: {
    paddingBottom: Layout.Padding.xl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    padding: Layout.Padding.xl,
    borderColor: Color.Neutral[3],
  },
  modalBody: {
    padding: Layout.Padding.xl,
  },
});

export default Modal;
