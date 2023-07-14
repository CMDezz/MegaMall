/* eslint-disable react-hooks/exhaustive-deps */
// import {useDimensions} from '@controls/Hooks/useDimensions';
import React, {useMemo} from 'react';
import {View} from 'react-native';
/**
 *
 * @param children :FlatList có sử dụng numColumns
 * @param numColums : truyền vào numcolumns mà nó thay đổi
 * remount lại mỗi khi thay đổi numColumns (thay đổi portrait - landscape)
 */
const FlatListRemount = ({
  children,
  numColums,
}: {
  children: React.ReactNode;
  numColums: number;
}): JSX.Element => {
  const memoisedView = useMemo(() => {
    return <View key={numColums}>{children}</View>;
  }, [numColums]);
  return memoisedView;
};

export default FlatListRemount;
