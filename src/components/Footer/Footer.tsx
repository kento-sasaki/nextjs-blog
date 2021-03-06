import { HStack, Box, Center, Text } from '@chakra-ui/react'
import { FC } from 'react'

import { GitHubIcon, TwitterIcon, Spacer } from '@src/components'
import { siteTitle } from '@src/constants/text'
import { colors } from '@src/styles/colors'

export const Footer: FC = () => {
  return (
    <Box bg={colors.secondaryGray} as="footer" paddingBottom={4} paddingTop={12}>
      <Center flexDirection="column">
        <HStack spacing="20px">
          <GitHubIcon width={5} height={5} color={colors.lightGray} />
          <TwitterIcon width={5} height={5} color={colors.lightGray} />
        </HStack>
        <Spacer size={20} />
        <Text color={colors.lightGray} fontSize="sm">
          2022 {siteTitle} - All rights reserved
        </Text>
      </Center>
    </Box>
  )
}
