import { OrderedList as ChakraOrderedList } from '@chakra-ui/react'
import { OrderedListComponent } from 'react-markdown/lib/ast-to-react'

import { colors } from '@src/styles/colors'

export const OrderedList: OrderedListComponent = ({ children, ...props }) => {
  return (
    <ChakraOrderedList color={colors.white} marginY={2}>
      {children}
    </ChakraOrderedList>
  )
}
