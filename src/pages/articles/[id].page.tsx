import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'

import { Layout } from '@src/components'
import { Date } from '@src/components/date'
import { getArticleById, getAllArticleIds, Article } from '@src/lib/articles'

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

const Post: NextPage<Props> = ({ article }) => {
  return (
    <Layout>
      <Head>
        <title>{article?.title ?? 'no title'}</title>
      </Head>
      <article>
        <h1>{article?.title ?? 'no title'}</h1>
        <div>
          <Date dateString={article?.date ?? ''} />
        </div>
        {article?.contentHtml && <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />}
      </article>
    </Layout>
  )
}

export default Post
