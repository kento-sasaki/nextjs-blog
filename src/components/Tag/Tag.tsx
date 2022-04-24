import { Tag as ChakraTag, TagLabel, Icon } from '@chakra-ui/react'
import { FC } from 'react'
import {
  SiGraphql,
  SiReact,
  SiApollographql,
  SiTypescript,
  SiNextdotjs,
  SiStorybook,
  SiChakraui,
} from 'react-icons/si'

import { colors } from '@src/styles/colors'

export type TagName =
  | 'react'
  | 'apollo'
  | 'graphql'
  | 'typescript'
  | 'nextjs'
  | 'storybook'
  | 'chakra'

type Props = {
  name: TagName
}

const label: Record<TagName, string> = {
  apollo: 'Apollo',
  graphql: 'GraphQL',
  react: 'React',
  typescript: 'TypeScript',
  nextjs: 'Next.js',
  storybook: 'Stroybook',
  chakra: 'Chakura UI',
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
      ) : name === 'storybook' ? (
        <Icon as={SiStorybook} w={4} h={4} color={colors.storybook} display="block" mr={2} />
      ) : name === 'chakra' ? (
        <Icon as={SiChakraui} w={4} h={4} color={colors.chakra} display="block" mr={2} />
      ) : null}

      <TagLabel fontSize={14} fontWeight={700}>
        {label[name]}
      </TagLabel>
    </ChakraTag>
  )
}
