function Student(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades=[];
}

// function that created student object from the constructor
let students = [new Student('Gadise','Tola'), 
                new Student('Ebisa','Badasa'),
                new Student('Chaltu','Adugna')];

                console.log(students);

// Function that add grade to Student 
Student.prototype.addNewGrade=function(grade){
    this.grades.push(grade);
};

//generating students random grades points
for(st of students){
    for(let i=0;i<3;i++){
        students[i].addNewGrade(Math.floor(Math.random() * 20) + 80);
    }
}

// Question 3
// Function that sorts a students based on their their name
Array.prototype.mySort =function(){
    return this.sort((a,b)=>{
        return (a.firstName + a.lastName) > (b.firstName + b.lastName) ? 1:-1});
}
console.log('Sorted Students are: ');
console.log(students.mySort());
console.log('-----------------------------------');

// Function that calculates the grade average 
Student.prototype.avgGrade=function(){
    resAllGrades=students.flatMap(st=>st.grades);
    console.log('List of all grades: ' + resAllGrades);
    return resAllGrades.reduce((acum,element) => element + acum)/resAllGrades.length;
}

console.log('Average grade is ' + Student.prototype.avgGrade());


