function multiplyNumeric(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] = obj[key] * 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
console.log(menu)

/*
Expected:

menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

*/