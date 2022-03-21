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
          fontWeight: 400,
          bg: themeColors.primaryGray,
          _hover: {
            bg: themeColors.secondaryGray,
          },
        },
      },
    },
  },
})
