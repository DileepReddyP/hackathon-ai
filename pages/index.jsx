import Link from 'next/link'
import Drawzone from '../lib/Drawzone'
import Body from '../src/components/Body'
import Setup from '../src/components/Setup'
import Header from '../src/components/Header'
import { ArrowRightIcon } from '@primer/octicons-react'
import { useState } from 'react'
import models from '../lib/models'
import DrawzonePopulate from '../lib/Drawzone'

export default function Home() {
	const [modelObj, setModelObj] = useState('cat')

	return (
		<>
			<Setup></Setup>
			<Header></Header>
			<DrawzonePopulate></DrawzonePopulate>
			<Link href='/nextpage'>
				<a className='badge badge-primary float-right mx-5 px-5 py-3'>
					<ArrowRightIcon size={24}></ArrowRightIcon>
				</a>
			</Link>
		</>
	)
}
