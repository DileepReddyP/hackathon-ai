import NumberClassify from '../lib/NumberClassify'
import Body from '../src/components/Body'
import Header from '../src/components/Header'
import Setup from '../src/components/Setup'
import Link from 'next/link'
import { ArrowLeftIcon, ArrowRightIcon } from '@primer/octicons-react'

export default function summary() {
	return (
		<>
			<Setup></Setup>
			<Header></Header>
			<Body model={<NumberClassify />}></Body>
			<div
				className='mx-auto link-container'
				style={{
					margin: '10px',
					width: '20vw',
					display: 'flex',
					justifyContent: 'space-around',
					alignContent: 'center'
				}}
			>
				<Link href='/lecture'>
					<a className='badge badge-primary float-left mx-5 px-5 py-3'>
						<ArrowLeftIcon size={24}></ArrowLeftIcon>
					</a>
				</Link>
				<Link href='/summary'>
					<a className='badge badge-primary float-right mx-5 px-5 py-3'>
						<ArrowRightIcon size={24}></ArrowRightIcon>
					</a>
				</Link>
			</div>
		</>
	)
}
