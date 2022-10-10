let reduce = (items,reducerFunction,startingValue) => {
    if (startingValue === 0) { 
        startingValue = items[0]
    }
    let numberAfterSum = 0
    for (let i = 1;i<items.length;i++) {
        num = items[i]
        //console.log(num)
        numberAfterSum = reducerFunction(startingValue,num)
        startingValue = numberAfterSum
    }
    return numberAfterSum
    

}

module.exports = reduce