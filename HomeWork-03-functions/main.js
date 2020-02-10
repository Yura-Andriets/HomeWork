/**
 * Created by PC on 09.02.2020.
 */

console.log(`


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


function getSquare(n, m) {
    let result = n;
    if ( m === 0){
        result = 1;
    };
    for (let i = 1; i < m; i++ ) {
       result *= n;
    };
}

getSquare(6, 2);


const getNameUppercase = ( str ) => { result = str[0].toUpperCase() + str.substr(1).toLowerCase(); }

getNameUppercase( "YuRiIIIII" );


const getProfit = sum => { profit = ( sum - ( ( sum / 100 ) * 19.5 ) ); }

getProfit(1000);


function getRandomNumber(n, m) {
    let randomNumber = Math.random();
    let number = Math.floor( randomNumber * ( m -n + 1) + n  );
    console.log(+number);
}

getRandomNumber(1, 10);


function countLetter(str, letter) {
    let result = 0;
    letter = letter.toLowerCase();
    str = str.toLowerCase();
    for ( let i = 0; i <= str.length - 1; i++ ) {
        if ( letter === str[i] ) {
               result ++ ;
            };
    };
}

countLetter("АстаЛАвистАА", "А");


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


function getRandomPassword( number = 8 ) {
    let result = '';
        for ( let i = 0; i < number; i++ ) {
            let ramdomNumber = Math.random();
            result += Math.round( ramdomNumber * 10 );
        };
}

getRandomPassword(5);


function deleteLetter(str, letter) {
    let result = '';
        for( let i = 0; i <= str.length-1; i++ ) {
            if ( letter.toLowerCase() !== str[i].toLowerCase() ) {
                result += str[i];
            };
        };
}

deleteLetter("hello and hi HHHH", "h");


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