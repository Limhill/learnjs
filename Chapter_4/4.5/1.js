function Calculator() {
    this.read = function () {
        this.x = prompt('Enter x', '');
        this.y = prompt('Enter y', '');
    }

    this.sum = () => Number(this.x) + Number(this.y);

    this.mul = () => this.x * this.y;
}


let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

new Error()