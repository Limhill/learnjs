(function repetitiveAskNumber() {
    do {
        let x = prompt('Enter number:', '');
        if (x.trim() === '') {
            alert(null);
            return;
        }
    } while (isNaN(x))
    alert(x);
})()