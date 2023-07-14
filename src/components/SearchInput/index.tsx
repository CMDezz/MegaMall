import React, {useState} from 'react';
import {View, ViewStyle} from 'react-native';
import Input from '@components/common/Input';
import {SearchIcon} from '@controls/Icons/Ionicons.icon';

type SearchInputProps = {
  style?: ViewStyle | ViewStyle[];
};
const SearchInput = ({style = {}}: SearchInputProps): JSX.Element => {
  const [keyword, setKeyword] = useState<string>('');
  return (
    <View style={style}>
      <Input
        placeholder="Search Product Name"
        onChangeText={(masked, unMasked) => setKeyword(unMasked)}
        value={keyword}
        maxLength={50}
        iconPosition="right"
        icon={<SearchIcon />}
      />
    </View>
  );
};

export default SearchInput;
