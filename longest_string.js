const str = "The quick brown fox jumped over the lazy dog"

function findLongestWordLength(str) {
    let strSplit = str.split(' ')
    
    let longestWord = strSplit.sort(function(a, b) {
        return b.length - a.length
    })

    return longestWord[0].length
}


function findLongest(str) {
    let strSplit = str.split(' ')
    let longestWord = 0

    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length
        }
    }

    return longestWord
}