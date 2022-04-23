import { createClient } from 'contentful'

import { TagName } from '@src/components'
import { IArticleFields } from '@src/types/generated/contentful'

export type MetaData = {
  id: string
  title?: string
  date: string
  tags: TagName[]
}

export type Article = MetaData & { markdown?: string }

const prodConfig = {
  space: process.env.CF_SPACE_ID!,
  accessToken: process.env.CF_ACCESS_TOKEN!,
}

const devConfig = {
  ...prodConfig,
  // NOTE: preview の API を叩く場合は host を preview.contentful.com にする必要がある
  //       https://www.contentful.com/developers/docs/references/content-preview-api/
  host: 'preview.contentful.com',
}

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

console.log('============================= CONFIG =============================')
console.log(config)
const client = createClient(config)

const articlesPerPage = 12

export const getArticles = async (page = 1) => {
  //NOTE: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/reverse-order
  const { items } = await client.getEntries<IArticleFields>({
    limit: articlesPerPage,
    skip: (page - 1) * articlesPerPage,
    order: '-sys.createdAt',
  })

  return items.map(({ sys, fields, metadata }) => ({
    id: sys.id,
    title: fields.title,
    date: sys.createdAt,
    tags: metadata.tags.map(tag => tag.sys.id) as TagName[],
  }))
}

export const getArticleById = async (id: string) => {
  const { sys, fields, metadata } = await client.getEntry<IArticleFields>(id)

  const markdown = fields.body

  return {
    id,
    title: fields.title,
    date: sys.createdAt,
    tags: metadata.tags.map(tag => tag.sys.id) as TagName[],
    markdown,
  }
}

export const getAllArticleIds = async () => {
  const { items } = await client.getEntries<IArticleFields>()

  return items.map(({ sys: { id } }) => ({ params: { id } }))
}

export const getAllPageCount = async () => {
  const { items } = await client.getEntries<IArticleFields>()

  return Math.ceil(items.length / articlesPerPage)
}
