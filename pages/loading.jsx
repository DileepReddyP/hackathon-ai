import Link from 'next/link'
import Header from '../src/components/Header'
import Setup from '../src/components/Setup'
import Body from '../src/components/Body'
import { useState, useEffect } from 'react'
import Spinner from '../lib/spinner'
import confetti from 'canvas-confetti'

const Loading = () => (
	<div>
		<Setup></Setup>
		<Header></Header>
		<Body body={<LoadingFn />}></Body>
	</div>
)



function LoadingFn() {
    const [text, setText] = useState("Beginning model creation")
    const [next, setNext] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setText("Setting the layers...")
        }, 2000)
        setTimeout(()=>{
            setText("Loading the data...")
        }, 4000)
        setTimeout(()=>{
            setText("AI is reading data...")
        }, 7000)
        setTimeout(()=>{
            setText("Doing training...")
        }, 9000)
        setTimeout(()=>{
            setText("Doing testing...")
        }, 13000)
        setTimeout(()=>{
            setText("AI is almost ready...")
        }, 15000)
        setTimeout(()=>{
            setText("AI is ready!")
            setNext(true)
            confetti({
				particleCount: 100,
				spread: 70,
				origin: { y: 0.6 }
			})
        }, 16000)
    },[])
    return (
        <div>
            <h2>{text}</h2>
            {!next ? <Spinner/> : <Link href='/finalmodel'>
					<a>
						<button className='btn btn-primary l-2 mx-2' type='button'>
							Finally see the model?
						</button>
					</a>
				</Link>}
        </div>
    )
}

export default Loading