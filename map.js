let map = (items, addEachItemFunction) => {
    let newArray = []
    for (let num of items){
        let addedItemToNewArray = addEachItemFunction(num)
        newArray.push(addedItemToNewArray)
    }
    return newArray
}
module.exports = map