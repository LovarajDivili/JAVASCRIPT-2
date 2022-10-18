const flatten = require('./flatten')

const nestedArray = [1, [2], [[3]], [[[4]]]]

const resultOfFlatten = flatten(nestedArray)

console.log(resultOfFlatten)
