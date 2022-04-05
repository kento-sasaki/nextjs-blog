import { Text } from '@chakra-ui/react'
import { ComponentType } from 'react-markdown/lib/ast-to-react'

export const Paragraph: ComponentType<any> = ({ children, ...props }) => {
  return (
    <Text variant="body" lineHeight={1.7}>
      {children}
    </Text>
  )
}
