import React from 'react';
import {Pressable, View, ViewStyle, TextStyle, ColorValue} from 'react-native';
import {Color, DefaultButtonPreset, Layout} from '@controls/Theme';
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

type ButtonIconProps = {
  icon: JSX.Element;
};

const ButtonIconContent = ({icon}: ButtonIconProps) => {
  return icon;
};

type ButtonIconAndTextProps = ButtonTextContentProps &
  ButtonIconProps & {
    iconPosition: 'left' | 'right';
  };

const ButtonIconAndTextContent = ({
  icon,
  title,
  textStyle,
  iconPosition,
}: ButtonIconAndTextProps) => {
  const baseStyle = {
    Container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    Text: {
      marginLeft: Layout.Padding.xxs,
    },
  };
  const generateContent = () => {
    if (iconPosition == 'left') {
      return (
        <View style={[baseStyle.Container as ViewStyle]}>
          {icon}
          <Text style={[textStyle, baseStyle.Text]}>{title}</Text>
        </View>
      );
    }
  };

  const content = generateContent();
  return <View>{content}</View>;
};

type ButtonProps = {
  title?: string;
  icon?: React.JSX.Element;
  iconPosition?: 'left' | 'right';
  iconShape?: 'square' | 'circle';
  isFullWidth?: boolean;
  iconBorder?: boolean;
  iconBorderColor?: ColorValue;
  ripleColor?: ColorValue;
  onButtonPressed?: () => void;
  containerStyle?: ViewStyle;
  preset?: keyof typeof DefaultButtonPreset;
};

const Button = (props: ButtonProps): JSX.Element => {
  const {
    preset = 'Button',
    title = '',
    icon,
    iconPosition = 'left',
    ripleColor = Color.Neutral[2],
    iconShape = 'square',
    isFullWidth = false,
    iconBorder = false,
    iconBorderColor = '#000',
    onButtonPressed,
  } = props;

  const generateContent = () => {
    const res = {
      // dựa vào loại btn khác nhau có thể style khác nhau cho Container & Pressable
      style: {Container: {}, Pressable: {}},
      content: <></>,
    };
    if (title && !icon) {
      //BUTTON ONLY TEXT
      res.content = (
        <ButtonTextContent
          title={title}
          textStyle={[DefaultButtonPreset[preset].Content] as TextStyle}
        />
      );
      return res;
    } else if (!title && icon) {
      //BUTTON ONLY ICON
      res.style.Container = {
        width: 40,
        overflow: 'hidden',
        borderRadius: iconShape === 'square' ? 10 : 40 / 2,
        height: 40,
      };
      res.style.Pressable = {
        borderWidth: iconBorder ? 1 : 0,
        borderColor: iconBorderColor,
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: 40,
        width: 40,
        borderRadius: 10,
        overflow: 'hidden',
        ...(iconShape === 'square'
          ? {
              ...(isFullWidth ? {flex: 1} : {width: 40}),
            }
          : {
              borderRadius: 40 / 2,
            }),
      };
      res.content = <ButtonIconContent icon={icon} />;
      return res;
    } else if (title && icon) {
      // BUTTON ICON + TEXT
      res.content = (
        <ButtonIconAndTextContent
          icon={icon}
          title={title}
          textStyle={[DefaultButtonPreset[preset].Content] as TextStyle}
          iconPosition={iconPosition}
        />
      );
      return res;
    } else {
      //ERR BUTTON NO ICON + NO TEXT
      return res;
    }
  };
  const content = generateContent();

  return (
    <View
      style={[DefaultButtonPreset[preset].Container, content.style.Container]}>
      <Pressable
        onPress={onButtonPressed}
        android_ripple={{color: ripleColor, borderless: true}}
        style={[
          DefaultButtonPreset[preset].Pressable,
          content.style.Pressable,
        ]}>
        {content.content}
      </Pressable>
    </View>
  );
};

export default Button;
