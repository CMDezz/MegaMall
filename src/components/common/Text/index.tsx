import React from 'react';
import {Text as BaseText, ColorValue, TextStyle} from 'react-native';
import {Color, Layout} from '@controls/Theme';
import {DefaultTextPreset} from '@controls/Theme';
type TextProps = BaseText['props'] & {
  preset?: keyof typeof DefaultTextPreset;
  color?: ColorValue;
  fontSize?: number;
  fontWeight?: string;
};

const Text = (props: TextProps): JSX.Element => {
  const {preset, color, fontSize, fontWeight, style, ...otherProps} = props;

  const textColor = color ? color : Color.Neutral[0];
  const textFontSize = fontSize ? fontSize : Layout.Text.Size.md;
  const textFontWeight = fontWeight ? fontWeight : Layout.Text.Weight.regular;

  const textStyle = [
    preset ? DefaultTextPreset[preset] : [],
    {color: textColor, fontSize: textFontSize, fontWeight: textFontWeight},
    style,
  ] as TextStyle;

  return <BaseText style={textStyle} {...otherProps} />;
};

export default Text;
