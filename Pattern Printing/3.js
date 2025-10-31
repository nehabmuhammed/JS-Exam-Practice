// 9 7 5 3
// 8 6 4 2
// 7 5 3 1
// 6 4 2 0

for(let row = 1;row<5;row++){
    let line = ""
    let counter = 10
    counter -= row
    for(let col = 1;col<5;col++){
        line += counter + " "
        counter -=2
    }
    console.log(line)
}