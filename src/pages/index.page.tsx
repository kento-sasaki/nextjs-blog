import { Heading, Center } from '@chakra-ui/react'
import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Layout, siteTitle, ArticleCard, Spacer } from '@src/components'
import { getArticles, MetaData } from '@src/lib/articles'
import { colors } from '@src/styles/colors'

type Props = {
  articles: MetaData[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = await getArticles()

  return {
    props: {
      articles,
    },
  }
}

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Center>
          <Heading color={colors.white} fontSize="2xl" fontWeight={900}>
            Articles
          </Heading>
        </Center>
        <Spacer size={32} />
        {articles.map(({ id, date, title, tags }) => (
          <>
            <Link href={`/articles/${id}`} key={id} passHref>
              <a>
                <ArticleCard title={title} tags={tags} dateString={date} />
              </a>
            </Link>
            <Spacer size={12} />
          </>
        ))}
      </section>
    </Layout>
  )
}

export default Home
