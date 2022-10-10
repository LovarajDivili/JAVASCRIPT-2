let reduce = require('./reduce')

function reducerFunction(startingElement,secondElement) {
    return startingElement + secondElement
}

const items = [1,2,3,4,5,5]
const result = reduce(items,reducerFunction,0)
console.log(result)