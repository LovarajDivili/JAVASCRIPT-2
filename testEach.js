let each = require('./each')

const items = [1, 2, 3, 4, 5, 5];
let newArray = []

function addEachItem(number,index){
    let indexWithNum = (`Index-${index},${number}`)
    newArray.push(indexWithNum)
}

each(items,addEachItem)
console.log(newArray)