// Find the largest and smallest numbers in an array.

let arr = [12,3,4,5,33,2]

let greatest = arr.reduce((acc,curr) => acc>curr?acc:curr)
console.log(greatest)
let smallest = arr.reduce((acc,curr) => acc<curr?acc:curr)
console.log(smallest)