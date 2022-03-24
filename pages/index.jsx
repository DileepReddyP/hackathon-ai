import Link from 'next/link'
import Setup from '../src/components/Setup'
import Header from '../src/components/Header'
import { ArrowRightIcon } from '@primer/octicons-react'
import { useState } from 'react'
import DrawzonePopulate from '../lib/Drawzone'

export default function Home() {
	const [modelObj, setModelObj] = useState('cat')

	return (
		<>
			<Setup></Setup>
			<Header></Header>
			<DrawzonePopulate></DrawzonePopulate>
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
					<a className='badge badge-primary float-right mx-5 px-5 py-3'>
						<ArrowRightIcon size={24}></ArrowRightIcon>
					</a>
				</Link>
			</div>
		</>
	)
}
