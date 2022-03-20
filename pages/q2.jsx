export default function QuestionTwo () {
    return (
        <div>
            <p>Our numbers need to be in boxes with the same size</p>
            <p>And We&apos;re going to use a 28x28 box for the numbers</p>

            <form> 
                {/* <!-- Asks the height and width of the draw box --> */}
                <label htmlFor="height">can you tell the computer how tall the box will be? </label><br/>
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
