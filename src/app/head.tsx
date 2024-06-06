import Head from 'next/head'
import Link from 'next/link'
 
export const PageHead = () => {
  return (
    <Head>
      <title>Woofster</title>
      <meta property="og:title" content="My page title" key="title" />
    </Head>
  )
}
