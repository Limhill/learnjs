const x = Number(prompt('Enter x:', ''));
const y = Number(prompt('Enter y:', ''));

if (isNaN(x) || isNaN(y)) {
    alert('Wrong symbols');
} else {
    alert(x + y);
}
