/**
 * Created by PC on 14.02.2020.
 */


const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

let nameStudent = students[1];
students[1] = students[2];
students[2] = nameStudent;

const getPairs = (arrayName) => {
    const pairsStudents = [];
    for ( let i = 0; i < arrayName.length; i += 2 ){
        pairsStudents.push( [ arrayName[i], arrayName[i + 1] ])
    };
 return pairsStudents;
};

const pairs = getPairs(students);
console.log(pairs);


const getProject = (arrayPairs, arrayProject) => {
    const projectStudents = [];
    for( let k = 0; k < arrayPairs.length; k++){
      projectStudents.push( [ ...arrayPairs[k], arrayProject[k] ] );
    };
    return projectStudents;
};

const project = getProject(pairs, themes);
console.log(project);


const getMarks = (arrayStudents, arrayMarks) => {
    const marksStudents = [];
    for ( let j = 0; j < arrayStudents.length; j++){
        marksStudents.push( [ arrayStudents[j], arrayMarks[j] ] )
    };
    return marksStudents;
};

const success = getMarks(students, marks);
console.log(success);


function randomNumber () {
    const minMarks = 1;
    const maxMarks = 5;
    let number = Math.floor(Math.random() * ((maxMarks - minMarks + 1) + minMarks));
    if (number === 0){
        number = 1;
    };
    return number;
};

const marksRandom = randomNumber();

const getMarksPairs = (arrayPairsProject, func) => {
    const marksProject = [];
    for (let y = 0; y < arrayPairsProject.length; y++){
        func = randomNumber();
        marksProject.push( [ ...arrayPairsProject[y], func ] );
    };
    return marksProject;
};

const marksProjectPairs = getMarksPairs(project, marksRandom);
console.log(marksProjectPairs);