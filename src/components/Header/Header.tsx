import { Container, HStack, Heading, Spacer, Box, Icon } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FC } from 'react'
import { HiCode } from 'react-icons/hi'

import { GitHubIcon, TwitterIcon } from '@src/components'
import { colors } from '@src/styles/colors'

type Props = {
  title: string
}

export const Header: FC<Props> = ({ title }) => {
  return (
    <Box bg={colors.primaryGray} as="header" paddingY={4} marginBottom={4}>
      <Container maxW="container.lg">
        <HStack alignItems="end">
          <NextLink href="/articles/page/1" passHref>
            <a>
              <HStack
                spacing="12px"
                _hover={{ bg: colors.secondaryGray }}
                borderRadius={10}
                paddingX={3}
                paddingY={2}
              >
                <Icon as={HiCode} w={6} h={6} display="block" color={colors.white} />
                <Heading variant="heading1">{title}</Heading>
              </HStack>
            </a>
          </NextLink>

          <HeaderItem path="/articles/page/1" label="Article" />
          <HeaderItem path="/profile" label="Profile" />

          <Spacer />

          <Box _hover={{ bg: colors.secondaryGray }} borderRadius={10} paddingX={2} paddingY={2}>
            <GitHubIcon width={5} height={5} />
          </Box>
          <Box _hover={{ bg: colors.secondaryGray }} borderRadius={10} paddingX={2} paddingY={2}>
            <TwitterIcon width={5} height={5} />
          </Box>
        </HStack>
      </Container>
    </Box>
  )
}

const HeaderItem: FC<{ path: string; label: string }> = ({ path, label }) => {
  return (
    <NextLink href={path} passHref>
      <a>
        <Box _hover={{ bg: colors.secondaryGray }} borderRadius={10} paddingX={3} paddingY={2}>
          <Heading variant="heading4" color={colors.lightGray}>
            {label}
          </Heading>
        </Box>
      </a>
    </NextLink>
  )
}
