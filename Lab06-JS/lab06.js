
function printNumbers(from,to){
    while(from<=to){
        console.log(from);
        from++;
    }
}
setInterval(printNumbers,1000,5,7);