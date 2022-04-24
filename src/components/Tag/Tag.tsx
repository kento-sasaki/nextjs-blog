import { Tag as ChakraTag, TagLabel, Icon } from '@chakra-ui/react'
import { FC } from 'react'
import { SiGraphql, SiReact, SiApollographql, SiTypescript, SiNextdotjs } from 'react-icons/si'

import { colors } from '@src/styles/colors'

export type TagName = 'react' | 'apollo' | 'graphql' | 'typescript' | 'nextjs'

type Props = {
  name: TagName
}

const label: Record<TagName, string> = {
  apollo: 'Apollo',
  graphql: 'GraphQL',
  react: 'React',
  typescript: 'TypeScript',
  nextjs: 'Next.js',
}

export const Tag: FC<Props> = ({ name }) => {
  return (
    <ChakraTag size="md" colorScheme="primaryGray" borderRadius="full" variant="solid">
      {name === 'apollo' ? (
        <Icon as={SiApollographql} w={4} h={4} color={colors.apollo} display="block" mr={2} />
      ) : name === 'graphql' ? (
        <Icon as={SiGraphql} w={4} h={4} color={colors.graphql} display="block" mr={2} />
      ) : name === 'nextjs' ? (
        <Icon as={SiNextdotjs} w={4} h={4} color={colors.nextjs} display="block" mr={2} />
      ) : name === 'react' ? (
        <Icon as={SiReact} w={4} h={4} color={colors.react} display="block" mr={2} />
      ) : name === 'typescript' ? (
        <Icon as={SiTypescript} w={4} h={4} color={colors.typescript} display="block" mr={2} />
      ) : null}

      <TagLabel fontSize={14} fontWeight={700}>
        {label[name]}
      </TagLabel>
    </ChakraTag>
  )
}
