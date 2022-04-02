// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Document } from '@contentful/rich-text-types'
import { Asset, Entry } from 'contentful'

export interface IArticleFields {
  /** title */
  title?: string | undefined

  /** body */
  body?: string | undefined
}

export interface IArticle extends Entry<IArticleFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'article'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export type CONTENT_TYPE = 'article'

export type LOCALE_CODE = 'en-US' | 'ja'

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US'
