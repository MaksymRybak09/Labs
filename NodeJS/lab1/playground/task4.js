const lodash = require('lodash');

const arr = [1, 2, 3, 4]

console.log('chunk:', lodash.chunk(arr, 2));

console.log('capitalize:', lodash.capitalize('maksym'));

console.log('isBoolean:', lodash.isBoolean(false));
console.log('isBoolean:', lodash.isBoolean('str'));

console.log('isEqual:', lodash.isEqual(arr, [1, 2, 3, 4]));
console.log('isEqual:', lodash.isEqual(arr, [1, 2, 3]));

console.log('Shuffle:', lodash.shuffle(arr));