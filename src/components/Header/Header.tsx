import {
  Container,
  HStack,
  Heading,
  Icon,
  Spacer,
  Box,
  Flex,
  Link,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { VFC } from 'react'
import { FiGithub, FiTwitter } from 'react-icons/fi'

import * as urls from '@src/constants/urls'
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
            <Heading
              as="h1"
              color={colors.white}
              fontSize="2xl"
              fontWeight={900}
            >
              {props.title}
            </Heading>
          </NextLink>

          <Spacer />

          <HStack spacing="20px">
            <Link href={urls.githubUrl} isExternal>
              <Icon
                as={FiGithub}
                w={6}
                h={6}
                color={colors.white}
                display="block"
              />
            </Link>
            <Link href={urls.twitterUrl} isExternal>
              <Icon
                as={FiTwitter}
                w={6}
                h={6}
                color={colors.white}
                display="block"
              />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
