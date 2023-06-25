function logSimpleNumberUpToTarget(target) {
    const simpleNumbers = [2, 3, 5, 7];
    if (target < 2) {
        console.log(target);
        return;
    }
    let n = 2;
    x: while (n < target) {
        if (simpleNumbers.includes(n)) {
            console.log(n);
            n += 1;
            continue;
        }
        for (let i = 0; i < simpleNumbers.length; i++) {
            if (!(n % simpleNumbers[i])) {
                n += 1;
                continue x;
            }
        }
        console.log(n);
        n += 1;
    }
}

logSimpleNumberUpToTarget(45)