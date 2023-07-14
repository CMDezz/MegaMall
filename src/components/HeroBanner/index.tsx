/* eslint-disable @typescript-eslint/no-unused-vars */
import Text from '@components/common/Text';
import React, {useRef, useCallback, useState} from 'react';
import {
  View,
  ViewStyle,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Pressable,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {Layout} from '@controls/Theme';
import {useDimensions} from '@controls/Hooks/useDimensions';
import {HomeStacksProps} from '@controls/Stacks/HomeStacks';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
// import Banner from '../../utils/img/'
export interface BannerItemProps {
  title: string;
  img: ImageSourcePropType;
  stackName?: keyof HomeStacksProps;
  stackProps?: any;
}
interface RenderItemProps {
  item: BannerItemProps;
  index: number;
}

type HeroBannerProps = {
  data: BannerItemProps[];
  style?: ViewStyle | ViewStyle[];
};
const HeroBanner = ({data, style = {}}: HeroBannerProps): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<HomeStacksProps>>();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const Layout = useDimensions();
  const ref = useRef(null);

  const renderItem = useCallback(({item}: RenderItemProps) => {
    const onPressItem = () => {
      if (item.stackName) {
        navigation.navigate('ProductListPage', item.stackProps);
      }
    };
    return (
      <Pressable style={styles.itemSliderStyle} onPress={onPressItem}>
        <Image source={item.img} />
      </Pressable>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={style}>
      <Carousel
        layout={'default'}
        ref={ref}
        data={data}
        sliderWidth={Layout.Screen.width}
        itemWidth={325} // = width of img
        renderItem={renderItem}
        onSnapToItem={(index: number) => setActiveIndex(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemSliderStyle: {
    borderRadius: 5,
    // marginLeft: -20,
  },
});
export default HeroBanner;
