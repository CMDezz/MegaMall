import React, {useState, useRef} from 'react';
import {Color, Layout} from '@controls/Theme';
import {View, ColorValue, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {HomeIcon} from '@controls/Icons/Ionicons.icon';
import Text from '@components/common/Text';

type ItemProps = {
  icon: JSX.Element;
  name: string;
  nameStack?: string;
  iconBackgroundColor: ColorValue;
};

type RenderItemProps = {
  item: ItemProps;
  index: number;
};

const CategoriesBanner = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const ref = useRef(null);
  const itemSliderWidth = 80;
  const data: ItemProps[] = [
    {
      name: 'Foods',
      icon: <HomeIcon color={Color.EarthGreen[0]} />,
      nameStack: 'FoodsStack',
      iconBackgroundColor: Color.Green[2],
    },
    {
      name: 'Foods',
      icon: <HomeIcon color={Color.EarthGreen[0]} />,
      nameStack: 'FoodsStack',
      iconBackgroundColor: Color.Green[2],
    },
    {
      name: 'Foods',
      icon: <HomeIcon color={Color.EarthGreen[0]} />,
      nameStack: 'FoodsStack',
      iconBackgroundColor: Color.Green[2],
    },
    {
      name: 'Foods',
      icon: <HomeIcon color={Color.EarthGreen[0]} />,
      nameStack: 'FoodsStack',
      iconBackgroundColor: Color.Green[2],
    },
    {
      name: 'Foods',
      icon: <HomeIcon color={Color.EarthGreen[0]} />,
      nameStack: 'FoodsStack',
      iconBackgroundColor: Color.Green[2],
    },
    {
      name: 'Foods',
      icon: <HomeIcon color={Color.EarthGreen[0]} />,
      nameStack: 'FoodsStack',
      iconBackgroundColor: Color.Green[2],
    },
    {
      name: 'Foods',
      icon: <HomeIcon color={Color.EarthGreen[0]} />,
      nameStack: 'FoodsStack',
      iconBackgroundColor: Color.Green[2],
    },
  ];

  const renderItem = ({item}: RenderItemProps): JSX.Element => {
    return (
      <View style={styles.itemContainer}>
        <View
          style={[
            styles.itemIconContainer,
            {backgroundColor: item.iconBackgroundColor},
          ]}>
          {item.icon}
        </View>
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={Layout.Window.width}
        itemWidth={itemSliderWidth}
        ref={ref}
        onSnapToItem={(index: number) => setActiveIndex(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    marginLeft: -200,
  },
  itemIconContainer: {
    padding: 12,
    borderRadius: Layout.BorderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    lineHeight: 24,
  },
  carouselContainer: {
    marginTop: Layout.Padding.xl,
    marginBottom: Layout.Padding.xl,
  },
  itemName: {
    textAlign: 'center',
    marginTop: Layout.Padding.xs,
  },
});
export default CategoriesBanner;
