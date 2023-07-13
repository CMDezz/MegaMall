import React from 'react';
import Modal from '@components/common/Modal';
import {View, FlatList, StyleSheet} from 'react-native';
import {CategoryItem, ItemProps} from './index';
type ModalCompProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  dataCategory: ItemProps[];
};

const CategoryAllModal = ({
  visible,
  setVisible,
  dataCategory,
}: ModalCompProps): JSX.Element => {
  //   const [visible, setVisible] = useState<boolean>(false);
  const renderItem = ({item}: {item: ItemProps}) => (
    <View>
      <CategoryItem item={item} closeModal={() => setVisible(false)} />
    </View>
  );

  return (
    <View style={{}}>
      <Modal
        visible={visible}
        onCloseModal={() => setVisible(false)}
        propagateSwipe={true}
        title="All Categories">
        <FlatList
          columnWrapperStyle={styles.listCloumnWrapperStyle}
          data={dataCategory}
          scrollEnabled={false}
          numColumns={4}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  listCloumnWrapperStyle: {
    justifyContent: 'space-between',
    gap: 30,
    alignItems: 'center',
  },
});

export default CategoryAllModal;
