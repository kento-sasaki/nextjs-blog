import { Container, Spacer as ChakraSpacer, Flex, Button, Fade } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { VFC, ReactNode } from 'react'
import { FiChevronLeft } from 'react-icons/fi'

import { Footer, Header, Spacer, Pagination } from '@src/components'
import { siteTitle } from '@src/constants/text'
import { usePage } from '@src/hooks/usePage'
import { colors } from '@src/styles/colors'

type Props = {
  children: ReactNode
  home?: boolean
  havePages?: boolean
}

export const Layout: VFC<Props> = ({ children, home = false, havePages = false }) => {
  const router = useRouter()
  const back = () => {
    router.back()
  }

  const { currentPage, totalPageCount } = usePage()

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Flex flexDirection="column" minHeight="100vh" bg={colors.primaryGray}>
        <Header title={siteTitle} />

        <Container maxW="container.lg" padding={5}>
          <Fade in>
            <main>{children}</main>
          </Fade>

          <Spacer size={52} />

          {!home && (
            <Button leftIcon={<FiChevronLeft />} variant="back" onClick={back}>
              Back
            </Button>
          )}
        </Container>

        <ChakraSpacer />
        {havePages && totalPageCount && (
          <>
            <Pagination currentPage={currentPage} totalPageCount={totalPageCount} />
            <Spacer size={32} />
          </>
        )}

        <Footer />
      </Flex>
    </>
  )
}
