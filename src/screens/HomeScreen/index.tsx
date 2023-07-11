import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from '@components/TopBar';
const HomeScreen = (): JSX.Element => {
  return (
    <SafeAreaView>
      <TopBar />
    </SafeAreaView>
  );
};

export default HomeScreen;
