import { Box, Text, Center, Heading, Divider, Avatar } from '@chakra-ui/react'
import { format, parseISO } from 'date-fns'
import { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import { CodeBlock } from './CodeBlock/CodeBlock'
import { Heading1, Heading2, Heading3, Heading4 } from './Heading'
import { Link } from './Link/Link'
import { ListItem } from './ListItem/ListItem'
import { OrderedList } from './OrderedList/OrderedList'
import { Paragraph } from './Paragraph/Paragraph'
import { UnorderedList } from './UnorderedList/UnorderedList'

import { Spacer } from '@src/components'
import { Profile } from '@src/lib/fetchContent'
import { colors } from '@src/styles/colors'

type Props = {
  profile: Profile
}

export const ProfileContent: FC<Props> = ({ profile }) => {
  const createdAt = parseISO(profile.createdAt)

  return (
    <Box flexDirection="column" bg={colors.primaryGray}>
      <Center flexDirection="column">
        <Heading variant="heading1">About Me</Heading>

        <Spacer size={8} />

        <Text variant="body" color={colors.lightGray}>
          published: {format(createdAt, 'yyyy/MM/dd')}
        </Text>

        <Spacer size={16} />
        <Divider />
        <Spacer size={16} />

        <Avatar name="Kento Sasaki" size="xl" src="/images/profile.jpg" />
        <Spacer size={8} />
        <Heading variant="heading1">👋 Hi, I’m Kento Sasaki</Heading>
        <Spacer size={32} />

        <Box as="article">
          {profile.markdown && (
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
                a: Link,
              }}
            >
              {profile.markdown}
            </ReactMarkdown>
          )}
        </Box>
      </Center>
    </Box>
  )
}
