import { Tag as ChakraTag, TagLabel, Icon } from '@chakra-ui/react'
import { VFC } from 'react'
import { SiGraphql, SiReact, SiApollographql, SiTypescript, SiNextdotjs } from 'react-icons/si'

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

export const Tag: VFC<Props> = ({ name }) => {
  return (
    <ChakraTag size="md" colorScheme="teal" borderRadius="full" variant="outline">
      {name === 'apollo' ? (
        <Icon as={SiApollographql} w={4} h={4} display="block" mr={2} />
      ) : name === 'graphql' ? (
        <Icon as={SiGraphql} w={4} h={4} display="block" mr={2} />
      ) : name === 'nextjs' ? (
        <Icon as={SiNextdotjs} w={4} h={4} display="block" mr={2} />
      ) : name === 'react' ? (
        <Icon as={SiReact} w={4} h={4} display="block" mr={2} />
      ) : name === 'typescript' ? (
        <Icon as={SiTypescript} w={4} h={4} display="block" mr={2} />
      ) : null}

      <TagLabel fontSize={14} fontWeight={700}>
        {label[name]}
      </TagLabel>
    </ChakraTag>
  )
}
