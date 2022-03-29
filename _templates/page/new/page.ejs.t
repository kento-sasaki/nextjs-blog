---
to: src/pages/<%= path %>/index.page.tsx
---
import { Center, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Layout } from '@src/components'
// import { colors } from '@src/styles/colors'

type Props = {}

const <%= h.changeCase.pascal(pageName) %>: NextPage<Props> = (props) => {
  return (
    <Layout>
      <Center>
        <Text>new page</Text>
      </Center>
    </Layout>
  )
}

export default <%= h.changeCase.pascal(pageName) %>
