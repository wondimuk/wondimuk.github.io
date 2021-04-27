function printNumbers(from,to){
setInterval(()=>{
    if(from<=to){
        console.log(from);
        from++;
    }
},1000)};
printNumbers(5,7);

