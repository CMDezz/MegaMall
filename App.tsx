import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from '@controls/BottomTabs';
import 'react-native-gesture-handler';
import {DimensionsProvider} from '@controls/Hooks/useDimensions';

const AppNavigator = (): JSX.Element => {
  return (
    <DimensionsProvider>
      <BottomTabs />
    </DimensionsProvider>
  );
};

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
