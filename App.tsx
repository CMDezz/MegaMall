import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from '@controls/BottomTabs';

const AppNavigator = (): JSX.Element => {
  return <BottomTabs />;
};

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
