import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CartIcon,
  HeartIcon,
  HomeIcon,
  PersonIcon,
} from '@controls/Icons/Ionicons.icon';
import WishlistScreen from '@screens/WishlistScreen';
import UserScreen from '@screens/UserScreen';
import OrderScreen from '@screens/OrderScreen';
import HomeStacks from '@controls/Stacks/HomeStacks';

const Tab = createBottomTabNavigator();

const BottomTabs = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HOME"
        component={HomeStacks}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: HomeIcon,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="WISHLIST"
        component={WishlistScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: HeartIcon,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ORDER"
        component={OrderScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: CartIcon,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: PersonIcon,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
