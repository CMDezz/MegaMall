import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Color} from '@controls/Theme';
import Button from '@components/common/Button';
import {CartIcon, NotifyIcon} from '@controls/Icons/Ionicons.icon';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStacksProps} from '@controls/Stacks/HomeStacks';

const NotifyNotSeen = (): JSX.Element => {
  return <View style={styles.NotifyNotSeen} />;
};

// bao gồm title + các actions icon : thông báo + giỏ hàng
const TopBar = (): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<HomeStacksProps>>();

  return (
    <View>
      {/* action btns */}
      <View style={styles.actionContainer}>
        <View>
          <Button
            icon={<NotifyIcon />}
            iconShape="circle"
            onButtonPressed={() =>
              navigation.navigate('NotificationsScreen', {})
            }
          />
          {/* nếu có thông báo chưa đọc thì hiển thị red dot */}
          {true && <NotifyNotSeen />}
        </View>
        <View>
          <Button icon={<CartIcon />} iconShape="circle" />
          {/* nếu có item chưa xem thì hiển thị red dot */}
          {true && <NotifyNotSeen />}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  NotifyNotSeen: {
    backgroundColor: Color.Danger[0],
    width: 10,
    height: 10,
    position: 'absolute',
    right: 9,
    top: 10,
    borderRadius: 10 / 2,
  },
});

export default TopBar;
