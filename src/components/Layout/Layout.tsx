import { Container, Spacer as ChakraSpacer, Flex, Button } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { VFC, ReactNode } from 'react'
import { FiChevronLeft } from 'react-icons/fi'

import { Footer, Header, Spacer } from '@src/components'
import { colors } from '@src/styles/colors'

export const siteTitle = 'Kent.dev'

type Props = {
  children: ReactNode
  home?: boolean
}

export const Layout: VFC<Props> = ({ children, home = false }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Flex flexDirection="column" height="100vh" bg={colors.primaryGray}>
        <Header title={siteTitle} />

        <Container maxW="container.lg" padding={5}>
          <main>{children}</main>

          <Spacer size={16} />

          {!home && (
            <Button leftIcon={<FiChevronLeft />} variant="backToHome">
              <Link href="/">Back to home</Link>
            </Button>
          )}
        </Container>

        <ChakraSpacer />

        <Footer />
      </Flex>
    </>
  )
}
