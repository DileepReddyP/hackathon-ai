import NumberClassify from '../lib/NumberClassify'
import Body from '../src/components/Body'
import Header from '../src/components/Header'
import Setup from '../src/components/Setup'
import Link from 'next/link'
import { ArrowLeftIcon, ArrowRightIcon } from '@primer/octicons-react'

export default function LastPage() {
	return (
		<>
			<Setup></Setup>
			<Header></Header>
			<Body model={<NumberClassify />}></Body>
			<Link href='/nextpage'>
				<a className='badge badge-primary float-left mx-5 px-5 py-3'>
					<ArrowLeftIcon size={24}></ArrowLeftIcon>
				</a>
			</Link>
			<Link href='/lastpage'>
			<a className='badge badge-primary float-right mx-5 px-5 py-3'>
				<ArrowRightIcon size={24}></ArrowRightIcon>
			</a>
			</Link>
		</>
	)
}
