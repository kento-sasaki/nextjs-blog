import { Container, HStack, Heading, Spacer, Box, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'
import { VFC } from 'react'

import { GitHubIcon, TwitterIcon } from '@src/components/Icons'
import { colors } from '@src/styles/colors'

type Props = {
  title: string
}

export const Header: VFC<Props> = props => {
  return (
    <Box
      bg={colors.primaryGray}
      as="header"
      borderBottomColor={colors.secondaryGray}
      borderBottomWidth={1}
    >
      <Container maxW="container.xl">
        <Flex alignItems="center" height="40px">
          <NextLink href="/" passHref>
            <Heading as="h1" color={colors.white} fontSize="2xl" fontWeight={900}>
              {props.title}
            </Heading>
          </NextLink>

          <Spacer />

          <HStack spacing="20px">
            <GitHubIcon width={5} height={5} />
            <TwitterIcon width={5} height={5} />
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
