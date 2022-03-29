import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticleCard } from './ArticleCard'

export default {
  title: 'Blog/ArticleCard',
  component: ArticleCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleCard>

const Template: ComponentStory<typeof ArticleCard> = args => <ArticleCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Article title',
  tags: ['nextjs', 'react', 'typescript'],
  dateString: '2021-01-02',
}
