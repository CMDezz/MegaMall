import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchInput from '@components/SearchInput';
import HeroBanner from '@components/HeroBanner';
import CategoriesBanner from '@components/CategoriesBanner';
import {ScrollView} from 'react-native-gesture-handler';

const HomeScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <SearchInput />
        <HeroBanner />
        <CategoriesBanner />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
