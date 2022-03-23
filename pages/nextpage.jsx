import Link from 'next/link'
import Header from '../src/components/Header'
import Setup from '../src/components/Setup'
import { ArrowRightIcon, ArrowLeftIcon } from '@primer/octicons-react'
import Body from '../src/components/Body'
import Image from 'next/image'
import aidefi from '../assets/img/What-is-artificial-intelligence.png'
import number9 from '../assets/img/9.png'

const NextPage = () => (
	<div>
		<Setup></Setup>
		<Header></Header>
		<Body
			body={
				<div className='container'>
					<h2>
						The Artificial Intellience (AI) model is trying to finish the
						drawing based on what you left off. Isn&apos;t it amazing?
					</h2>
					<div className='jumbotron py-3'>
						<h3>What is Intellience</h3>
						<Image src={aidefi} alt='AIdefinition' />
					</div>
					However...
					<div className='jumbotron py-3 text-left'>
						<h3>AI is not something that gives free will to machines</h3>
						<ul className='list-group'>
							<li className='list-group-item'>
								Artificial intelligence is fundamentally{' '}
								<strong>a mathematical operation!</strong> If you feed it the
								same data, it will give you the same solution every time.
							</li>
							<li className='list-group-item'>
								Artificial intelligence is also <strong>not</strong> a magic
								solution to any problem. For example, artificial intelligence
								can’t grade your essay (yet).
							</li>
						</ul>
					</div>
					So <strong>what</strong> is AI?
					<div className='jumbotron py-3 text-left'>
						<ul className='list-group'>
							<li className='list-group-item'>
								Artificial intelligence is a way to train a computer to do
								certain things <strong>without supervision</strong>
							</li>
							<li className='list-group-item'>
								In normal programming, we use rules to give us answers
							</li>
							<li className='list-group-item'>
								In artificial intelligence, we use answers to give us rules!
							</li>
							<li className='list-group-item active'>
								This is like when your parents give you advice. You remember
								each thing they tell you.
							</li>
						</ul>
					</div>
					<div className='jumbotron py-3 text-left'>
						<ul className='list-group'>
							<li className='list-group-item'>
								After getting lots of advice, we make the rules based on these
								answers to problems
							</li>
							<li className='list-group-item'>
								Someone that doesn’t know the rules guesses their own rules, and
								these result in answers in life situations that can be good or
								bad
							</li>
							<li className='list-group-item'>
								Would you prefer rules based around answers you know will be
								good or rules based on answers you don’t know yet?
							</li>
							<li className='list-group-item active'>
								This is why we need artificial intelligence. It’s like advice to
								computers!
							</li>
						</ul>
					</div>
					Ok that’s cool and all, but do you wonder <strong>how</strong> it
					works?
					<div className='jumbotron py-3 text-left'>
						<ul className='list-group'>
							<li className='list-group-item'>
								The computer looks at something called training data. This data
								can be faces, song snippets, handwritten alphabetical/ numerical
								characters, or videos of behaviors.
							</li>
							<li className='list-group-item'>
								Each piece of data has a <strong>label</strong> to it. Every
								face has a name, every lyric has a song, every visual behavior
								has a word for it, every handwritten letter has a correct
								recognition
							</li>
							<li className='list-group-item'>
								After thousands of pieces of data like this, the computer can
								use math to understand what parts of each data piece is
								important and what it indicates
							</li>
						</ul>
					</div>
					<div className='jumbotron py-3'>
						<h3>The number 9</h3>
						<Image src={number9} alt='The 9 digit' />
					</div>
					<div className='jumbotron py-3 text-left'>
						<h3>For example... let's say we're trying to recognize a handwritten number.</h3>
						<ul className='list-group'>
							<li className='list-group-item'>
								The number 9 has a circle and a vertical line in it.
							</li>
							<li className='list-group-item'>
								Lots of numbers have circles and lines, like 0, 8, 1, 4, and 6
							</li>
							<li className='list-group-item active'>
							After seeing thousands of 9’s and doing lots of “guess and check” 
							repetitively really fast according to a formula with all the numbers, 
							the computer eventually learns that a 9 has a vertical line and a 
							circle touching the line in the upper part on the left side!
							</li>
						</ul>
					</div>
					<div className='jumbotron py-3 text-left'>
						<h3>Wow! Now computers can read handwritten numbers!</h3>
						<ul className='list-group'>
							<li className='list-group-item'>
								We can take this idea and apply it to video and sound too! Every 
								lyric, every melody, every pixel has something to say to the computer!
							</li>
							<li className='list-group-item'>
								We can teach a computer to recognize anything if we have enough 
								training data for it!
							</li>
							<li className='list-group-item'>
								It all comes down to learning the 'rules' of how to recognize the 
								things we're interested in.
							</li>
						</ul>
					</div>
					BUT WAIT! What is this “guess and check” formula? How does it work?
					<div className='jumbotron py-3 text-left'>
						<ul className='list-group'>
							<li className='list-group-item'>
								That’s a question you’ll get to answer in college. It’s a little too advanced for you!
							</li>
							<li className='list-group-item'>
								But if you think you can take a crack at understanding it, start learning 
								a subject of math called <strong>linear algebra</strong>
							</li>
						</ul>
					</div>
				</div>
			}
		></Body>
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
