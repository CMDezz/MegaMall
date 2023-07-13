import React, {useState} from 'react';
import {Color, Layout} from '@controls/Theme';
import {
  View,
  ColorValue,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  // FlatListProps,
} from 'react-native';
import {
  DesktopIcon,
  FoodIcon,
  GiftIcon,
  PriceTagsIcon,
  ShirtIcon,
} from '@controls/Icons/Ionicons.icon';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStacksProps} from '@controls/Stacks/HomeStacks';
import Text from '@components/common/Text';
import CategoryAllModal from './CategoryAllModal';
export type ItemProps = {
  icon: JSX.Element;
  name: string;
  nameStack?: string;
  iconBackgroundColor: ColorValue;
  index: string;
};

// type RenderItemProps = {
//   item: ItemProps;
//   index: string;
// };

const data: ItemProps[] = [
  {
    index: '1',
    name: 'Foods',
    icon: <FoodIcon color={Color.EarthGreen[0]} />,
    nameStack: 'CategoryStack',
    iconBackgroundColor: Color.Green[2],
  },
  {
    index: '2',
    name: 'Gift',
    icon: <GiftIcon color={Color.Danger[1]} />,
    nameStack: 'CategoryStack',
    iconBackgroundColor: Color.Danger[2],
  },
  {
    index: '3',
    name: 'Fashion',
    icon: <ShirtIcon color={Color.Primary[0]} />,
    nameStack: 'CategoryStack',
    iconBackgroundColor: Color.Primary[2],
  },
  {
    index: '4',
    name: 'Gadget',
    icon: <PriceTagsIcon color={Color.Blue[0]} />,
    nameStack: 'CategoryStack',
    iconBackgroundColor: Color.Blue[1],
  },
  {
    index: '5',
    name: 'Compu',
    icon: <DesktopIcon color={Color.Green[0]} />,
    nameStack: 'CategoryStack',
    iconBackgroundColor: Color.Green[2],
  },
  {
    index: '6',
    name: 'Foods_2',
    icon: <FoodIcon color={Color.EarthGreen[0]} />,
    nameStack: 'CategoryStack',
    iconBackgroundColor: Color.Green[2],
  },
  {
    index: '7',
    name: 'Gift',
    icon: <GiftIcon color={Color.Danger[0]} />,
    nameStack: 'CategoryStack',
    iconBackgroundColor: Color.Danger[2],
  },
  {
    index: '8',
    name: 'Fashion',
    icon: <ShirtIcon color={Color.Primary[0]} />,
    nameStack: 'CategoryStack',
    iconBackgroundColor: Color.Primary[2],
  },
  {
    index: '9',
    name: 'Gadget',
    icon: <PriceTagsIcon color={Color.Blue[0]} />,
    nameStack: 'CategoryStack',
    iconBackgroundColor: Color.Blue[1],
  },
  {
    index: '10',
    name: 'Compu',
    icon: <DesktopIcon color={Color.Green[0]} />,
    nameStack: 'CategoryStack',
    iconBackgroundColor: Color.Green[2],
  },
  {
    index: '11',
    name: 'Compuz',
    icon: <DesktopIcon color={Color.Green[0]} />,
    nameStack: 'CategoryStack',
    iconBackgroundColor: Color.Green[2],
  },
  {
    index: '12',
    name: 'Compu',
    icon: <DesktopIcon color={Color.Green[0]} />,
    nameStack: 'CategoryStack',
    iconBackgroundColor: Color.Green[2],
  },
  {
    index: '13',
    name: 'Compu',
    icon: <DesktopIcon color={Color.Green[0]} />,
    nameStack: 'CategoryStack',
    iconBackgroundColor: Color.Green[2],
  },
];

export const CategoryItem = ({
  item,
  closeModal,
}: {
  item: ItemProps;
  closeModal?: () => void;
}): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<HomeStacksProps>>();

  const onPressItem = () => {
    closeModal && closeModal();
    return navigation.navigate('ProductByCategoryScreen', {name: item.name});
  };
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPressItem}>
      <View
        style={[
          styles.itemIconContainer,
          {backgroundColor: item.iconBackgroundColor},
        ]}>
        {item.icon}
      </View>
      <Text style={styles.itemName}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const CategoriesBanner = (): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);

  const renderItem = ({item}: {item: ItemProps}) => (
    <CategoryItem item={item} />
  );

  return (
    <View style={styles.carouselContainer}>
      <View style={styles.carouselHeader}>
        <Text preset="NormalHeading">Categories</Text>
        <Text
          preset="TextLink"
          color={Color.Blue[0]}
          type="link"
          onTextPressed={() => setVisible(true)}>
          See All
        </Text>
      </View>
      <FlatList
        style={styles.categoriesList}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        contentContainerStyle={styles.listContentContainerStyle}
        // keyExtractor={item => item.index}
      />
      <CategoryAllModal
        dataCategory={data}
        setVisible={setVisible}
        visible={visible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContentContainerStyle: {
    gap: 25,
  },
  itemContainer: {
    alignItems: 'center',
    // marginRight: Layout.Padding.xxl,
    // marginHorizontal: 'auto',
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignSelf: 'center',
    // flex: 1,
  },
  itemIconContainer: {
    padding: 12,
    borderRadius: Layout.BorderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    lineHeight: 24,
  },
  categoriesList: {
    paddingLeft: Layout.Padding.xl,
  },
  carouselHeader: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Layout.Padding.xl,
    marginBottom: Layout.Padding.md,
    // justifyContent: 'space-between',
  },
  carouselContainer: {
    marginTop: Layout.Padding.xl,
    marginBottom: Layout.Padding.xl,
  },
  itemName: {
    textAlign: 'center',
    marginTop: Layout.Padding.xs,
  },
});
export default CategoriesBanner;
