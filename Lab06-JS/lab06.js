// Question 1: Code fix
function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 2) {
        let j = i;
        let shooter = function() {
            console.log(j);
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}
let army = makeArmy();
army[0]();
army[1]();


// Question two 
function printNumbers(from,to){
let timerID= setInterval(()=>{
    if(from<=to){
        console.log(from);
        if(from==to){
            clearInterval(timerID);
        }
        from++;
    }
},3000)};
printNumbers(5,7);

// Question 3 - explanation
// let i=0;
// setTimeout(()=>alert(i),100);
// for(let j=0;j<100000000;j++){
//     i++;
// }
// // The scheduled function run once current code finished. Because setTimeout simply queues the code to run once the current call stack is finished executing.
// // Once done, the setTimeout will execute the alert which will be popout window with the value of i (i.e. 100000000).

let i=0;
setTimeout(()=>alert(i),100);

setTimeout(()=>{
    for(let j=0;j<100000000;j++){
    i++;
    }
},1000)


