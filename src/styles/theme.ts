import { extendTheme } from '@chakra-ui/react'

import { themeColors } from './colors'

export const theme = extendTheme({
  colors: {
    brand: {
      ...themeColors,
    },
    react: {
      100: '#61dafbBF',
      200: '#61dafbBF',
      300: '#61dafbBF',
      400: '#61dafbBF',
      500: '#61dafbBF',
      600: '#61dafbBF',
      700: '#61dafbBF',
      800: '#61dafbBF',
      900: '#61dafbBF',
    },
    apollo: {
      100: '#ad9bf6BF',
      200: '#ad9bf6BF',
      300: '#ad9bf6BF',
      400: '#ad9bf6BF',
      500: '#ad9bf6BF',
      600: '#ad9bf6BF',
      700: '#ad9bf6BF',
      800: '#ad9bf6BF',
      900: '#ad9bf6BF',
    },
    graphql: {
      100: '#e10098BF',
      200: '#e10098BF',
      300: '#e10098BF',
      400: '#e10098BF',
      500: '#e10098BF',
      600: '#e10098BF',
      700: '#e10098BF',
      800: '#e10098BF',
      900: '#e10098BF',
    },
    typescript: {
      100: '#3178c6BF',
      200: '#3178c6BF',
      300: '#3178c6BF',
      400: '#3178c6BF',
      500: '#3178c6BF',
      600: '#3178c6BF',
      700: '#3178c6BF',
      800: '#3178c6BF',
      900: '#3178c6BF',
    },
    nextjs: {
      100: '#ffffffBF',
      200: '#ffffffBF',
      300: '#ffffffBF',
      400: '#ffffffBF',
      500: '#ffffffBF',
      600: '#ffffffBF',
      700: '#ffffffBF',
      800: '#ffffffBF',
      900: '#ffffffBF',
    },
  },
  components: {
    Button: {
      variants: {
        backToHome: {
          color: themeColors.white,
          fontWeight: 500,
          bg: themeColors.primaryGray,
          _hover: {
            bg: themeColors.secondaryGray,
          },
        },
      },
    },
    Text: {
      variants: {
        title: {
          color: themeColors.white,
          fontWeight: 800,
          fontSize: 20,
        },
        body: {
          color: themeColors.white,
          fontWeight: 500,
          fontSize: 16,
        },
        subtext: {
          color: themeColors.lightGray,
          fontWeight: 400,
          fontSize: 12,
        },
      },
    },
    Heading: {
      variants: {
        heading1: {
          color: themeColors.white,
          fontSize: '2xl',
          fontWeight: 900,
          as: 'h1',
        },
        heading2: {
          color: themeColors.white,
          fontSize: 'xl',
          fontWeight: 800,
          as: 'h2',
        },
        heading3: {
          color: themeColors.white,
          fontSize: 'lg',
          fontWeight: 700,
          as: 'h3',
        },
        heading4: {
          color: themeColors.white,
          fontSize: 'md',
          fontWeight: 700,
          as: 'h4',
        },
      },
    },
  },
})
