function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(randomFloat(1, 5))