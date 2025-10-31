// Write a function that counts vowels in a given string.

const count = (str) => {
    let count = 0
    let searchVowels = str.split('')
    searchVowels.forEach((each) =>{
        if(each == "a" || each == "e" || each == "i" || each == "o"|| each == "u"){
            count++
        }
    })
    return count
}
console.log(count("aeiou"))