import { Layout } from '../../components/layout';
import Head from 'next/head';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { getAllPostIds, getPostData, PostData } from '../../lib/posts';
import { Date } from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

type Props = {
  postData: PostData | undefined;
};

type Params = {
  id: string;
};

// getStataicProps which fetches necessary data for the post with id
export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  if (!params?.id) return { props: { postData: undefined } };

  const postData = await getPostData(params?.id ?? '');

  return {
    props: {
      postData,
    },
  };
};

// getStaticPaths which return an array of possible values for id
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

const Post: NextPage<Props> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData?.title ?? 'no title'}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>
          {postData?.title ?? 'no title'}
        </h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData?.date ?? ''} />
        </div>
        {postData?.contentHtml && (
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        )}
      </article>
    </Layout>
  );
};

export default Post;
