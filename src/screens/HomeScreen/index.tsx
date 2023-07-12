import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchInput from '@components/SearchInput';
import HeroBanner from '@components/HeroBanner';
import CategoriesBanner from '@components/CategoriesBanner';

const HomeScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <SearchInput />
      <HeroBanner />
      <CategoriesBanner />
    </SafeAreaView>
  );
};

export default HomeScreen;
