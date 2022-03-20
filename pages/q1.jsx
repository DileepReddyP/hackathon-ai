import Link from 'next/link'
import Header from '../src/components/Header'
import Setup from '../src/components/Setup'
import { ArrowLeftIcon } from '@primer/octicons-react'
import Body from '../src/components/Body'
import { useState } from 'react'
import confetti from 'canvas-confetti'

function QuestionOne() {
	const [value, setValue] = useState(null)
	const [correct, setCorrect] = useState(null)
	const checkCorrect = () => {
		if (parseInt(value) === 10) {
			console.log('here')
			setCorrect(true)
			confetti({
				particleCount: 100,
				spread: 70,
				origin: { y: 0.6 }
			})
		} else {
			setCorrect(false)
		}
	}
	return (
		<div>
			<h4>Let&apos;s make the computer read numbers</h4>
			<form>
				<label htmlFor='digits'>First, how many digits are there?</label>
				<br />
				<input
					value={value}
					onChange={(e) => setValue(e.target.value)}
					type='text'
					id='digits'
					name='digits'
				/>
				<br />
				<p></p>
			</form>
			<p>
				{correct === null ? (
					''
				) : correct ? (
					<h1>
						<span className='badge badge-success'>Correct</span>
					</h1>
				) : (
					<div>
						<h2>
							<span className='badge badge-danger'>Try again</span>
						</h2>
						<p>hint: count your fingers</p>
					</div>
				)}
			</p>
			<button
				className='btn btn-primary l-2 mx-2'
				type='button'
				onClick={checkCorrect}
			>
				Check my Answer!
			</button>
			{correct ? (
				<Link href='/q2'>
					<a>
						<button className='btn btn-primary l-2 mx-2' type='button'>
							Next Step!
						</button>
					</a>
				</Link>
			) : (
				''
			)}
		</div>
	)
}

const PageQ1 = () => (
	<div>
		<Setup></Setup>
		<Header></Header>
		<Body body={<QuestionOne />}></Body>
	</div>
)

export default PageQ1
