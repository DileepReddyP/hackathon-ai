import Link from 'next/link'
import Header from '../src/components/Header'
import Setup from '../src/components/Setup'
import { ArrowRightIcon, ArrowLeftIcon } from '@primer/octicons-react'
import Body from '../src/components/Body'

export default function summary() {
	return (
		<>
			<Setup></Setup>
			<Header></Header>
			<Body
				body={
					<div className='container'>
						Really? A computer can now read handwriting?
						<div className='jumbotron py-3 text-left'>
							<ul className='list-group'>
								<li className='list-group-item'>
									Sure thing! And not just that, a computer use this method to
									recognize dance moves, songs, faces, behaviors and even
									summarize wikipedia articles!
								</li>
								<li className='list-group-item'>But it can’t…</li>
								<li className='list-group-item'>
									<ul>
										<li>Improve itself</li>
										<li>Do something other than what the math tells it to</li>
										<li>
											Suddenly gain free will like in I, Robot (Asimov, 1950)
										</li>
									</ul>
								</li>
							</ul>
						</div>
						<div className='jumbotron py-3 text-left'>
							<h3>Putting it all together...</h3>
							<ul className='list-group'>
								<li className='list-group-item'>
									So how can we use artificial intelligence to make our systems
									“smarter”?
								</li>
								<li className='list-group-item'>
									Your devices can all be linked together to create something
									called the “Internet of Things”, or IoT in short
								</li>
								<li className='list-group-item'>
									Existing devices will become connected to the internet like
									smartphones, smartcars, smartwatches, and smart TVs
								</li>
								<li className='list-group-item'>
									Just imagine in how many ways we could find rules for devices
									that improve your life!
								</li>
							</ul>
						</div>
					</div>
				}
			></Body>
			<div
				className='mx-auto link-container'
				style={{
					width: '20vw',
					display: 'flex',
					justifyContent: 'space-around',
					alignContent: 'center'
				}}
			>
				<Link href='/'>
					<a
						className='badge badge-primary mx-5 px-5 py-3'
						style={{ display: 'flex', flex: 1 }}
					>
						Explore the Drawing model
					</a>
				</Link>
				<Link href='/lecture'>
					<a
						className='badge badge-primary mx-5 px-5 py-3'
						style={{ display: 'flex', flex: 1 }}
					>
						Read the lecture again
					</a>
				</Link>
			</div>
		</>
	)
}
