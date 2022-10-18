const reduce = require('./reduce')

const reducerFunction= (startingElement,secondElement) =>  startingElement + secondElement

const items = [1,2,3,4,5,5]

const resultOfReduce = reduce(items,reducerFunction)
console.log(resultOfReduce)
