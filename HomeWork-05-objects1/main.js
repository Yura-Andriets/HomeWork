/**
 * Created by Юрий on 24.02.2020.
 */


const students = [{
    name: "Tanya",
    course: 3,
    subject:{
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subject:{
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subject:{
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english:[5, 3],
        cosmology:[5, 5, 5, 5]
    }
}
];


function getSubject (students) {
    const result = Object.keys(students.subject).map( str => (str[0].toUpperCase() + str.substr(1).toLowerCase()).replace(/_/g, " "));
    return result;
}
const subject = getSubject(students[0]);
console.log(subject);


function getAverageMark (students) {
    let length = 0;
    let array = 0;
    let averageMark;
    Object.values( students.subject ).flatMap( item => {
        for( let i = 0; i < item.length; i++){
            array += item[i];
        }
        length += item.length;
        averageMark = +( array/length ).toFixed(2);
    });
    return averageMark;
}
const averageNumber = getAverageMark(students[0]);
console.log(averageNumber);


function getStudentInfo (student){
    let averageMark = averageNumber;
    let { course, name } = student;
    const studentInfo = { course, name, averageMark };
    return studentInfo;
}
const infoForStudent = getStudentInfo(students[0]);
console.log(infoForStudent);


function getStudentsNames (student){
    const array = [];
    student.map( item => { const {name} = item ; return array.push(name) } );
    return array.sort();
}
let studentsNames = getStudentsNames(students);
console.log(studentsNames);


function getBestStudents (student){
    let name;
    let number;
    let item = 0;
    student.map ( (obj, i) => { 
        number = getAverageMark( student[i] );
        if ( number > item ) {
            item = number;
            name = obj.name;
        };
    });
    return name;
}
const bestStudent = getBestStudents(students);
console.log(bestStudent);


function calculateWordLetter (word) {
    const obj = {};
    for ( let i = 0; i < word.length; i++) {
        const letter = word[i].toLowerCase();
        !obj[letter] ? obj[letter] = 1 : obj[letter]++;
    };
    return obj;
}
const word = "suCcess";
const letterWord = calculateWordLetter(word);
console.log(letterWord);


document.writeln(`

1. Список (массив) предметов студентa - ${subject}<br><br>
2. Средняя оценка студента по всем его предметам - ${averageNumber}<br><br>
3. Информация по студенту (курс, имя, средняя оценка) - ${Object.entries(infoForStudent)} <br><br>
4. Имена студентов - ${studentsNames} <br><br>
5. Имя лучшего студента по показателю средней оценки - ${bestStudent}<br><br>
6. Объект, в котором ключи это буквы слова "${word}", а значения - их количество = ${Object.entries(letterWord)}
`)