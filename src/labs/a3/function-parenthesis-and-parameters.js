function ParenthesisAndParameters() {
    const square = a => {
        return a * a;
    }
    const plusOne = a => {
        return a + 1;
    }
    return (
        <div>
            <h3>2.2.6.4 Parenthesis and parameters</h3>
            twoSquared = {square(2)}<br />
            square(2) ={square(2)}<br />
            threePlusOne = {plusOne(3)}<br />
            plusOne(3) = {plusOne(3)}<br /><br />
        </div>
    );
    
}
export default ParenthesisAndParameters;