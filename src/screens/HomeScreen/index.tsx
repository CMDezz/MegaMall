import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchInput from '@components/SearchInput';
import HeroBanner from '@components/HeroBanner';
import CategoriesBanner from '@components/CategoriesBanner';
import {ScrollView} from 'react-native-gesture-handler';
import ProductListBanner from '@components/ProductList';
import {FeatureProductsData} from './fakeData';

const HomeScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchInput />
        <HeroBanner />
        <CategoriesBanner />
        <ProductListBanner
          data={FeatureProductsData}
          showSeeAll={true}
          title="Featured products"
          wrapMode={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
