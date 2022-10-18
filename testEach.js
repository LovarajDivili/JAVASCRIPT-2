const each = require('./each')

const items = [1, 2, 3, 4, 5, 5];

const newItemsWithIndex = []

const addEachItem = (number,index) => {
    newItemsWithIndex.push(`Index-${index},${number}`)
    return newItemsWithIndex
}

const resultOfEach = each(items,addEachItem)
console.log(resultOfEach)
