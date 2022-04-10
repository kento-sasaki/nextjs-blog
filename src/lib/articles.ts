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

const client = createClient({
  space: process.env.CF_SPACE_ID ?? '', // ID of a Compose-compatible space to be used \
  accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN ?? '', // delivery API key for the space \
})

export const getArticles = async (page = 1) => {
  const limit = 12

  //NOTE: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/reverse-order
  const { items } = await client.getEntries<IArticleFields>({
    limit,
    skip: (page - 1) * limit,
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
  return (await getArticles()).map(({ id }) => ({ params: { id } }))
}
