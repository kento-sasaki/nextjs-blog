import { extendTheme } from '@chakra-ui/react'

import { themeColors } from './colors'

export const theme = extendTheme({
  colors: {
    brand: {
      ...themeColors,
    },
  },
})
