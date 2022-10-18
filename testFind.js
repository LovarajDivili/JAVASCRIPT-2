const find = require('./find')
const items = [1,2,3,4,5,5]

const findElementGreaterOrEqualToGivenNumber = (number,numberToSearchInTheItems = 5) => number >= numberToSearchInTheItems

const resultOfFind = find(items,findElementGreaterOrEqualToGivenNumber)

console.log(resultOfFind)
