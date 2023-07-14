/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, ColorValue} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/HomeScreen';
import NotificationsScreen from '@screens/NotificationsScreen';
import TopBar from '@components/TopBar';
import Text from '@components/common/Text';
import {Color, Layout} from '@controls/Theme';
import {BackIcon} from '@controls/Icons/Ionicons.icon';
import ProductListPage from '@screens/ProductListPage';

export type HomeStacksProps = {
  HomeScreen: {};
  NotificationsScreen: {};
  ProductListPage: {name: string};
};

const Stack = createStackNavigator<HomeStacksProps>();
const HeaderTitle = ({
  title,
  color,
}: {
  title: string;
  color?: ColorValue;
}): JSX.Element => {
  return (
    <View>
      <Text
        color={color ? color : Color.Neutral[0]}
        fontSize={18}
        fontWeight={Layout.Text.Weight.bold}>
        {title}
      </Text>
    </View>
  );
};
const HomeStacks = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackImage: () => <BackIcon />,
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={() => ({
          headerTitle: () => (
            <HeaderTitle title="MegaMall" color={Color.Primary[0]} />
          ),
          headerRight: TopBar,
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={() => ({
          headerTitle: () => <HeaderTitle title="Notify" />,
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name="ProductListPage"
        component={ProductListPage}
        options={({route}) => ({
          headerTitle: () => (
            <HeaderTitle title={route.params?.name || 'Products'} />
          ),
          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  );
};
export default HomeStacks;
