let each = (items, addEachItemFunction) => {
    for (let i=0;i<items.length;i++){
        addEachItemFunction(items[i],i)
    }
}
module.exports = each