import React from 'react';
import {View} from 'react-native';
import {ProductItemsProps} from './ProductItem';

type ProductListBannerProps = {
  title?: string;
  stackAllName?: string;
  data: ProductItemsProps[];
};

const ProductListBanner = ({
  title,
  stackAllName,
  data,
}: ProductListBannerProps): JSX.Element => {
  return (
    <View>
      <View></View>
    </View>
  );
};
export default ProductListBanner;
