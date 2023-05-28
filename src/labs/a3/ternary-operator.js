function TernaryOperator() {
    let loggedIn = true;
    return(
        <div>
            <h3>2.2.5.2 Ternary Conditional Operator</h3>
            <h3>Logged In</h3>
            { loggedIn ? <p>Welcome</p> : <p>Please login</p> }<br />
        </div>
    );
}
export default TernaryOperator;