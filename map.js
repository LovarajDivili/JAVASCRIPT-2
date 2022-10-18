const map = (items, addEachItemFunction) => {
    if (items.length !== 0) {
        const newArray = []
        for (let num of items){
            const addedItemToNewArray = addEachItemFunction(num)
            newArray.push(addedItemToNewArray)
        }
        return newArray
    } else {
        return `The array you passed as an argument is empty`
    }
}
module.exports = map
