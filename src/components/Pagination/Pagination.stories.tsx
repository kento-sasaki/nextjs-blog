import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Pagination } from './Pagination'

export default {
  title: 'Blog/Pagination',
  component: Pagination,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = args => <Pagination {...args} />

export const Page1 = Template.bind({})
Page1.args = {
  currentPage: 1,
  totalPageCount: 5,
}

export const Page3 = Template.bind({})
Page3.args = {
  currentPage: 3,
  totalPageCount: 5,
}

export const LastPage = Template.bind({})
LastPage.args = {
  currentPage: 5,
  totalPageCount: 5,
}
