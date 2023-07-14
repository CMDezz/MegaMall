import React, {useCallback} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Text from '@components/common/Text';
import NewsItem from './NewsItem';
import {NewsItemProps} from './NewsItem';
import {Layout} from '@controls/Theme';
export type NewsProps = {
  title: string;
  description: string;
  dateCreated: string; //date as ISO string, if Date type -> Date
};

type NewsListProps = {
  title?: string;
  data: NewsProps[];
};

const NewsList = ({title, data}: NewsListProps): JSX.Element => {
  const renderItem = useCallback(
    ({item, index}: {item: NewsItemProps; index: number}) => {
      return <NewsItem item={item} index={index} dataLength={data.length} />;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data.length],
  );

  return (
    <View style={styles.newsList}>
      {title && <Text preset="NormalHeading">{title}</Text>}
      <FlatList data={data} renderItem={renderItem} scrollEnabled={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  newsList: {
    padding: Layout.Padding.xl,
  },
  //   newsTitle: {
  //     marginBottom: Layout.Padding.xl,
  //   },
});
export default NewsList;
