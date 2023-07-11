import React from 'react';
import Text from '@components/common/Text';
import {View, StyleSheet} from 'react-native';
import {Color, Layout} from '@controls/Theme';
import Button from '@components/common/Button';
import {HomeIcon} from '@controls/Icons/Ionicons.icon';

// bao gồm title + các actions icon : thông báo + giỏ hàng
const TopBar = (): JSX.Element => {
  return (
    <View>
      {/* title */}
      <View>
        <Text
          color={Color.Primary[0]}
          fontSize={18}
          style={styles.brandName}
          fontWeight={Layout.Text.Weight.bold}>
          MegaMall
        </Text>
      </View>
      {/* action btns */}
      <View>
        <Button title="hehe" />
      </View>
      <View>
        <Button icon={<HomeIcon size={30} />} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  brandName: {
    textAlign: 'center',
  },
});

export default TopBar;
