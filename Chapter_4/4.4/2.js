let calculator = {
    x: null,
    y: null,

    read() {
        this.x = Number(prompt('Enter x', ''));
        this.y = Number(prompt('Enter xy', ''))
    },

    sum() {
      return this.x + this.y;
    },

    mul() {
        return this.x * this.y;
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());