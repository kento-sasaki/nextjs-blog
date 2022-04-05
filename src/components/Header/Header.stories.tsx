import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Header } from './Header'

import { siteTitle } from '@src/constants/text'

export default {
  title: 'Blog/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = args => <Header {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: siteTitle,
}
