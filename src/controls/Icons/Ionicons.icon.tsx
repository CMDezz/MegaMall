import {Color, Layout} from '@controls/Theme';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IoniconsState {
  size?: number;
  focused?: boolean;
  color?: string;
}

export const HomeIcon = ({
  focused = false,
  size = Layout.Icon.Size,
  color = Color.Neutral[0],
}: IoniconsState) => (
  <Ionicons
    name="home-outline"
    color={focused ? '#3669C9' : color}
    size={size}
  />
);

export const HeartIcon = ({
  focused = false,
  size = Layout.Icon.Size,
  color = Color.Neutral[0],
}: IoniconsState) => (
  <Ionicons
    name="heart-outline"
    color={focused ? '#3669C9' : color}
    size={size}
  />
);

export const CartIcon = ({
  focused = false,
  size = Layout.Icon.Size,
  color = Color.Neutral[0],
}: IoniconsState) => (
  <Ionicons
    name="cart-outline"
    color={focused ? '#3669C9' : color}
    size={size}
  />
);

export const PersonIcon = ({
  focused = false,
  size = Layout.Icon.Size,
  color = Color.Neutral[0],
}: IoniconsState) => (
  <Ionicons
    name="person-outline"
    color={focused ? '#3669C9' : color}
    size={size}
  />
);

export const NotifyIcon = ({
  focused = false,
  size = Layout.Icon.Size,
  color = Color.Neutral[0],
}: IoniconsState) => (
  <Ionicons
    name="notifications-outline"
    color={focused ? '#3669C9' : color}
    size={size}
  />
);

export const BackIcon = ({
  focused = false,
  size = Layout.Icon.Size,
  color = Color.Neutral[0],
}: IoniconsState) => (
  <Ionicons
    name="chevron-back-outline"
    color={focused ? '#3669C9' : color}
    size={size}
  />
);

export const SearchIcon = ({
  focused = false,
  size = Layout.Icon.Size,
  color = Color.Neutral[0],
}: IoniconsState) => (
  <Ionicons
    name="search-outline"
    color={focused ? '#3669C9' : color}
    size={size}
  />
);
