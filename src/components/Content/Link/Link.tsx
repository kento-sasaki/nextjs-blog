import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link as ChakraLink } from '@chakra-ui/react'
import { ComponentType } from 'react-markdown/lib/ast-to-react'

import { colors } from '@src/styles/colors'

export const Link: ComponentType<any> = ({ children, href, ...props }) => {
  return (
    <ChakraLink isExternal href={href} color={colors.lightGray} fontWeight={600}>
      {children}
      {children[0].type !== 'img' && <ExternalLinkIcon mx="2px" />}
    </ChakraLink>
  )
}
