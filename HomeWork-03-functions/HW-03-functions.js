/**
 * Created by PC on 09.02.2020.
 */


console.log(`

///// Функция getMaxDigit(number) – которая получает любое число и выводит самую большую цифру в этом числе.

function getMaxDigit(number) {

    let str = number.toString();
    str = str.split('');
    let result = 0;

        for(let i = 1; i <= str.length-1; i++ ){
            if ( str[0] < str[i] ){
                str[0] = str[i];
                result = str[0];
            };
        };
}

getMaxDigit(2589);


///// Функция, которая вычисляет степень числа.

function getSquare(n, m) {

    let result = n;

        for (let i = 1; i < m; i++ ) {
            result *= n;
        };
}

getSquare(6, 2);


//// Функция, которая форматирует имя, делая первую букву заглавной.

const getNameUppercase = ( str ) => { result = str[0].toUpperCase() + str.substr(1).toLowerCase(); }

getNameUppercase( "YuRiIIIII" );


///// Функция, которая вычисляет сумму оставшуюся после оплаты налога от заработной платы. (Налог = 18% + 1.5% -> 19.5%).

const getProfit = sum => { profit = ( sum - ( ( sum / 100 ) * 19.5 ) ); }

getProfit(1000);


//// Функция, которая возвращает случайное целое число в диапазоне от N до M

function getRandomNumber(n, m) {

    let randomNumber = Math.random();
    let number = Math.floor( randomNumber * ( m - n ) + n );
}

getRandomNumber(1, 20);


///// Функция, которая считает сколько раз определенная буква повторяется в слове.

function countLetter(str, letter) {

    let result = 0;

        for ( let i = 0; i <= str.length - 1; i++ ) {
            if ( letter.toLowerCase() === str[i].toLowerCase() ) {
                result ++ ;
            };
        };
}

countLetter("АстаЛАвистАА", "А");


///// Функция конвертиующую доллары в гривны и наоборот в зависимости от наличия символа $ или UAH в строке.

function convertCurrency(str) {

    let sum = parseInt(str);
    let result, wrongCurrency;

        for( let i = 0; i <= str.length-1; i++ ) {
            if ( str[i] === "$" ) {
                result = sum * 25 + " Uah";
            } else if ( str[i].toLowerCase() + "ah" === "uah" ) {
                result = sum / 25 + " $";
            }else {
                wrongCurrency = "Валюта выбрана не правильно";

            };
        };
}

convertCurrency("100$");


///// Функция генерации случайного пароля (только числа), длинна устанавливается пользователем или по умолчанию = 8 символам.

function getRandomPassword( number = 8 ) {

    let result = '';

        for ( let i = 0; i < number; i++ ) {
            let ramdomNumber = Math.random();
            result += Math.round( ramdomNumber * 10 );
        };
}

getRandomPassword(5);


///// Функция, которая удаляет все буквы из предложения.

function deleteLetter(str, letter) {

    let result = '';

        for( let i = 0; i <= str.length-1; i++ ) {
            if ( letter.toLowerCase() !== str[i].toLowerCase() ) {
                result += str[i];
            };
        };
}

deleteLetter("hello and hi HHHH", "h");


///// Функция, которая проверяет является ли слово палиндромом.

function isPalyndrom(str) {

    str = str.replace( /\s/g,'' );
    let result = "";

        for( let i = 0; i <= str.length-1; i++ ) {
            let leftChar = str[i].toLowerCase();
            let rightChar = str[str.length - ( i + 1 ) ].toLowerCase();

                if ( leftChar !== rightChar) {
                    result =  "Это НЕ палиндромом";
                } else {
                    result = "Это палиндромом";
                };
        };
}

isPalyndrom("Аргентина манит негра");


///// Функция, которая удалит из предложения буквы, которые встречаются более 1 раза

function deleteDuplicateLetter(str) {

    str = str.toLowerCase();
    let result = "";

        for( let i = 0; i <= str.length-1; i++ ) {
            let firstIndex = str.indexOf( str[i] );
            let lastIndex = str.lastIndexOf( str[i] );

                if ( firstIndex == lastIndex ) {
                    result += str[i];
                };
        };
}

deleteDuplicateLetter("Бисквит был очень нежный");

`);