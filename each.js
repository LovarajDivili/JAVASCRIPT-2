const each = (items, addEachItemFunction) => {
    if (items.length !== 0) {
        let newItemsArrayWithIndex = null
        for (let index=0;index<items.length;index++){
            newItemsArrayWithIndex = addEachItemFunction(items[index],index)
        }
        return newItemsArrayWithIndex
    } else {
        return 'The array you passed as an argument is empty'
    }
}
module.exports = each
