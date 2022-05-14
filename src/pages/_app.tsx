import { ChakraProvider } from '@chakra-ui/react'
import { ClickToComponent } from 'click-to-react-component'
import type { AppProps } from 'next/app'

import { PageProvider } from '@src/hooks/usePage'
import { theme } from '@src/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <PageProvider>
        <ClickToComponent />
        <Component {...pageProps} />
      </PageProvider>
    </ChakraProvider>
  )
}

export default MyApp
