function IfElse() {
    console.log('If else');
    let true1 = true;
    let false1 = false;
    
    if(true1) {
        console.log('true1');
    }

    if(!false1) {
        console.log('!false1');
    } else {
        console.log('false1');
    }
    
    return(
        <div>
            <br />
            <h2>2.2.5 Conditionals</h2>
            <h3>2.2.5.1 If Else</h3>
            { true1 && <p>true1</p> }
            { !false1 ? <p>!false1</p> : <p>false1</p> }
        </div>
    ); 
}
export default IfElse;

