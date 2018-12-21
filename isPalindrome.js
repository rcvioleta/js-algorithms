// function isPalindrome(string) {
//     let stringText = string.toLowerCase()
//     let charactersArr = stringText.split('')
//     let validCharacters = 'abcdefghijklmnopqrstuvwxzy'.split('')
//     let lettersArr = []

//     charactersArr.forEach(char => {
//         if (validCharacters.indexOf(char) > -1) lettersArr.push(char)
//     })

//     if (lettersArr.join('') === lettersArr.reverse().join('')) return true
//     else return false
// }

// console.log(isPalindrome('race car'))

function isPalindrome(string) {
    let stringText = string.toLowerCase()
    let replaceChar = stringText.replace(/'|!|,|-| /g, '')
    let char = replaceChar.split('')

    if (char.join('') === char.reverse().join('')) return true
    else return false
}

console.log(isPalindrome('race car'))