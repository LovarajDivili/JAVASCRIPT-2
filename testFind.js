let find = require('./find')
const items = [1,2,3,4,5,5]
function findElementGreaterOrEqualToFour(number) {
    return number >= 4
}

const result = find(items,findElementGreaterOrEqualToFour)

console.log(result)