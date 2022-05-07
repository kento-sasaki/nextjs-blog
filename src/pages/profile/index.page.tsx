import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'

import { Layout, ProfileContent } from '@src/components'
import { siteTitle } from '@src/constants/text'
import { Profile, getProfile } from '@src/lib/fetchContent'

type Props = {
  profile: Profile | undefined
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const profile = await getProfile()

  return {
    props: {
      profile,
    },
  }
}

const Profile: NextPage<Props> = ({ profile }) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Profile</title>
      </Head>
      {profile && <ProfileContent profile={profile} />}
    </Layout>
  )
}

export default Profile
