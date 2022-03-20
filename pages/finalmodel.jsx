import NumberClassify from '../lib/NumberClassify'
import Body from '../src/components/Body'
import Header from '../src/components/Header'
import Setup from '../src/components/Setup'
import Link from 'next/link'
import { ArrowLeftIcon } from '@primer/octicons-react'

export default function LastPage() {
	return (
		<>
			<Setup></Setup>
			<Header></Header>
			<Body model={<NumberClassify />}></Body>
			<Link href='/nextpage'>
				<a className='badge badge-primary float-left ml-3 sticky-bottom'>
					<ArrowLeftIcon size={24}></ArrowLeftIcon>
				</a>
			</Link>
		</>
	)
}
