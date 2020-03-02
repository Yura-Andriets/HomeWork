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
        const bookMarks = (this.expelledStudent) ? ("Отчислен из универа, оценки " + null) : this.marksStudent;
        return bookMarks;
    }

    set marks (value){
        const markExamStudent = (this.expelledStudent) ? ("Отчислен из универа, оценки " + null) : this.marksStudent.push(value);
        return markExamStudent;
    }

    getAverage (){
        let array = 0;
        for( let i = 0; i < this.marks.length; i++){
            array += this.marks[i];
        }
        const averageMark = +( array/this.marks.length ).toFixed(1);
        return averageMark;
    }

    dismiss(){
        return this.expelledStudent = true;
    }

    recover(){
        return this.expelledStudent = false;

    }
}


class BudgetStudent extends Student{
    constructor (){
        super();
        this.interval = setInterval( () => ( this.getScholarship() ), 30000);
    }

    getScholarship (){
        if(!this.expelledStudent && this.getAverage() >= 4){
            return console.log("Вы получили 1400 грн степендии");
        }else{
            return console.log("Стипендию студент не получает, низкий бал или отчислен з университета")
        }
    }

}

let infoStudent = new Student("Киевский политехнический институт", 3, "Андриец Юрий");

let student = new BudgetStudent();


document.write(`

Студент ${infoStudent.course}го курсу  ${infoStudent.university} г. Киев, ${infoStudent.fullName}. <br><br>

Оценки студента ${infoStudent.marks}.<br><br>

Студент получил за первый экзамен = ${infoStudent.marks = 3}<br>
Студент получил за второй экзамен = ${infoStudent.marks = 4}<br><br>
 
Оценки студента ${infoStudent.marks}.<br><br> 

Средний балл - ${infoStudent.getAverage()} <br><br>

Сессию сдал не вовремя? "${infoStudent.dismiss()}", студент должен быть ${infoStudent.marks}<br><br>

Студента отчислили с университета ? "${infoStudent.recover()}". Он пересдал сессию и получил оценки за экзамены ${infoStudent.marks}<br><br>

Результат класса BudgetStudent() в console.

`)




