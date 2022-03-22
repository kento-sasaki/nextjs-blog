import { Tag as ChakraTag, TagLabel, Icon } from '@chakra-ui/react'
import { VFC } from 'react'
import { SiGraphql, SiReact, SiApollographql, SiTypescript, SiNextdotjs } from 'react-icons/si'

type Tag = 'react' | 'apollo' | 'graphql' | 'typescript' | 'nextjs'

type Props = {
  name: Tag
}

const label: Record<Tag, string> = {
  apollo: 'Apollo',
  graphql: 'GraphQL',
  react: 'React',
  typescript: 'TypeScript',
  nextjs: 'Next.js',
}

export const Tag: VFC<Props> = ({ name }) => {
  return (
    <ChakraTag size="lg" colorScheme="blue" borderRadius="full" variant="outline">
      {name === 'apollo' ? (
        <Icon as={SiApollographql} w={5} h={5} display="block" mr={2} />
      ) : name === 'graphql' ? (
        <Icon as={SiGraphql} w={5} h={5} display="block" mr={2} />
      ) : name === 'nextjs' ? (
        <Icon as={SiNextdotjs} w={5} h={5} display="block" mr={2} />
      ) : name === 'react' ? (
        <Icon as={SiReact} w={5} h={5} display="block" mr={2} />
      ) : name === 'typescript' ? (
        <Icon as={SiTypescript} w={5} h={5} display="block" mr={2} />
      ) : null}

      <TagLabel fontSize={16} fontWeight={800}>
        {label[name]}
      </TagLabel>
    </ChakraTag>
  )
}
