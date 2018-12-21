function caesarCipher(str, num) {
    num = num % 26
    let string = str.toLowerCase()
    let alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let newString = ''

    for (let i = 0; i < string.length; i++) {
        let currentLetter = string[i]
        
        if (currentLetter === ' ') {
            newString += currentLetter
            continue
        }

        let currentIndex = alphabetArr.indexOf(currentLetter)
        let newIndex = currentIndex + num 

        if (newIndex > 25) newIndex = newIndex - 26
        if (newIndex < 0) newIndex = 26 + newIndex
        if (str[i] === str[i].toUpperCase()) newString += alphabetArr[newIndex].toUpperCase()
        else newString += alphabetArr[newIndex]
    }
    return newString
}

console.log(caesarCipher('zoo Keeper', -5))