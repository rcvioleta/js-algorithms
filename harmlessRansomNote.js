function harmlessRansomNote(noteText, magazineText) {
    const noteArr = noteText.split(' ')
    const magazineArr = magazineText.split(' ')
    let magazineObj = {}
    let noteIsPossible = true
    
    magazineArr.forEach(word => {
        if (!magazineObj[word]) magazineObj[word] = 0 
        magazineObj[word]++
    })
    
    noteArr.forEach(word => {
        if (magazineObj[word]) {
            magazineObj[word]--
            if (magazineObj[word] < 0) noteIsPossible = false
        }
        else noteIsPossible = false
    })
    return noteIsPossible
}

console.log(harmlessRansomNote('three four five and three', 'the three has five branches, four twigs and three roots'))