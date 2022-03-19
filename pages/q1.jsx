export default function QuestionOne () {
    return (
        <div>
            <p>Let's make the computer read numbers</p>
        
            <form>               
                <label for="digits">First, how many digits are there? (Hint: count your fingers!)</label><br>
                <p></p>
                <input type="text" id="digits" name="digits"><br>
                <p></p>
                <input type="submit" value="Submit">    
            </form>
        </div>
    )
}
