// Write a function to reverse a string



const reverse = (str) => {
    let strArray = str.split('')
    let reverseArray = strArray.reverse()
    console.log(reverseArray.join(''))
}
reverse("my name is nehab")