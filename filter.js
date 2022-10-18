const filter = (items,findElementsGreaterOrEqualToFour) => {
    if (items.length !== 0) {
        let isNumberGreaterThanOrEqualToGivenNumber = false
        const foundedNumbersArray =  []
        for (let num of items) {
            isNumberGreaterThanOrEqualToGivenNumber = findElementsGreaterOrEqualToFour(num)
            if (isNumberGreaterThanOrEqualToGivenNumber) {
                foundedNumbersArray.push(num)
            }
        }
       return foundedNumbersArray
    } else {
        return 'The array you passed as an argument is empty'
    }
}

module.exports = filter
