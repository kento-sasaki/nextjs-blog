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

export const React = Template.bind({})
React.args = {
  name: 'react',
}
export const NextJs = Template.bind({})
NextJs.args = {
  name: 'nextjs',
}
export const Apollo = Template.bind({})
Apollo.args = {
  name: 'apollo',
}
export const GraphQL = Template.bind({})
GraphQL.args = {
  name: 'graphql',
}
export const TypeScript = Template.bind({})
TypeScript.args = {
  name: 'typescript',
}
