
// Question 1: Solution 
const arr=[1,50,40,3,10];
// using functions
// const ff=arr.filter(function(elem){return elem>20;}).reduce(function(accumulator,curr){return curr+accumulator;});
// console.log(ff);

// Lamda function that add arr elelments 
console.log(arr.filter(res=>res>20).reduce((ele,temp)=>ele+temp));

// Question 2: filtering string length greater or equal to 5 which contains a charachaacter "a"
const strArr=['alice','Bob','Christina','Wondimu','Kebede','kenea'];
console.log(strArr.filter(res=>res.length>=5 && res.includes('a')));

// Question 3:
// Constructor
function Employee(firstName,lastName,birthDate){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.getFullName=function(){return this.firstName + ' ' + this.lastName;}
    this.getAge=function(){return new Date(Date.now() - this.birthDate.getTime()).getFullYear() - 1970;}
}

// Creating array of Employee objects
const emp=[new Employee('Abdi','Regassa',new Date(2010,01,21)),
            new Employee('Jawar','Mohammed',new Date(1985,02,21)),
            new Employee('Bekele','Gerba',new Date(1980,03,21)),
            new Employee('Kenesa','Ayana',new Date(1990,04,21)),
            new Employee('Dawit','Abdeta',new Date(2002,05,21))];
//Employee list greater than 20 years old
console.log('list of employee whose older than 20 years are:\n'+emp.filter(em=>em.getAge()>20).map(empl=>empl.getFullName()));
// Employee whose born after 2000.
console.log('list of employee whose born after 2000 are:\n'+ emp.filter(em=>em.birthDate.getFullYear()>2000).map(empl=>empl.getFullName()));