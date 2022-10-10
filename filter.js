let filter = (items,findElementsGreaterOrEqualToFour) => {
    let result = false
    let foundedNumberArray =  [] 
    for (let num of items) {
        result = findElementsGreaterOrEqualToFour(num)
        //console.log(result)
        if (result) {
            foundedNumberArray.push(num)
        }
    }
    return foundedNumberArray
}

module.exports = filter