let mapFunction = require('./map')

const items = [1, 2, 3, 4, 5, 5];

function addEachItemUsingMap(number){
   return number * number
}

const newArray = mapFunction(items,addEachItemUsingMap)

console.log(newArray)
