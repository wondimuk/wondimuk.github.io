let student = {
    firstName:'',
    lastName:'',
    grades:[],

    addNewGrade:function(grade){
        return this.grades.push(grade);
    },

    computedAverageGrade:function(){
        return this.grades.reduce((acum,element) => element + acum)/this.grades.length;
    }
}

let student1 = Object.create(student);
student1.firstName='Tola';
student1.lastName='Dugasa';
student1.grades=[];
student1.addNewGrade(90);
student1.addNewGrade(89);
student1.addNewGrade(95);


let student2 = Object.create(student);
student2.firstName='Chala';
student2.lastName='Badhasa';
student2.grades=[];
student2.addNewGrade(98);
student2.addNewGrade(96);
student2.addNewGrade(94);

let student3 = Object.create(student);
student3.firstName='Lalise';
student3.lastName='Badhasa';
student3.grades=[];
student3.addNewGrade(99);
student3.addNewGrade(97);
student3.addNewGrade(95);

// Calculating average grade for all students
let students = [student1,student2,student3];

let avgGradeScore =0;
for(let i=0; i<students.length;i++){
    avgGradeScore  = avgGradeScore + students[i].computedAverageGrade();   
}
console.log(avgGradeScore/students.length);

