import type { NextPage } from 'next';
import Script from 'next/script';
import Head from 'next/head';
import Link from 'next/link';

const FirstPost: NextPage = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      {/* <Script
        src='https://connect.facebook.net/en_US/sdk.js'
        strategy='lazyOnload'
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      <h1>First Post</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};

export default FirstPost;
