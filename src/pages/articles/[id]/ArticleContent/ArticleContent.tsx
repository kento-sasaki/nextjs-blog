import { Box, Text, Center, Heading, Divider } from '@chakra-ui/react'
import { format, parseISO } from 'date-fns'
import { VFC } from 'react'
import ReactMarkdown from 'react-markdown'

import { CodeBlock } from './CodeBlock/CodeBlock'
import { Heading1, Heading2, Heading3, Heading4 } from './Heading'
import { ListItem } from './ListItem/ListItem'
import { OrderedList } from './OrderedList/OrderedList'
import { Paragraph } from './Paragraph/Paragraph'
import { UnorderedList } from './UnorderedList/UnorderedList'

import { Spacer } from '@src/components'
import { Article } from '@src/lib/articles'
import { colors } from '@src/styles/colors'

type Props = {
  article: Article
}

export const ArticleContent: VFC<Props> = props => {
  const date = parseISO(props.article.date)

  return (
    <Box flexDirection="column" bg={colors.primaryGray}>
      <Spacer size={8} />

      <Center flexDirection="column">
        <Heading variant="heading1">{props.article.title ?? 'No title'}</Heading>
        <Spacer size={8} />
        <Text variant="body" color={colors.lightGray}>
          published: {format(date, 'yyyy/MM/dd')}
        </Text>
      </Center>

      <Spacer size={12} />
      <Divider />

      <Box as="article" marginX={4}>
        {props.article.markdown ? (
          <ReactMarkdown
            components={{
              code: CodeBlock,
              h1: Heading1,
              h2: Heading2,
              h3: Heading3,
              h4: Heading4,
              p: Paragraph,
              ol: OrderedList,
              li: ListItem,
              ul: UnorderedList,
              // blockquote:
              // a:
            }}
          >
            {props.article.markdown}
          </ReactMarkdown>
        ) : // TODO: コンテンツが見つからなかった場合の画面作る
        null}
      </Box>
    </Box>
  )
}
