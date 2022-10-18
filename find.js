const find = (items,findElementGreaterOrEqualToFour) => {
    if (items.length !== 0 ) {
        let isNumberFoundInItemsArray = false
    let foundedNumber = null
    for (let num of items) {
        isNumberFoundInItemsArray = findElementGreaterOrEqualToFour(num)
        if (isNumberFoundInItemsArray) {
            foundedNumber = num
            break
        } else {
            foundedNumber = undefined
        }
    }
    return foundedNumber
    } else {
        return 'The array you passed as an argument is empty'
    }

}

module.exports = find
