import React, {useState} from 'react';
import {View} from 'react-native';
import Input from '@components/common/Input';
import {SearchIcon} from '@controls/Icons/Ionicons.icon';
import {Layout} from '@controls/Theme';

const SearchInput = (): JSX.Element => {
  const [keyword, setKeyword] = useState<string>('');
  return (
    <View style={{padding: Layout.Padding.xl}}>
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
