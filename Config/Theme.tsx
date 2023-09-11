import {I18nManager, PixelRatio, Platform, StyleSheet} from 'react-native';

export const fonts = {
  EnglishRegular: 'Helvetica',
  EnglishBold: 'Helvetica-Bold',
  EnglishLight: 'Helvetica-Light',
};

export const Theme = {
  colors: {
    primary: '#68DDBA',
    darkerPrimary: '#3DD3F1BA',
    secondary: '#7B848D',
    tabBackground: '#FAFCFE',
    text: '#000',
    background: '#fff',
    card: '#fff',
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },

  fonts: {
    EnglishRegular: fonts.EnglishRegular,
    EnglishBold: fonts.EnglishBold,
    EnglishLight: fonts.EnglishLight,
  },

  typography: StyleSheet.create({
    body: {
      fontSize: 17,
      lineHeight: 22,
      fontFamily: fonts.EnglishRegular,
    },
    bodyBold: {
      fontSize: 17,
      lineHeight: 20,
      fontFamily: fonts.EnglishBold,
    },
    smallTitle: {
      fontFamily: fonts.EnglishLight,
      fontSize: 10,
    },
    bodyMedium: {
      fontSize: 17,
      lineHeight: 20,
      fontFamily: fonts.EnglishRegular,
    },
    bodyLight: {
      fontSize: 17,
      lineHeight: 20,
      fontFamily: fonts.EnglishLight,
    },

    callout: {
      fontSize: 16,
      lineHeight: 20,
      fontFamily: fonts.EnglishRegular,
    },
    caption: {
      fontSize: 11,
      lineHeight: 13,
      fontFamily: fonts.EnglishRegular,
    },
    captionBold: {
      fontSize: 11,
      lineHeight: 13,
      fontFamily: fonts.EnglishBold,
    },
    captionMedium: {
      fontSize: 11,
      lineHeight: 13,
      fontFamily: fonts.EnglishRegular,
    },
    captionLight: {
      fontSize: 11,
      lineHeight: 13,
      fontFamily: fonts.EnglishLight,
    },

    smallerFootnote: {
      fontSize: 11,
      lineHeight: 14,
      fontFamily: fonts.EnglishRegular,
      color: '#999999',
    },
    smallerFootnoteBold: {
      fontSize: 11,
      lineHeight: 13,
      fontWeight: 'bold',
      fontFamily: fonts.EnglishBold,
      color: '#999999',
    },
    smallerFootnoteMedium: {
      fontSize: 11,
      lineHeight: 13,
      fontFamily: fonts.EnglishRegular,
      color: '#999999',
    },
    smallerFootnoteLight: {
      fontSize: 11,
      lineHeight: 13,
      fontFamily: fonts.EnglishLight,
      color: '#999999',
    },
    footnote: {
      fontSize: 13,
      lineHeight: 15,
      fontFamily: fonts.EnglishRegular,
      color: '#999999',
    },
    footnoteBold2: {
      fontSize: 13,
      fontWeight: 'bold',
      lineHeight: 18,
      fontFamily: fonts.EnglishBold,
      color: '#999999',
    },
    footnoteBold: {
      fontSize: 15,
      // fontWeight: "bold",
      lineHeight: 18,
      fontFamily: fonts.EnglishBold,
      color: '#999999',
    },
    headline: {
      fontSize: 17,
      lineHeight: 22,
      fontFamily: 'SFProDisplay-Semibold',
    },
    headlineBold: {
      fontSize: 17,
      lineHeight: 22,
      fontFamily: fonts.EnglishBold,
    },
    headlineMedium: {
      fontSize: 17,
      lineHeight: 22,
      fontFamily: fonts.EnglishRegular,
    },
    headlineLight: {
      fontSize: 17,
      lineHeight: 22,
      fontFamily: fonts.EnglishLight,
    },
    subhead: {
      fontSize: 15,
      lineHeight: 20,
      fontFamily: fonts.EnglishRegular,
    },
    subheadBold: {
      fontSize: 15,
      lineHeight: 20,
      fontFamily: fonts.EnglishBold,
    },
    subheadMedium: {
      fontSize: 15,
      lineHeight: 20,
      fontFamily: fonts.EnglishRegular,
    },

    title1: {
      fontSize: 34,
      lineHeight: 41,
      fontFamily: fonts.EnglishBold,
    },
    title2: {
      fontSize: 28,
      lineHeight: 34,
      fontFamily: fonts.EnglishBold,
    },
    title3: {
      fontSize: 20,
      lineHeight: 26,
      fontWeight: '400',
      fontFamily: fonts.EnglishBold,
    },
    title4: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: '400',
      fontFamily: fonts.EnglishBold,
    },
    button: {
      fontSize: 16,
      fontFamily: fonts.EnglishRegular,
    },
    buttonBold: {
      fontSize: 16,
      fontFamily: fonts.EnglishBold,
    },
    buttonMedium: {
      fontSize: 16,
      fontFamily: fonts.EnglishRegular,
    },
    buttonLight: {
      fontSize: 16,
      fontFamily: fonts.EnglishLight,
    },
    chatFont: {
      fontSize: 11,
      fontFamily: fonts.EnglishRegular,
      color: '#999999',
    },
  }),

  buttons: {
    danger: 'danger',
    primary: 'primary',
    secondary: 'secondary',
    disabled: 'disabled',
  },
};
