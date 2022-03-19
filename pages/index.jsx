import Head from 'next/head'
import Link from 'next/link';
import Drawzone from '../lib/Drawzone';

export default function Home() {
  return (
    <>
    <Head>
      <title>HackGSU X Project</title>
      <meta name="description" content="Hackathon Project" />
    </Head>
    <h1>Hello World</h1>
    <Link href="/nextpage"><a>To Next Page</a></Link>
    <Drawzone/>
    </>
  )
}
