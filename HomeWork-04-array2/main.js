/**
 * Created by PC on 19.02.2020.
 */

const getRandomArray = (length, min, max) =>{
    let randomNumber;
    const result = [];
    for(let i = 0; i < length; i++){
        randomNumber = Math.floor(Math.random() * (( max - min + 1 ) + min));
        result.push(randomNumber);
    }
    return result;
}

const randomArray = getRandomArray(10, 1, 100);
console.log(randomArray)


const getModa = (...arguments) =>{
    let sum = 1;
    let min = 0;
    let number;
    array = [...arguments]
        .filter( a => {
            if (a % 2 === 0) return 1;
        })
        .sort( (a , b) => {
            if( a > b ) { return 1};
            if( a < b ) { return -1};
        });

    for( let i = 0; i < array.length; i++){
        if( array[i] === array[i+1] ){
            sum ++ ;
        } else {
            array[i] = array[i+1];
        };
        if(sum > min){
            min = sum;
            sum = 1;
            number = array[i];
        };
    };
    return number;
}
const moda = getModa(6, 2, 55, 11, 78, 4, 55, 77, 4, 87, 23, 2, 56, 3, 2, 4 );
console.log(moda)


const getAverage = (...arguments) => {
    let sum = 0;
    array =[...arguments].filter( (a) => {
        if(  a % 2 === 0) {
            return sum += a;
        };
    });
    return sum = sum/array.length;
}
const average = getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2 )
console.log(average);



const getMedian = (...arguments) => {
    let sum = 0;
    array = [...arguments].filter( a => {
        if ( a % 2 === 0) return 1;
    });
    if (array.length % 2 !== 0) {
        for (let i = 0; i < array.length / 2; i++) {
            sum = array[i];
        };
    } else {
        for (let i = 0; i < array.length / 2; i++) {
            sum = ( ( array[i] + array[i + 1] ) / 2);
        };
    };
    return sum;
}

const median = getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2 );
console.log(median);

const getDividedByFive = (...arguments) => {
    array = [...arguments].filter( func => {
        if(func % 5 === 0){
            return func;
        };
    });
    return array;
}

const dividedByFive = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(dividedByFive);


const filterEvenNumbers = (...arguments) => {
    array = [...arguments].filter( func => {
        if(func % 2 !== 0){
            return func;
        };
    });
    return array;
}

const evenNumbers = filterEvenNumbers(1, 2, 3, 4, 5, 6);
console.log(evenNumbers);


const countPositiveNumbers = (...arguments) => {
    array = [...arguments].filter( func => {
        if(func >= 0){
            return func;
        };
    });
    return array.length;
}

const positiveNumbers = countPositiveNumbers(1, -2, 3, -4, 5, -6);
console.log(positiveNumbers);





const replaceBadWord = (string) => {
    let badWorlds =/fuck|shit/gi;
    return string.replace(badWorlds, "****") ;
}

console.log(replaceBadWord("Are you fucking kidding? Holy shit! It's bullshit!"))



document.write(`
 Массив из 10 случайных целых чисел от 1 до 100 : ${randomArray}<br><br>
 Из набора числ 6, 2, 55, 11, 78, 4, 55, 77, 4, 87, 23, 2, 56, 3, 2, 4 -- Мода равна = ${moda}<br><br>
 Набор чисел : 6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2 <br><br>
 -- среднее арифметическое из набора числ (нецелые числа игнорируються) равно = ${average}<br><br>
 -- медиана из набора числ (нецелые числа игнорируються) равно = ${median}<br><br>
 -- массив чисел, которые делятся нацело на 5  равно = ${dividedByFive}<br><br>
 Массив нечетных чисел  из чисел (1, 2, 3, 4, 5, 6) - ${evenNumbers}<br><br>
 Количество числел больших 0 из чисел (1, -2, 3, -4, 5, -6) равно =  ${positiveNumbers}<br><br>
 Цензура : ${replaceBadWord("Are you fucking kidding? Holy shit! It's bullshit!")}<br>

`)