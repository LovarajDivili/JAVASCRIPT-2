let filter = require('./filter')
const items = [1,2,3,4,5,5]
function findElementsGreaterOrEqualToFour(number) {
    return number >= 4
}

const result = filter(items,findElementsGreaterOrEqualToFour)

console.log(result)