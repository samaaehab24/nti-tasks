function looping(start, end, breaknum, contnum){
    if(start && end && breaknum && contnum){
        for(let i = start ; i <= end ; i++){
            if(i == breaknum){
                break; 
            } else if(i == contnum){
                continue; 
            }
            console.log(i);
        }
    } else {
        console.log("enter all numbers");
    }
}

looping(1, 10, 6, 3);
looping(1, 4, 3);