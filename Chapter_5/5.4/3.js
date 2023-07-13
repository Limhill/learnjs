function sumInput() {
    const arr =  [];
    let value;
    while (true) {
        value = prompt('Enter the value', '');
        if (value === '' || isNaN(Number(value))) {
            break
        }
        arr.push(Number(value));
    }
    alert(arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0));
}

sumInput()