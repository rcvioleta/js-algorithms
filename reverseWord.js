// function reverseWords(str) {
//     return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
// }

// function reverseWords(str) {
//     let string = str.split(' ')
//     let newWords = []
//     string.forEach(word => {
//         newWords.push(word.split('').reverse().join(''))
//     })
//     return newWords.join(' ')
// }

function reverseWords(str) {
    let wordsArr = str.split(' ')
    let reverseWordsArr = []
    
    wordsArr.forEach(word => {
        let reverseWord = ''
        for (let x = word.length - 1; x >= 0; x--) {
            reverseWord += word[x]
        }
        reverseWordsArr.push(reverseWord)
    })
    return reverseWordsArr.join(' ')
}

let revWords = reverseWords('this is a string of words')
console.log(revWords)