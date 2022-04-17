import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { PageProvider } from '@src/hooks/usePage'
import { theme } from '@src/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <PageProvider>
        <Component {...pageProps} />
      </PageProvider>
    </ChakraProvider>
  )
}

export default MyApp
