let find = (items,findElementGreaterOrEqualToFour) => {
    let result = false
    let foundedNumber = null
    for (let num of items) {
        result = findElementGreaterOrEqualToFour(num)
        //console.log(result)
        if (result) {
            foundedNumber = num
            break
        } else {
            foundedNumber = undefined
        }
    }
    return foundedNumber
}

module.exports = find