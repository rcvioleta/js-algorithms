// O (n)
function twoSum(numArr, sum) {
    let pairs = []
    let hashTable = []

    for (let i = 0; i < numArr.length; i++) {
        let currentNum = numArr[i] 
        let counterPart = sum - currentNum 

        if (hashTable.indexOf(counterPart) !== -1) {
            pairs.push([currentNum, counterPart])
        }
        hashTable.push(currentNum) 
    }
    return pairs
} 

console.log(twoSum([1, 6, 4, 5, 3, 3], 7))