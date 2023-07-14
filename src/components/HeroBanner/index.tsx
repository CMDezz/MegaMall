/* eslint-disable @typescript-eslint/no-unused-vars */
import Text from '@components/common/Text';
import React, {useRef, useCallback, useState} from 'react';
import {View, Image, ImageSourcePropType, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Banner_1 from '@utils/img/Banner_1.png';
import Banner_2 from '@utils/img/Banner_2.png';
import {Layout} from '@controls/Theme';
import {useDimensions} from '@controls/Hooks/useDimensions';
// import Banner from '../../utils/img/'
interface ItemProps {
  title: string;
  img: ImageSourcePropType;
}
interface RenderItemProps {
  item: ItemProps;
  index: number;
}
const HeroBanner = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const Layout = useDimensions();
  const ref = useRef(null);
  const exampleItems = [
    {
      title: 'Banner 1',
      img: Banner_1,
    },
    {
      title: 'Banner 2',
      img: Banner_2,
    },
  ];
  const renderItem = useCallback(({item}: RenderItemProps) => {
    return (
      <View style={styles.itemSliderStyle}>
        <Image source={item.img} />
      </View>
    );
  }, []);
  return (
    <View>
      <Carousel
        layout={'default'}
        ref={ref}
        data={exampleItems}
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
    marginLeft: -20,
  },
});
export default HeroBanner;
