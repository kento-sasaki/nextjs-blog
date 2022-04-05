import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticleContent } from './ArticleContent'

import { Layout, TagName } from '@src/components'

export default {
  title: 'Blog/ArticleContent',
  component: ArticleContent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    Story => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof ArticleContent>

const Template: ComponentStory<typeof ArticleContent> = args => <ArticleContent {...args} />

const article = {
  id: 'nn8w4kI1UNjj4i7Y9BpJF',
  title: 'Chakra UI + Storybook',
  date: '2022-04-03T13:45:10.439Z',
  tags: ['react'] as TagName[],
  markdown:
    `# Heading1\n` +
    `この定理に関して、私は真に驚くべき証明を見つけたが、この余白はそれを書くには狭すぎる。\n` +
    `## Heading2\n` +
    `この定理に関して、私は真に驚くべき証明を見つけたが、この余白はそれを書くには狭すぎる。\n` +
    `### Heading3\n` +
    `この定理に関して、私は真に驚くべき証明を見つけたが、この余白はそれを書くには狭すぎる。\n` +
    `#### Heading4\n` +
    `この定理に関して、私は真に驚くべき証明を見つけたが、この余白はそれを書くには狭すぎる。\n` +
    `- list\n` +
    `- list\n` +
    `  - nested list\n` +
    `1. ordered list\n` +
    `2. ordered list\n` +
    `3. ordered list\n` +
    `\n` +
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n` +
    `この定理に関して、私は真に驚くべき証明を見つけたが、この余白はそれを書くには狭すぎる。\n` +
    `\n` +
    '`git pull`\n' +
    '```ts\n' +
    'module.exports = {\n' +
    "  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],\n" +
    "  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],\n" +
    '    // Return the altered config\n' +
    '    return config;\n' +
    '  },\n' +
    '};\n' +
    '```\n' +
    'どちらは場合はなはだそんな所有者という点の他をしうます。単に将来に説明式もきっとその譴責なたいまでが及ぼすば行っましがも観念行っらしくまして、あいにくにもありなでしうです。学校によっまし訳もむくむく先刻へはなはだでしょならです。いよいよネルソンさんが見当支再び意味を云わなけれ個人こうした権力あなたか使用がに対するご相違うなだっまいから、その時間は私か町内絵に思わが、嘉納さんののを人間の私に実にお誤認とたべとそれ途を同使用で勧めようにどうにかご［＃「が行っないですば、できるだけひょろひょろ標榜を繰り返したばくれでのをなっでします。',
}

export const Primary = Template.bind({})
Primary.args = { article }

export const NoContent = Template.bind({})
NoContent.args = { article: { ...article, title: 'No title', markdown: undefined } }
