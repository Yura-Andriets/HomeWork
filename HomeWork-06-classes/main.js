/**
 * Created by PC on 02.03.2020.
 */

class Student {
    constructor(university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marksStudent = [5, 4, 4, 5, 4];
        this.expelledStudent = false;
    }

    getInfo () {
        return ("Студент " + this.course + "го курсу " + this.university + " г. Киев, " + this.fullName)
    }

    get marks (){
        return ((this.expelledStudent) ? null : this.marksStudent);
    }

    set marks (value){
        if (!this.expelledStudent) {return this.marksStudent.push(value)}
    }

    getAverage (){
        const averageMark = ( this.marks.reduce( (sum, current) => sum + current )/this.marks.length ).toFixed(1);
        return averageMark;
    }

    dismiss(){
        this.expelledStudent = true;
    }

    recover(){
        this.expelledStudent = false;

    }
}


class BudgetStudent extends Student{
    constructor (...options){
        super(...options);
        this.interval = setInterval( () => ( this.getScholarship() ), 30000);
    }

    getScholarship (){
        const markScholarship = 4.0;
        if(!this.expelledStudent && this.getAverage() >= markScholarship){
            console.log("Вы получили 1400 грн степендии");
        }else{
            console.log("Стипендию студент не получает, низкий бал или отчислен з университета")
        }
    }

}

let infoStudent = new Student("Киевский политехнический институт", 3, "Андриец Юрий");

let student = new BudgetStudent("University", 5, "Bender");
console.log(student.getInfo());

student.marks = 9;
console.log(student);

student.dismiss();
student.marks = 10;
student.marks = 11;
student.marks = 12;
console.log(student);

// student.recover();
//
// student.marks = 15;
// student.marks = 20;
// console.log(student);

document.write(`

Студент ${infoStudent.course}го курсу  ${infoStudent.university} г. Киев, ${infoStudent.fullName}. <br><br>

Оценки студента ${infoStudent.marks}.<br><br>

Студент получил за первый экзамен = ${infoStudent.marks = 3}<br><br>
Студент получил за второй экзамен = ${infoStudent.marks = 4}<br><br>
 
Оценки студента ${infoStudent.marks}.<br><br> 

Средний балл - ${infoStudent.getAverage()} <br><br>

Сессию сдал не вовремя? "${infoStudent.dismiss()}", студент должен быть ${infoStudent.marks}<br><br>

Студента отчислили с университета ? "${infoStudent.recover()}". Он пересдал сессию и получил оценки за экзамены ${infoStudent.marks}<br><br>

Результат класса BudgetStudent() в console.

`)




