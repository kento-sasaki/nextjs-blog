import { Heading, Center } from '@chakra-ui/react'
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { Layout, ArticleCard, Spacer } from '@src/components'
import { siteTitle } from '@src/constants/text'
import { usePage } from '@src/hooks/usePage'
import { getAllPageCount, getArticles, MetaData } from '@src/lib/articles'

type Props = {
  articles: MetaData[]
  totalPageCount: number
}

type Params = {
  page: string
}

export const getStaticProps: GetStaticProps<Props, Params> = async context => {
  const articles = await getArticles(Number(context.params?.page ?? 1))
  const totalPageCount = await getAllPageCount()

  return {
    props: {
      articles,
      totalPageCount,
    },
  }
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const totalPageCount = await getAllPageCount()

  const paths = [...Array(totalPageCount)].map((_, i) => ({
    params: {
      page: `${i + 1}`,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

const Articles: NextPage<Props> = ({ articles, totalPageCount }) => {
  const { setCurrentPage, setTotalPageCount } = usePage()
  const router = useRouter()

  useEffect(() => {
    setTotalPageCount(totalPageCount)
    setCurrentPage(Number(router.query.page))
  }, [router.query.page, setCurrentPage, setTotalPageCount, totalPageCount])

  return (
    <Layout home havePages={totalPageCount > 1}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Center>
          <Heading variant="heading1">Articles</Heading>
        </Center>
        <Spacer size={32} />
        {articles.map(({ id, date, title, tags }) => (
          <React.Fragment key={id}>
            <Link href={`/articles/${id}`} passHref>
              <a>
                <ArticleCard title={title ?? 'No Title'} tags={tags} dateString={date} />
              </a>
            </Link>
            <Spacer size={12} />
          </React.Fragment>
        ))}
      </section>
    </Layout>
  )
}

export default Articles
