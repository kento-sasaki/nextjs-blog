---
to: src/components/<%= h.changeCase.pascal(componentName) %>/<%= h.changeCase.pascal(componentName) %>.stories.tsx
---
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { <%= h.changeCase.pascal(componentName) %> } from './<%= h.changeCase.pascal(componentName) %>'

export default {
  title: 'Blog/<%= h.changeCase.pascal(componentName) %>',
  component: <%= h.changeCase.pascal(componentName) %>,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof <%= h.changeCase.pascal(componentName) %>>

const Template: ComponentStory<typeof <%= h.changeCase.pascal(componentName) %>> = args => <<%= h.changeCase.pascal(componentName) %> {...args} />

export const Primary = Template.bind({})
// Primary.args = {}
