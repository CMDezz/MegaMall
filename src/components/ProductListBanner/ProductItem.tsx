import React from 'react';
import {View} from 'react-native';

export type ProductItemsProps = {
  image: string;
  name: string;
  price: string;
  rating?: number;
  review: number;
};
const ProductItem = ({}: ProductItemsProps): JSX.Element => {
  return <View></View>;
};
export default ProductItem;
