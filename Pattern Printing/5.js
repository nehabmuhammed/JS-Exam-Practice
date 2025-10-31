// 1 4 9 16
// 4 9 16 25
// 9 16 25 36
// 16 25 36 49

for(let row = 1;row<5;row++){
    let line = ""
   for(let col =1;col<5;col++){
    line += (row + col -1) **2 + " "
   }
   console.log(line)

}