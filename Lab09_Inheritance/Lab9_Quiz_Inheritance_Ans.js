class Question {
    constructor(questionId, answer) {
        this.questionId = questionId;
        this.answer = answer;
    }

    checkAnswer(correctAnswer) {
        return this.answer === correctAnswer;
    }

}

class Student {

    constructor(studentId, answers = []) {
        this.studentId = studentId;
        this.answers = answers;
    }

    addAnswer(question) {
        this.answers.push(question);
    }

}

class Quiz {
    constructor(questionsArray = [], students = []) {
        this.questions = new Map();
        //TODO: add line to convert questionArray to Map questions
        questionsArray.forEach(question => this.questions.set(question.questionId, question.answer));
        this.students = students;
    }

    scoreStudent(studentId) {
        //TODO: compute student score based on answers
        let studentTest = this.students.filter(student => student.studentId === studentId);
        let student = this.students.filter(student => student.studentId === studentId)[0];
        return student.answers.reduce((sum, currentQuestion) => {
            let questionId = currentQuestion.questionId; //find quesiton id
            let correctAnswer = this.questions.get(questionId); //get correctAnswer from Map
            let result = currentQuestion.checkAnswer(correctAnswer); //compare currentQuestion answer with correctAnswer
            if (result) {
                sum = sum + 1;
            }

            // if(currentQuestion.checkAnswer(this.questions.get(currentQuestion.questionId))){
            //   sum = sum + 1;
            // }

            return sum;
        }, 0);
    }

    getAverageScore() {
        return this.students.reduce((average, currentStudent, index, array) => average + this.scoreStudent(currentStudent.studentId) / array.length, 0);
    }

}

const questionsArraywithCorrectAnswers = [new Question(1, 'a'), new Question(2, 'b'), new Question(3, 'd')];

let student1 = new Student(1001, [new Question(1, 'b'), new Question(2, 'b'), new Question(3, 'b')]);

let student2 = new Student(1002);
student2.addAnswer(new Question(1, 'a'));
student2.addAnswer(new Question(2, 'b'));
student2.addAnswer(new Question(3, 'd'));
const students = [student1, student2];

let quizObj = new Quiz(questionsArraywithCorrectAnswers, students);

console.log(quizObj.scoreStudent(1001));
console.log(quizObj.scoreStudent(1002));
console.log(quizObj.getAverageScore());
