import { Container, HStack, Heading, Spacer, Box, Flex, Icon } from '@chakra-ui/react'
import NextLink from 'next/link'
import { VFC } from 'react'
import { HiCode } from 'react-icons/hi'

import { GitHubIcon, TwitterIcon } from '@src/components'
import { colors } from '@src/styles/colors'

type Props = {
  title: string
}

export const Header: VFC<Props> = props => {
  return (
    <Container
      maxW="container.lg"
      bg={colors.primaryGray}
      as="header"
      paddingY={4}
      marginBottom={4}
    >
      <Flex alignItems="center" height="40px">
        <NextLink href="/" passHref>
          <a>
            <HStack spacing="12px">
              <Icon as={HiCode} w={6} h={6} display="block" color={colors.white} />
              <Heading variant="heading1">{props.title}</Heading>
            </HStack>
          </a>
        </NextLink>

        <Spacer />

        <HStack spacing="20px">
          <GitHubIcon width={5} height={5} />
          <TwitterIcon width={5} height={5} />
        </HStack>
      </Flex>
    </Container>
  )
}
