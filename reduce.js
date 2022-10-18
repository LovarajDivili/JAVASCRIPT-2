const reduce = (items,reducerFunction,startingValue) => {
    if (items.length !== 0) {
        let numberAfterSum = 0
        if (items.length === 1) {
            return items[0]
        } else if (startingValue === undefined) {
            startingValue = items[0]
            for (let i = 1;i<items.length;i++) {
                numberAfterSum = reducerFunction(startingValue,items[i])
                startingValue = numberAfterSum
            }
            return numberAfterSum
        } else if (items.length > 1) {
            for (let i = 0;i<items.length;i++) {
                numberAfterSum = reducerFunction(startingValue,items[i])
                startingValue = numberAfterSum
            }
            return numberAfterSum
        }
    } else {
        return "The array you passed as argument is empty"
    }
}

module.exports = reduce
