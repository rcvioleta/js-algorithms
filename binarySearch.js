function binarySearch(numArr, value) {
    let middleIndex = Math.floor(numArr.length / 2)
    let middleElem = numArr[middleIndex]

    if (middleElem === value) return true
    else if (middleElem < value && numArr.length > 1) {
        return binarySearch(numArr.splice(middleIndex, numArr.length), value)
    }
    else if (middleElem > value && numArr.length > 1) {
        return binarySearch(numArr.splice(0, middleIndex), value)
    }
    else return false
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 5))