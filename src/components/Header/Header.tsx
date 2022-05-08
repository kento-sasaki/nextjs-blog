import { Container, HStack, Heading, Spacer, Box, Icon } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FC } from 'react'
import { HiCode } from 'react-icons/hi'

import { GitHubIcon, TwitterIcon } from '@src/components'
import { colors } from '@src/styles/colors'

type Props = {
  title: string
}

const wrapperStyle = {
  _hover: { bg: colors.secondaryGray },
  borderRadius: 10,
  paddingX: { base: 1, md: 2, lg: 2 },
  paddingY: { base: 1, md: 2, lg: 2 },
}

export const Header: FC<Props> = ({ title }) => {
  return (
    <Box bg={colors.primaryGray} as="header" paddingY={4} marginBottom={4}>
      <Container maxW="container.lg">
        <HStack alignItems="end">
          <NextLink href="/articles/page/1" passHref>
            <a>
              <HStack spacing="12px" {...wrapperStyle}>
                <Icon
                  as={HiCode}
                  w={{ base: 3, md: 4, lg: 6 }}
                  h={{ base: 3, md: 4, lg: 6 }}
                  display="block"
                  color={colors.white}
                />
                <Heading variant="heading1" fontSize={{ base: 'lg', md: '2xl', lg: '2xl' }}>
                  {title}
                </Heading>
              </HStack>
            </a>
          </NextLink>

          <HeaderItem path="/articles/page/1" label="Article" />
          <HeaderItem path="/profile" label="Profile" />

          <Spacer />

          <Box {...wrapperStyle}>
            <GitHubIcon width={5} height={5} />
          </Box>
          <Box {...wrapperStyle}>
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
        <Box {...wrapperStyle}>
          <Heading
            variant="heading4"
            color={colors.lightGray}
            fontSize={{ base: 'xs', md: 'md', lg: 'md' }}
          >
            {label}
          </Heading>
        </Box>
      </a>
    </NextLink>
  )
}
