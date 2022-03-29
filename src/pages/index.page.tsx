import { Heading, Center } from '@chakra-ui/react'
import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Layout, siteTitle, ArticleCard, Spacer } from '@src/components'
import { getSortedPostsData, MetaData } from '@src/lib/posts'
import { colors } from '@src/styles/colors'

type Props = {
  allPostsData: MetaData[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}

const Home: NextPage<Props> = ({ allPostsData }) => {
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
        {allPostsData.map(({ id, date, title, tags }) => (
          <>
            <Link href={`/posts/${id}`} key={id} passHref>
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
