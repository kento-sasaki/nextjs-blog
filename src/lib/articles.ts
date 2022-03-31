import { createClient } from 'contentful'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

import { TagName } from '@src/components'

export type MetaData = {
  id: string
  title: string
  date: string
  tags: TagName[]
}

export type Article = MetaData & { contentHtml: string }

const client = createClient({
  space: process.env.CF_SPACE_ID ?? '', // ID of a Compose-compatible space to be used \
  accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN ?? '', // delivery API key for the space \
})

export const getArticles = async () => {
  const { items } = await client.getEntries<{
    title: string
    body: string
  }>({ limit: 20 })

  return items.map(({ sys, fields, metadata }) => ({
    id: sys.id,
    title: fields.title,
    date: sys.createdAt,
    tags: metadata.tags.map(tag => tag.sys.id) as TagName[],
  }))
}

export const getArticleById = async (id: string) => {
  const { sys, fields, metadata } = await client.getEntry<{
    title: string
    body: string
  }>(id)

  const contents = fields.body

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(contents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    title: fields.title,
    date: sys.createdAt,
    tags: metadata.tags.map(tag => tag.sys.id) as TagName[],
    contentHtml,
  }
}

export const getAllArticleIds = async () => {
  return (await getArticles()).map(({ id }) => ({ params: { id } }))
}
