import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tag } from './Tag'

export default {
  title: 'Blog/Tag',
  component: Tag,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />

export const ReactTag = Template.bind({})
ReactTag.args = {
  name: 'react',
}
export const NextJsTag = Template.bind({})
NextJsTag.args = {
  name: 'nextjs',
}
export const ApolloTag = Template.bind({})
ApolloTag.args = {
  name: 'apollo',
}
export const GraphQLTag = Template.bind({})
GraphQLTag.args = {
  name: 'graphql',
}
export const TypeScriptTag = Template.bind({})
TypeScriptTag.args = {
  name: 'typescript',
}
