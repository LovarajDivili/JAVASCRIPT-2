const mapFunction = require('./map')

const items = [1, 2, 3, 4, 5, 5];


const addEachItemUsingMap = (number) => number * number

const resultOfMap = mapFunction(items,addEachItemUsingMap)

console.log(resultOfMap)
