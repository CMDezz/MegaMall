import React from 'react';
import {View} from 'react-native';
import Text from '@components/common/Text';
// import type {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {HomeStacksProps} from '@controls/Stacks/HomeStacks';
// import {RouteProp} from '@react-navigation/native';

// type Props = RouteProp<HomeStacksProps, 'ProductByCategoryScreen'>;

// const ProductByCategoryScreen = ({route, navigate}: Props): JSX.Element => {
const ProductListPage = (): JSX.Element => {
  return (
    <View>
      <Text> This is Product list page</Text>
    </View>
  );
};

export default ProductListPage;
