let flatten = require('./flatten')

let nestedArray = [1, [2], [[3]], [[[4]]]]

const result = flatten(nestedArray)

console.log(result)