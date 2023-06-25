function pow(x, n) {
    if (n < 1) {
        alert('n < 1 is not allowed!');
        return;
    }
    return x ** n;
}

const x = prompt('Enter x', '');
const n = prompt('Enter n', '')
alert(pow(x, n))