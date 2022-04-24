---
to: src/components/<%= h.changeCase.pascal(componentName) %>/<%= h.changeCase.pascal(componentName) %>.tsx
---
import { Box, Text } from '@chakra-ui/react'
import { FC } from 'react'

// import { Spacer } from '@src/components'
// import { colors } from '@src/styles/colors'

type Props = {}

export const <%= h.changeCase.pascal(componentName) %>: FC<Props> = props => {
  return (
    <Box>
      <Text>
        new component
      </Text>
    </Box>
  )
}
