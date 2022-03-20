import Head from 'next/head'
import Link from 'next/link'
import Drawzone from '../lib/Drawzone'
import Body from '../src/components/Body'
import Header from '../src/components/Header'

export default function Home() {
	return (
		<>
			<Head>
				<title>HackGSU X Project</title>
				<meta name='description' content='Hackathon Project' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<link
					rel='stylesheet'
					href='https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css'
					// Integrating bootstrap
					integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO'
					crossOrigin='anonymous'
				></link>
			</Head>

			<Header></Header>
			<Body model={<Drawzone />}></Body>

			<Link href='/nextpage'>
				<a className='badge badge-primary'>To Next Page</a>
			</Link>
		</>
	)
}
