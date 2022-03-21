import { Heading } from '@chakra-ui/react'
import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Layout, siteTitle } from '@src/components'
import { Date } from '@src/components/date'
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
        <Heading color={colors.black}>Blog</Heading>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Home
