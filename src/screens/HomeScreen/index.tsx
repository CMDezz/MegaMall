import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchInput from '@components/SearchInput';
import Banner from '@components/HeroBanner';
import CategoriesBanner from '@components/CategoriesBanner';
import {ScrollView} from 'react-native-gesture-handler';
import ProductListBanner from '@components/ProductList';
import {
  BestSellerProductsData,
  FeatureProductsData,
  HeroBannerData,
  LatestNewsData,
  NewArrivalProductsData,
  StaticBanner1Data,
  StaticBanner2Data,
} from './fakeData';
import {StyleSheet, View} from 'react-native';
import {Color, Layout} from '@controls/Theme';
import NewsList from '@components/NewsList';

const HomeScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.homeScreen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchInput style={[styles.searchInput, styles.paddingHorizontalXl]} />
        <Banner data={HeroBannerData} style={[styles.heroBanner]} />
        <CategoriesBanner />
        <View style={styles.backgroundGrey}>
          <ProductListBanner
            data={FeatureProductsData}
            showSeeAll={true}
            title="Featured products"
            wrapMode={false}
            stackSeeAllName="ProductListPage"
            stackSeeAllProps={{name: 'Featured products'}}
          />
          <Banner data={StaticBanner1Data} style={[styles.staticBanner]} />
          <ProductListBanner
            data={BestSellerProductsData}
            showSeeAll={true}
            title="Best Sellers"
            wrapMode={false}
            stackSeeAllName="ProductListPage"
            stackSeeAllProps={{name: 'Best Sellers'}}
          />
          <Banner data={StaticBanner2Data} />
          <ProductListBanner
            data={NewArrivalProductsData}
            showSeeAll={true}
            title="New Arrivals"
            wrapMode={false}
            stackSeeAllName="ProductListPage"
            stackSeeAllProps={{name: 'New Arrivals'}}
          />
          <ProductListBanner
            data={NewArrivalProductsData}
            showSeeAll={true}
            title="Top Rated Products"
            wrapMode={false}
            stackSeeAllName="ProductListPage"
            stackSeeAllProps={{name: 'Rated Products'}}
          />
          <ProductListBanner
            data={NewArrivalProductsData}
            showSeeAll={true}
            title="Special Offers"
            wrapMode={false}
            stackSeeAllName="ProductListPage"
            stackSeeAllProps={{name: 'Special Offers'}}
          />
        </View>
        <NewsList title="Latest News" data={LatestNewsData} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: Color.White[0],
  },
  backgroundGrey: {
    backgroundColor: Color.Neutral[4],
    borderTopLeftRadius: Layout.BorderRadius,
    borderTopStartRadius: Layout.BorderRadius,
  },
  searchInput: {
    paddingVertical: Layout.Padding.xl,
  },
  heroBanner: {
    paddingTop: Layout.Padding.sm,
    paddingBottom: Layout.Padding.xl,
  },
  staticBanner: {
    paddingTop: Layout.Padding.sm,
  },

  paddingHorizontalXl: {
    paddingHorizontal: Layout.Padding.xl,
  },
});

export default HomeScreen;
