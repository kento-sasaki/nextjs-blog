import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'

import { Layout, ArticleContent } from '@src/components'
import { siteTitle } from '@src/constants/text'
import { getArticleById, getAllArticleIds, Article } from '@src/lib/fetchContent'

type Props = {
  article: Article | undefined
}

type Params = {
  id: string
}

// getStataicProps which fetches necessary data for the post with id
export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  if (!params?.id) return { props: { article: undefined } }

  const article = await getArticleById(params?.id ?? '')

  return {
    props: {
      article,
    },
  }
}

// getStaticPaths which return an array of possible values for id
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = await getAllArticleIds()

  return {
    paths,
    fallback: false,
  }
}

const Article: NextPage<Props> = ({ article }) => {
  return (
    <Layout>
      <Head>
        <title>
          {siteTitle} | {article?.title ?? 'no title'}
        </title>
      </Head>
      {article && <ArticleContent article={article} />}
    </Layout>
  )
}

export default Article
