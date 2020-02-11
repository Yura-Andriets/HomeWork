/**
 * Created by PC on 11.02.2020.
 */


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
 return result;
}

console.log("Result of the getMaxDigit function: " + getMaxDigit(2985));


function getSquare(n, m) {
    let result = n;
    if ( m === 0){
        result = 1;
    };
    for (let i = 1; i < m; i++ ) {
        result *= n;
    };
 return result;
}

console.log("Result of the getSquare function: " + getSquare(6, 2) );


const getNameUppercase = str => str[0].toUpperCase() + str.substr(1).toLowerCase();

console.log("Result of the getNameUppercase function: " + getNameUppercase( "YuRiIIIII" ) );


const getProfit = sum => {
    const tax = 19.5;
    return ( sum - ( ( sum / 100 ) * tax ) )};

console.log("Result of the getProfit function: " + getProfit(1000) );


function getRandomNumber(n, m) {
    const randomNumber = Math.random();
    const number = Math.floor( randomNumber * ( m -n + 1) + n  );
  return number;
}

console.log("Result of the getRandomNumber function: " + getRandomNumber(1, 10) );


function countLetter(str, letter) {
    let result = 0;
    letter = letter.toLowerCase();
    str = str.toLowerCase();
    for ( let i = 0; i <= str.length - 1; i++ ) {
        if ( letter === str[i] ) {
            result ++ ;
        };
    };
 return result;
}

console.log("Result of the countLetter function: " + countLetter("АстаЛАвистАА", "А") );


function convertCurrency(str) {
    const isFormatValid = /^[0-9]{1,}(\$|uah)$/.test(str.toLowerCase());
    if (!isFormatValid) {
        throw new Error('Incorrect data');
    }

    let sum = parseInt(str);
    let result;

    for( let i = 0; i <= str.length-1; i++ ) {
        if ( str[i] === "$" ) {
            result = sum * 25 + " Uah";
        } else if ( str[i].toLowerCase() + "ah" === "uah" ) {
            result = sum / 25 + " $";
        };
    };
 return result;
}

console.log("Result of the convertCurrency function: " + convertCurrency("100$") );


function getRandomPassword( number = 8 ) {
    let result = '';
    for ( let i = 0; i < number; i++ ) {
        let ramdomNumber = Math.random();
        result += Math.round( ramdomNumber * 10 );
    };
 return result;
}

console.log("Result of the getRandomPassword function: " + getRandomPassword(5) );


function deleteLetter(str, letter) {
    let result = '';
    for( let i = 0; i <= str.length-1; i++ ) {
        if ( letter.toLowerCase() !== str[i].toLowerCase() ) {
            result += str[i];
        };
    };
 return result;
}

console.log("Result of the deleteLetter function: " + deleteLetter("hello and hi HHHH", "h") );


function isPalyndrom(str) {
    str = str.replace( /\s/g,'' );
    let result = true;
    for( let i = 0; i <= str.length-1; i++ ) {
        let leftChar = str[i].toLowerCase();
        let rightChar = str[str.length - ( i + 1 )].toLowerCase();
        if (leftChar !== rightChar) {
            result = false;
        };
    };    
 return result;
}

console.log("Result of the isPalyndrom function: " + isPalyndrom("Аргентина манит негра") );


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
 return result;
}

console.log("Result of the deleteDuplicateLetter function: " + deleteDuplicateLetter("Бисквит был очень нежный") );

document.writeln(`

1. Result of the getMaxDigit function: ${getMaxDigit(2985)} <br>
2. Result of the getSquare function: ${getSquare(6, 2)} <br>
3. Result of the getNameUppercase function: ${getNameUppercase( "YuRiIIIII" )} <br> 
4. Result of the getProfit function: ${getProfit(1000)} <br>
5. Result of the getRandomNumber function: ${getRandomNumber(1, 10)} <br>
6. Result of the countLetter function: ${countLetter("АстаЛАвистАА", "А")} <br> 
7. Result of the convertCurrency function: ${convertCurrency("100$")} <br>
8. Result of the getRandomPassword function: ${getRandomPassword(5)} <br>
9. Result of the deleteLetter function: ${deleteLetter("hello and hi HHHH", "h")} <br>
10. Result of the isPalyndrom function: ${isPalyndrom("Аргентина манит негра")} <br>
11. Result of the deleteDuplicateLetter function: ${deleteDuplicateLetter("Бисквит был очень нежный")}

`);
