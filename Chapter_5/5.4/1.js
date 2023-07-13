const styles = ['Jazz', 'Bluez'];
styles.push('RnR');
const mid = Math.floor((styles.length - 1) / 2);
styles[mid] = 'Classic';
console.log(styles.shift());
styles.unshift('Rap', 'Raggae');

console.log(styles);

