import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Footer } from './Footer'

export default {
  title: 'Blog/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />

export const Primary = Template.bind({})
