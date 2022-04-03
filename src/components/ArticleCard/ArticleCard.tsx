import { Box, Text, HStack } from '@chakra-ui/react'
import { parseISO, format } from 'date-fns'
import { VFC } from 'react'

import { Tag, TagName, Spacer } from '@src/components'
import { colors } from '@src/styles/colors'

type Props = {
  tags: TagName[]
  title: string
  dateString: string
}

export const ArticleCard: VFC<Props> = props => {
  const date = parseISO(props.dateString)

  return (
    <Box bg={colors.secondaryGray} padding={4} borderRadius={5}>
      <Text variant="title">{props.title}</Text>
      <Spacer size={8} />
      <HStack spacing={2}>
        {props.tags.map((tagName, i) => (
          <Tag name={tagName} key={i} />
        ))}
      </HStack>
      <Spacer size={16} />
      <Text variant="subtext">{format(date, 'yyyy/MM/dd')}</Text>
    </Box>
  )
}
