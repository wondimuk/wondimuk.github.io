//Question 2
function printNumbers(from,to){
    while(from<=to){
        console.log(from);
        from++;
    }
}
setInterval(printNumbers,1000,5,7);
// Question 3 - explanation
// let i=0;
// setTimeout(()=>alert(i),100);
// for(let j=0;j<100000000;j++){
//     i++;
// }
// The scheduled function run after the loop. Because setTimeout simply queues the code to run once the current call stack is finished executing.
// Once done, the setTimeout will execute the alert which will be popout window with the value of i (i.e. 100000000).

