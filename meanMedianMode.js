function getMean(arr) {
    let mean = 0
    let arrLength = arr.length
    for (let i = 0; i < arrLength; i++) {
        mean += arr[i]
    }
    return mean / arrLength
}

function getMedian(arr) {
    arr.sort((a, b) => a - b)
    
    if(arr.length === 0) return 0
    let half = Math.floor(arr.length / 2);
    
    if (arr.length % 2) return arr[half];
    else return (arr[half - 1] + arr[half]) / 2.0;
}

function getMode(arr) {
    let myNumObj = {}
    arr.forEach(num => {
        if (!myNumObj[num]) myNumObj[num] = 0
        myNumObj[num]++ 
    })
    
    let maxFrequency = 0
    let mode = []

    for (let num in myNumObj) {
        if (myNumObj[num] > maxFrequency) {
            mode = [num]
            maxFrequency = myNumObj[num]
        }
        else if (myNumObj[num] === maxFrequency) mode.push(num)
    }

    if (mode.length === Object.keys(myNumObj).length) mode = []
    return mode
}

function meanMedianMode(arr) {
    return {
        mean: getMean(arr),
        median: getMedian(arr),
        mode: getMode(arr)
    }
}

console.log(meanMedianMode([9, 10, 23, 10, 23, 9, 23]))