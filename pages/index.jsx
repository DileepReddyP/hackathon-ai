import Link from 'next/link'
import Drawzone from '../lib/Drawzone'
import Body from '../src/components/Body'
import Setup from '../src/components/Setup'
import Header from '../src/components/Header'
import { ArrowRightIcon } from '@primer/octicons-react'

export default function Home() {
	return (
		<>
			<Setup></Setup>
			<Header></Header>
			<Body model={<Drawzone />} body='Get to know'></Body>
			<Link href='/nextpage'>
				<a className='badge badge-primary float-right mx-2'>
					<ArrowRightIcon size={24}></ArrowRightIcon>
				</a>
			</Link>
		</>
	)
}
