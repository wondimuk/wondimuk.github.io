class Student{
    constructor(studentID){
        this.studentID = studentID;
        this.answers =[];
    }

    addAnswer(questions){
        this.answers.push(questions);
    }
}

class Question{
    constructor(qID,answer){
        this.qID = qID;
        this.answer = answer;
    }
    checkAnswer(stAnswer){
        return (stAnswer===this.answer)?1:0;
    }
}

class Quiz{
    constructor(questions, students){
        this.students = students;
        this.questions = questions;
    }
    scoreStudentBySid(stID){
        let student = null
        this.students.forEach(element => {
            if(element.studentID === stID) student = element;
        });

        let stAnswers = student.answers

        let score = 0
        for (let i = 0; i < this.questions.length; i++) {
            for (let j = 0; j < stAnswers.length; j++) {
                if(stAnswers[j].qID === this.questions[i].qID){
                    score += this.questions[i].checkAnswer(stAnswers[j].answer)
                }
            }
        }
        return score;
    }

    getAverageScore(){
        let avgScore = 0;
        this.students.forEach(element => {
            avgScore += this.scoreStudentBySid(element.studentID)
        });
        return avgScore/this.students.length;
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5
