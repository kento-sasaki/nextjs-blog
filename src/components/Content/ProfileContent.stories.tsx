import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProfileContent } from './ProfileContent'

import { Layout } from '@src/components'

export default {
  title: 'Blog/ProfileContent',
  component: ProfileContent,
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
} as ComponentMeta<typeof ProfileContent>

const Template: ComponentStory<typeof ProfileContent> = args => <ProfileContent {...args} />

const profile = {
  createdAt: '2022-05-05T12:25:33.157Z',
  markdown:
    '- I love TypeScript, React and Next.js\n' +
    '- I’m currently learning Ruby on Rails, GrpahQL, and Apollo.\n',
  // image: {
  //   metadata: { tags: [] },
  //   sys: {
  //     space: [Object],
  //     type: 'Asset',
  //     id: '1cMXEvSCOzzWE7Xf3doCcM',
  //     revision: 1,
  //     createdAt: '2022-05-05T12:25:49.983Z',
  //     updatedAt: '2022-05-05T12:26:20.799Z',
  //     environment: [Object],
  //     locale: 'en-US',
  //   },
  //   fields: { title: '98VCDEvN 400x400', description: '', file: [Object] },
  // },
}

export const Primary = Template.bind({})

Primary.args = { profile }
