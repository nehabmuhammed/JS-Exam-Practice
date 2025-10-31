// # * # * #
// * # * # *
// # * # * #
// * # * # *
// # * # * #


for(let row = 1;row<=5;row++){
    let line = ""
    for(let col = 1;col<=5;col++){
        if((row+col) % 2 == 0){
            line+="#"
        }else{
            line+="*"
        }
    }
    console.log(line)
}