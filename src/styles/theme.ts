import { extendTheme } from '@chakra-ui/react'

import { themeColors } from './colors'

export const theme = extendTheme({
  colors: {
    brand: {
      ...themeColors,
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
