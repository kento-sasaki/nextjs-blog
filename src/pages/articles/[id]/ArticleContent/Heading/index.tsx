import { Heading } from '@chakra-ui/react'
import { HeadingComponent } from 'react-markdown/lib/ast-to-react'

export const Heading1: HeadingComponent = ({ children, ...props }) => {
  return (
    <Heading variant="heading1" marginBottom={2} marginTop={10}>
      {children}
    </Heading>
  )
}

export const Heading2: HeadingComponent = ({ children, ...props }) => {
  return (
    <Heading variant="heading2" marginBottom={2} marginTop={9}>
      {children}
    </Heading>
  )
}

export const Heading3: HeadingComponent = ({ children, ...props }) => {
  return (
    <Heading variant="heading3" marginBottom={2} marginTop={8}>
      {children}
    </Heading>
  )
}

export const Heading4: HeadingComponent = ({ children, ...props }) => {
  return (
    <Heading variant="heading4" marginBottom={2} marginTop={7}>
      {children}
    </Heading>
  )
}
