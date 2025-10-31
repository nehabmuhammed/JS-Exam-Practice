// 1 2 3 4
// 2 4 6 8
// 3 6 9 12
// 4 8 12 16

for(let row = 1;row<5;row++){
    let line  = ""
   
    for(let col = 1;col<5;col++){
        line += row * col + " "
        
    }
    console.log(line)
}