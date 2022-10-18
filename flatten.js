const flatten = (nestedArray) => {
    if (nestedArray.length !== 0) {
        let newArrayAfterFlatten = []
        for (let i=0;i<nestedArray.length;i++){
            if (Array.isArray(nestedArray[i])) {
                newArrayAfterFlatten = newArrayAfterFlatten.concat(flatten(nestedArray[i]))
                //console.log(newArrayAfterFlatten)
            } else {
                newArrayAfterFlatten.push(nestedArray[i])
            }
        }
        return newArrayAfterFlatten
    } else {
        return "The array you passed as an argument is empty"
    }
}

module.exports = flatten
