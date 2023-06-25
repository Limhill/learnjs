const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 1: {
        alert('Вы ввели число 1!');
        break;
    }
    case 2:
    case 3: {
        alert('Вы ввели число Chapter_2 или 3');
        break;
    }
}