function ArrayIndexAndLength() {
    let numberArray1 = [1, 2, 3, 4, 5];
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);
    return(
        <div>
            <h3>2.2.7.1 Array index and length</h3>
            length1 = {length1}<br />
            index1 = {index1}<br />
        </div>
    );
}
export default ArrayIndexAndLength;