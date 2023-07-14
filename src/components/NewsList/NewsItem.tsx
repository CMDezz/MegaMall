import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';
import Text from '@components/common/Text';
import moment from 'moment';
import {Color, Layout} from '@controls/Theme';
export type NewsItemProps = {
  title: string;
  description: string;
  dateCreated: string; //date as ISO string, if Date type -> Date
  image?: ImageSourcePropType;
};

const NewsItem = ({
  item,
  index,
  dataLength,
}: {
  item: NewsItemProps;
  index: number;
  dataLength: number;
}): JSX.Element => {
  return (
    <TouchableOpacity
      style={[
        styles.newsContainer,
        index + 1 === dataLength ? {borderBottomWidth: 0} : {},
      ]}>
      <View style={styles.newsDetail}>
        <Text fontSize={14} fontWeight="500" numberOfLines={2}>
          {item.title}
        </Text>
        <Text numberOfLines={1}>{item.description}</Text>
        <Text color={Color.Neutral[1]}>
          {moment(item.dateCreated).format('DD MMM YYYY')}
        </Text>
      </View>
      {item.image && <Image style={styles.newsImg} source={item.image} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  newsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Layout.Padding.xxl,
    paddingVertical: Layout.Padding.xl,
    borderBottomWidth: 1,
    borderBottomColor: Color.Neutral[3],
  },
  newsDetail: {
    gap: Layout.Padding.sm,
    justifyContent: 'space-between',
    flex: 1,
  },
  newsImg: {
    width: 80,
    height: 80,
    borderRadius: Layout.BorderRadius,
  },
});
export default NewsItem;
