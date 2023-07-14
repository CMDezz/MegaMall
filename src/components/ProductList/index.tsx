import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ProductItemsProps} from './ProductItem';
import Text from '@components/common/Text';
import {Color, Layout} from '@controls/Theme';
import ProductList from './ProductItem';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStacksProps} from '@controls/Stacks/HomeStacks';
type ProductListBannerProps = {
  title: string;
  stackSeeAllName?: keyof HomeStacksProps;
  stackSeeAllProps?: any;
  data: ProductItemsProps[];
  showSeeAll?: boolean;
  wrapMode?: boolean;
};

const ProductListBanner = ({
  title = '',
  stackSeeAllName, //truyền tên stack, sẽ navigate + props name để đổi api
  stackSeeAllProps = {},
  data,
  showSeeAll = false, // có thể không có see all
  wrapMode = false, //chế độ wrap hoặc chế độ scroll (wrap sẽ tự động điều chỉnh numCol + item width)
}: ProductListBannerProps): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<HomeStacksProps>>();
  return (
    <View style={styles.wrapper}>
      <View style={styles.bannerHeading}>
        <Text preset="NormalHeading">{title}</Text>
        {showSeeAll && (
          <Text
            type="link"
            onTextPressed={() => {
              if (stackSeeAllName) {
                navigation.navigate(stackSeeAllName, stackSeeAllProps);
              }
            }}
            color={Color.Blue[0]}>
            See all
          </Text>
        )}
      </View>
      <ProductList data={data} wrapMode={wrapMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: Color.Neutral[4],
  },
  bannerHeading: {
    padding: Layout.Padding.xl,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerBody: {
    padding: Layout.Padding.xl,
  },
});
export default ProductListBanner;
