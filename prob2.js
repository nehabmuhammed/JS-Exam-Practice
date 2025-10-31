// Accept a name and age; print “eligible to vote” if age ≥ 18.

const prompt = require('prompt-sync')();

let name = prompt("Eneter the name")
let age = prompt("Eneter the age")

if(age>=18){
    console.log(name,"Eligible")
}else{
    console.log(name,"Not eligible")
}