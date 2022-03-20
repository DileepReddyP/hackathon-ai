import Link from 'next/link'
import Header from '../src/components/Header'
import Setup from '../src/components/Setup'
import { ArrowRightIcon, ArrowLeftIcon } from '@primer/octicons-react'
import Body from '../src/components/Body'

const NextPage = () => (
	<div>
		<Setup></Setup>
		<Header></Header>
		<Body body={<h1>Hello World</h1>}></Body>
		<Link href='/'>
			<a className='badge badge-primary float-left mx-5 px-5 py-3'>
				<ArrowLeftIcon size={24}></ArrowLeftIcon>
			</a>
		</Link>
		<Link href='/q1'>
			<a className='badge badge-primary float-right mx-5 px-5 py-3'>
				<ArrowRightIcon size={24}></ArrowRightIcon>
			</a>
		</Link>
	</div>
)
export default NextPage
