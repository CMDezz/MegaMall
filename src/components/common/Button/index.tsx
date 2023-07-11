import React from 'react';
import {Pressable, View, ViewStyle, TextStyle} from 'react-native';
import {DefaultButtonPreset} from '@controls/Theme';
import Text from '../Text';

type ButtonTextContentProps = {
  title?: string;
  textStyle?: TextStyle;
};

const ButtonTextContent = ({
  title,
  textStyle,
}: ButtonTextContentProps): JSX.Element => {
  return <Text style={textStyle}>{title}</Text>;
};

type ButtonIconProps<T> = {
  icon: T;
};

const ButtonIconContent = <T,>({icon}: ButtonIconProps<T>): T => {
  return icon;
};

type ButtonProps = {
  title?: string;
  icon?: React.JSX.Element;
  iconPosition?: 'left' | 'right';
  onButtonPressed?: () => void;
  containerStyle?: ViewStyle;
  preset?: keyof typeof DefaultButtonPreset;
};

const Button = (props: ButtonProps): JSX.Element => {
  const {preset = 'Button', title = '', icon} = props;

  const generateContent = () => {
    if (title && !icon) {
      //BUTTON ONLY TEXT
      return (
        <ButtonTextContent
          title={title}
          textStyle={[DefaultButtonPreset[preset].Content] as TextStyle}
        />
      );
    } else if (!title && icon) {
      //BUTTON ONLY ICON
      return <ButtonIconContent icon={icon} />;
    }
  };

  return (
    <View style={[DefaultButtonPreset[preset].Container]}>
      <Pressable style={[DefaultButtonPreset[preset].Pressable]}>
        {generateContent()}
      </Pressable>
    </View>
  );
};

export default Button;
