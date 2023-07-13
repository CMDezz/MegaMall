import React from 'react';
import {Text as BaseText, ColorValue, TextStyle} from 'react-native';
import {Color, Layout} from '@controls/Theme';
import {DefaultTextPreset} from '@controls/Theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
type TextProps = BaseText['props'] & {
  preset?: keyof typeof DefaultTextPreset;
  color?: ColorValue;
  fontSize?: number;
  fontWeight?: string;
  type?: 'text' | 'link';
  onTextPressed?: () => void;
};

const Text = (props: TextProps): JSX.Element => {
  const {
    preset,
    type = 'text',
    color,
    fontSize,
    fontWeight,
    style,
    onTextPressed,
    ...otherProps
  } = props;

  const textColor = color ? color : Color.Neutral[0];
  const textFontSize = fontSize ? fontSize : Layout.Text.Size.md;
  const textFontWeight = fontWeight ? fontWeight : Layout.Text.Weight.regular;

  const textStyle = [
    {color: textColor, fontSize: textFontSize, fontWeight: textFontWeight},
    preset ? DefaultTextPreset[preset] : [],
    style,
  ] as TextStyle;
  if (type === 'link') {
    return (
      <TouchableOpacity onPress={onTextPressed}>
        <BaseText style={textStyle} {...otherProps} />
      </TouchableOpacity>
    );
  }
  return <BaseText style={textStyle} {...otherProps} />;
};

export default Text;
