const _ = require("lodash");
const strings = ['b', 'B','aa', 'Aa'];
console.log(_.groupBy(strings, 'toUpperCase')
