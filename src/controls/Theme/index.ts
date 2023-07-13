import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const {width: SW, height: SH} = Dimensions.get('screen');

export const Layout = {
  Window: {
    width,
    height,
  },
  Screen: {
    width: SW,
    height: SH,
  },
  IsSmallDevice: width < 375,
  Padding: {
    xxxs: 2,
    xxs: 4,
    xs: 8,
    sm: 10,
    md: 15,
    lg: 20,
    xl: 24,
    xxl: 32,
  },
  Text: {
    Size: {
      md: 14,
      sm: 12,
      lg: 16,
      xl: 20,
      xxl: 25,
    },
    Weight: {
      light: '300',
      regular: '400',
      medium: '500',
      bold: '700',
    },
  },
  Icon: {
    Size: 20,
  },
  BorderRadius: 10,
};

export const Color = {
  Primary: [
    '#FFC120', //màu chính, cam vàng
    '#FFD872', //màu chính, cam vàng nhạt
    '#FFF6E4', //màu chính, cam vàng nhạt hơn
  ],
  Green: [
    '#5CC936', // xanh
    '#8FD975', // xanh nhạt nhẹ
    '#E4F3EA', // xanh nhạt
  ],
  EarthGreen: [
    '#3A9B7A', //xanh đất
    '#83C6AF', //xanh đất nhạt
  ],
  Danger: [
    '#FE3A30', //đỏ
    '#F46F68', //đỏ nhạt nhẹ
    '#FCECEF', //đỏ nhạt
  ],
  Blue: [
    '#3669C9', //xanh dương
    '#EFF5FB', //xanh dương nhạt
  ],
  Neutral: [
    '#0C1A30', // đen navy
    '#838589', // dark grey
    '#C4C5C4', // half grey
    '#EDEDED', // soft grey
    '#FAFAFA', // off grey
  ],
  White: ['#fff'],
};

export const DefaultTextPreset = {
  NormalText: {
    fontSize: Layout.Text.Size.md, //14
    fontWeight: Layout.Text.Weight.regular, //400
  },
  TextLink: {
    fontSize: Layout.Text.Size.md, //14
    fontWeight: Layout.Text.Weight.medium, //500
  },
  NormalHeading: {
    fontSize: Layout.Text.Size.lg, //16
    fontWeight: Layout.Text.Weight.medium, //500
  },
};

// 3 cấp : container - pressable - content
// chỉ là những preset cơ bản
export const DefaultButtonPreset = {
  Button: {
    Container: {
      height: 50,
    },
    Pressable: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      borderRadius: Layout.BorderRadius,
      borderWidth: 1,
      borderColor: Color.Neutral[0],
    },
    Content: {
      lineHeight: 20,
      fontSize: 14,
      fontWeight: Layout.Text.Weight.medium,
      textAlign: 'center',
    },
    // MinWidth: 275,
    // borderRadius: Layout.BorderRadius,
  },
  // ButtonMini: {
  //   height: 40,
  //   paddingVertical: 1,
  //   paddingHorizontal: 10,
  //   lineHeightText: 20,
  //   fontSize: 14,
  //   fontWeight: 20,
  //   // MinWidth: 100,
  //   // borderRadius: Layout.BorderRadius,
  // },
  // ButtonIconOnly: {
  //   paddingVertical: 2,
  //   paddingHorizontal: 2,
  // },
  // ButtonBlue: {
  //   backgroundColor: Color.Blue[0],
  //   color: Color.White[0],
  //   // borderWidth: 1,
  //   // borderRadius: Color.Blue[0],
  // },
  // ButtonDefault: {
  //   backgroundColor: Color.White[0],
  //   color: Color.Neutral[0],
  //   // borderWidth: 1,
  //   // borderRadius: Layout.BorderRadius,
  // },
  // ButtonDanger: {
  //   backgroundColor: Color.Danger[0],
  //   color: Color.White[0],
  //   // borderWidth: 1,
  //   borderRadius: Layout.BorderRadius,
  // },
};
