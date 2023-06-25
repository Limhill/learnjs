let number = 0;

while (number <= 100) {
    let msg = prompt('Enter the number that is greater than 100');
    if (msg === null) {
        break;
    } else {
        number = Number(msg);
    }
}