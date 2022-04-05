import { ListItem as ChakraListItem } from '@chakra-ui/react'
import { LiComponent } from 'react-markdown/lib/ast-to-react'

export const ListItem: LiComponent = ({ children, ...props }) => {
  return <ChakraListItem>{children}</ChakraListItem>
}
