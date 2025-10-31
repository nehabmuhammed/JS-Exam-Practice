for(let row =0 ;row<=5;row++){
    let line = ""
    for(let col =5;col>=row;col--){
        line+=" "
    }
    for(let col1 =1;col1<=row;col1++){
        line+="* "
    }
    console.log(line)
}