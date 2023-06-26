function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = () => {
        const x = Number(prompt('Enter number', ''));
        this.value += x;
    }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений