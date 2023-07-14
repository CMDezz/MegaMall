import Text from '@components/common/Text';
import {useDimensions} from '@controls/Hooks/useDimensions';
import {ActionsIcon, StarIcon} from '@controls/Icons/Ionicons.icon';
import {Color, Layout} from '@controls/Theme';
import commonFunc from '@controls/common/commonFunc';
import React, {useCallback} from 'react';
import FlatListRemount from '@components/common/FlatListRemount';
import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  ImageSourcePropType,
  ViewStyle,
} from 'react-native';

export type ProductItemsProps = {
  image: ImageSourcePropType;
  name: string;
  price: number;
  rating?: number;
  reviewsLength: number;
  id: string;
};

// type ProductListProps = {
//   data: ProductItemsProps[];
// };

// type RenderItemListProps = {
//   item: ProductItemsProps[];
//   index: string;
// };

const ProductList = ({
  data,
  wrapMode = false,
}: {
  data: ProductItemsProps[];
  wrapMode: boolean;
}): JSX.Element => {
  const {Window, type} = useDimensions();
  /**
   * tính số lượng và điều chỉnh width item phù hợp theo màn hình
   */
  const gapBetween = Layout.Padding.md; // gap
  const baseWidthProduct = 156; // width cơ bản của vieww
  const numColumShouldBe = Math.floor(
    (Window.width - Layout.Padding.xl * 2) / baseWidthProduct,
  ); //window width - padding 2 bên, chia width cơ bản => số lượng cột
  const florNumColumn = Math.floor(numColumShouldBe);
  const aspectedPercentageWidthProduct = 100 / numColumShouldBe; // tính phần trăm mỗi item
  const aspedtedPixelWidthProduct =
    (aspectedPercentageWidthProduct * (Window.width - Layout.Padding.xl * 2)) /
      100 -
    (gapBetween * (florNumColumn - 1)) / florNumColumn; // từ phần trăm đổi ra pixel, trừ tiếp công thức tính gap ( gap * gap length / item length )
  // end region

  const renderItem = useCallback(
    ({item}: {item: ProductItemsProps}) => {
      return (
        <TouchableOpacity
          style={[
            styles.productItem,
            {
              width: wrapMode ? aspedtedPixelWidthProduct : baseWidthProduct,
            } as ViewStyle,
          ]}>
          <Image source={item.image} />
          <View>
            <Text fontWeight="500">{item.name}</Text>
            <Text
              style={styles.itemPrice}
              fontSize={Layout.Text.Size.sm}
              color={Color.Danger[0]}
              fontWeight={Layout.Text.Weight.bold}>
              {commonFunc.convertToCurrency(item.price)}
            </Text>
            <View style={styles.productItemFooter}>
              <View style={styles.productItemFooterInfo}>
                <Text style={styles.textFooter}>
                  <StarIcon
                    color={Color.Primary[0]}
                    size={Layout.Icon.SmallSize}
                  />{' '}
                  {item.rating}
                </Text>
                <Text style={styles.textFooter}>
                  {item.reviewsLength
                    ? item.reviewsLength + ' Reviews'
                    : 'No reviews yet'}
                </Text>
              </View>
              <TouchableOpacity style={{paddingLeft: 5}}>
                {/* padding để hitbox lớn hơn 1 tí*/}
                <ActionsIcon
                  color={Color.Neutral[1]}
                  size={Layout.Icon.MediumSize}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      );
    },
    [aspedtedPixelWidthProduct, wrapMode],
  );

  return (
    <View style={styles.productListWrapper}>
      <FlatListRemount numColums={florNumColumn}>
        <FlatList
          key={type}
          style={styles.productList}
          contentContainerStyle={styles.productListContainer}
          data={data}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          // 2 chế độ flatList, scroll hoặc auto adjust width + wrap no scroll
          {...(wrapMode
            ? {
                columnWrapperStyle: styles.productListColumn,
                scrollEnabled: false,
                numColumns: florNumColumn,
              }
            : {
                horizontal: true,
              })}
        />
      </FlatListRemount>
    </View>
  );
};

const styles = StyleSheet.create({
  productListWrapper: {
    paddingBottom: Layout.Padding.xl,
  },
  productList: {},
  productListColumn: {
    gap: Layout.Padding.md,
  },
  productListContainer: {
    paddingHorizontal: Layout.Padding.xl,
    gap: Layout.Padding.md,
  },
  productItem: {
    backgroundColor: Color.White[0],
    borderRadius: Layout.BorderRadius,
    paddingHorizontal: Layout.Padding.md,
    paddingVertical: Layout.Padding.sm,
  },
  itemPrice: {
    marginBottom: Layout.Padding.sm,
  },
  productItemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productItemFooterInfo: {flexDirection: 'row', columnGap: Layout.Padding.sm},
  textFooter: {
    fontSize: Layout.Text.Size.xs,
  },
});
export default ProductList;
