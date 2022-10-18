const filter = require('./filter')
const items = [1,2,3,4,5,5]
const fiiterElementsGreaterOrEqualToGivenNumber = (number, givenNumberToFilter = 2) => number >= givenNumberToFilter

const resultOfFilter = filter(items,fiiterElementsGreaterOrEqualToGivenNumber)

console.log(resultOfFilter)
