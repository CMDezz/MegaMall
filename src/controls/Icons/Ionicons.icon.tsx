import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IoniconsState {
  size?: number;
  focused?: boolean;
  color?: string;
}

export const HomeIcon = ({focused = false, size, color}: IoniconsState) => (
  <Ionicons
    name="home-outline"
    color={focused ? '#3669C9' : color}
    size={size}
  />
);

export const HeartIcon = ({focused = false, size, color}: IoniconsState) => (
  <Ionicons
    name="heart-outline"
    color={focused ? '#3669C9' : color}
    size={size}
  />
);

export const CartIcon = ({focused = false, size, color}: IoniconsState) => (
  <Ionicons
    name="cart-outline"
    color={focused ? '#3669C9' : color}
    size={size}
  />
);

export const PersonIcon = ({focused = false, size, color}: IoniconsState) => (
  <Ionicons
    name="person-outline"
    color={focused ? '#3669C9' : color}
    size={size}
  />
);
