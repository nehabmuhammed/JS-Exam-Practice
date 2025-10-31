// Create a function isPrime(num) that returns true/false.

const isPrime = (num) => {   
    let isFlag = false
    for(let i =2;i<num;i++){
        if(num % i == 0){
            isFlag = true
        }
    }
    if(isFlag == false){
        return true
    }else{
        return false
    }
}

console.log(isPrime(4))