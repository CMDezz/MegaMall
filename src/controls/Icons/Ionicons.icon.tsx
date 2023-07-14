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

export const FoodIcon = ({
  focused = false,
  size = Layout.Icon.Size,
  color = Color.Neutral[0],
}: IoniconsState) => (
  <Ionicons
    name="fast-food-outline"
    color={focused ? '#3669C9' : color}
    size={size}
  />
);

export const GiftIcon = ({
  focused = false,
  size = Layout.Icon.Size,
  color = Color.Neutral[0],
}: IoniconsState) => (
  <Ionicons
    name="gift-outline"
    color={focused ? '#3669C9' : color}
    size={size}
  />
);

export const ShirtIcon = ({
  focused = false,
  size = Layout.Icon.Size,
  color = Color.Neutral[0],
}: IoniconsState) => (
  <Ionicons
    name="shirt-outline"
    color={focused ? '#3669C9' : color}
    size={size}
  />
);

export const PriceTagsIcon = ({
  focused = false,
  size = Layout.Icon.Size,
  color = Color.Neutral[0],
}: IoniconsState) => (
  <Ionicons
    name="pricetags-outline"
    color={focused ? '#3669C9' : color}
    size={size}
  />
);

export const DesktopIcon = ({
  focused = false,
  size = Layout.Icon.Size,
  color = Color.Neutral[0],
}: IoniconsState) => (
  <Ionicons
    name="desktop-outline"
    color={focused ? '#3669C9' : color}
    size={size}
  />
);

export const CloseIcon = ({
  focused = false,
  size = Layout.Icon.Size,
  color = Color.Neutral[0],
}: IoniconsState) => (
  <Ionicons
    name="close-outline"
    color={focused ? '#3669C9' : color}
    size={size}
  />
);

export const ActionsIcon = ({
  focused = false,
  size = Layout.Icon.Size,
  color = Color.Neutral[0],
}: IoniconsState) => (
  <Ionicons
    name="ellipsis-vertical-outline"
    color={focused ? '#3669C9' : color}
    size={size}
  />
);
export const StarIcon = ({
  focused = false,
  size = Layout.Icon.Size,
  color = Color.Neutral[0],
}: IoniconsState) => (
  <Ionicons name="star" color={focused ? '#3669C9' : color} size={size} />
);
