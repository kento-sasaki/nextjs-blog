import { UnorderedList as ChakraUnorderedList } from '@chakra-ui/react'
import { UnorderedListComponent } from 'react-markdown/lib/ast-to-react'

import { colors } from '@src/styles/colors'

export const UnorderedList: UnorderedListComponent = ({ children, ...props }) => {
  return <ChakraUnorderedList color={colors.white}>{children}</ChakraUnorderedList>
}
