// reverse method is prohibited 
// not allowed to use another array to store new array
// function reverseArrayInPlace(arr) {
//     for (let x = arr.length - 1; x >= 0; x--) {
//         let newArr = ''
//         newArr += arr[x]
//     }
//     return newArr.split('')
// }

function reverseArrayInPlace(arr) {
        for (let x = 0; x < arr.length / 2; x++) {
            let index = arr[x]
            arr[x] = arr[(arr.length - 1) - x] 
            arr[(arr.length - 1) - x] = index 
        }
        return arr
    }

let revArr = reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7])
console.log(revArr)