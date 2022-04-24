import { Box, Text } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React, { FC } from 'react'

import { Layout } from './Layout'

import { colors } from '@src/styles/colors'

export default {
  title: 'Blog/Layout',
  component: Layout,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Layout>

const Children: FC = () => (
  <Box borderColor={colors.white} borderWidth={1} textAlign="center" paddingY={12}>
    <Text fontSize={32} fontWeight={700} color={colors.white}>
      content
    </Text>
  </Box>
)

const Template: ComponentStory<typeof Layout> = args => (
  <Layout {...args}>
    <Children />
  </Layout>
)

export const Home = Template.bind({})
Home.args = {
  home: true,
}

export const NotHome = Template.bind({})
NotHome.args = {
  home: false,
}
