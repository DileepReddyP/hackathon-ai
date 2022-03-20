function QuestionTwo () {
    return (
        <div>
            <p>Our numbers need to be in boxes with the same size,</p>
            <p>and We&apos;re going to use a 28 x 28 box for the numbers</p>

            <form> 
                {/* <!-- Asks the height and width of the draw box --> */}
                <label htmlFor="height">Can you tell the computer how tall the box will be? </label><br/>
                <p></p>
                <input type="text" id="height" name="height"/><br/>
                <p></p>
                <label htmlFor="width">Then can you tell the computer how wide the box will be? </label><br/>
                <p></p>
                <input type="text" id="width" name="width"/><br/>

                <input type="submit" value="Submit"/>    
            </form>
        </div>
    )
}


import Link from 'next/link'
import Header from '../src/components/Header'
import Setup from '../src/components/Setup'
import { ArrowLeftIcon } from '@primer/octicons-react'
import Body from '../src/components/Body'
import { useState } from 'react'
import confetti from 'canvas-confetti'

function QuestionOne() {
    const [value, setValue] = useState(null);
    const [correct, setCorrect] = useState(null);
    const checkCorrect = () => {
        console.log(value)
        if (value === 10) {
            console.log("here")
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
            <p>Let&apos;s make the computer read numbers</p>
            <form>
                <label htmlFor="digits">First, how many digits are there? (Hint: count your fingers!)</label><br />
                <p>{correct === null ? '' : correct ? <h1>Correct</h1> : <h1>{"Wrong :("}</h1>}</p>
                <input value={value} onChange={(e) => setValue(parseInt(e.target.value))} type="text" id="digits" name="digits" /><br />
                <p></p>
            </form>
            <button type='button' onClick={checkCorrect}>Check my Answer!</button>
            {correct ?
                <Link href='/q2'>
                    <a>
                        <button type='button'>See the AI in action!</button>
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
