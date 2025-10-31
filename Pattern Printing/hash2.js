// *
// # #
// * * *
// # # # #
// * * * * *

for(let row = 1;row<=5;row++){
    let line = ""
    for(let col=1;col<=row;col++){
        if(row%2==0){
            line+="#"
        }else{
            line+="*"
        }
    }
    console.log(line)
}