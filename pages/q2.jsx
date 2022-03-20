import Link from 'next/link'
import Header from '../src/components/Header'
import Setup from '../src/components/Setup'
import { ArrowLeftIcon } from '@primer/octicons-react'
import Body from '../src/components/Body'
import { useState } from 'react'
import confetti from 'canvas-confetti'

function QuestionTwo() {
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const [correct, setCorrect] = useState(null);
    const checkCorrect = () => {
        if (parseInt(height) === 28 && parseInt(width) === 28) {
            setCorrect(true);
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        } else {
            setCorrect(false);
        }
    }
    return (
        <div>
            <p>Our numbers need to be in boxes with the same size,</p>
            <p>and We&apos;re going to use a 28 x 28 box for the numbers</p>

            <form>
                {/* <!-- Asks the height and width of the draw box --> */}
                <label htmlFor="height">Can you tell the computer how tall the box will be? </label><br />
                <p></p>
                <input value={height} onChange={(e) => setHeight(e.target.value)} type="text" id="height" name="height" /><br />
                <p></p>
                <label htmlFor="width">Then can you tell the computer how wide the box will be? </label><br />
                <p></p>
                <input value={width} onChange={(e) => setWidth(e.target.value)} type="text" id="width" name="width" /><br />
            </form>
            <p>{correct === null ? '' : correct ? <h1>Correct</h1> : <h1>{"Wrong :("}</h1>}</p>
            <button type='button' onClick={checkCorrect}>Check my Answer!</button>
            {correct ?
                <Link href='/loading'>
                    <a>
                        <button type='button'>See the Model!</button>
                    </a>
                </Link>
                : ''}
        </div>
    )
}

const PageQ2 = () => (
    <div>
        <Setup></Setup>
        <Header></Header>
        <Body body={<QuestionTwo />}></Body>
        <Link href='/q1'>
            <a className='badge badge-primary float-left ml-3 position-fixed'>
                <ArrowLeftIcon size={24}></ArrowLeftIcon>
            </a>
        </Link>
    </div>
)

export default PageQ2
