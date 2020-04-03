/**
 * Created by PC on 06.02.2020.
 */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////"ЦИКЛИ І РОЗГАЛУЖЕННЯ"//////////////////////////////////////////////////////
// HomeWork #2


let numberFrom = +(prompt("Введите первое число"));

let numberBefore = +(prompt("Введите второе число"));

let boole = confirm("Пропускать Четные цыфры?");


if (numberFrom && numberBefore) {

    let result1 = 0;
    let result2 = 0;

    for (let i = numberFrom; i<=numberBefore; i++) {

        if ( boole && !( i % 2 == 0 )  ) {
            result1 +=i;
            i++;
        } else {
            result2 +=i;
        }

    }

    if(result1){
        document.write("Сумма числ нечетных: " + result1)
    }else{
        document.write("Сумма всех чисел: " + result2)
    }

}else if(!numberFrom && numberBefore){
    document.write("Вы ввели не правильное первое число")
}
else if(!(!numberFrom || numberBefore)){
    document.write("Вы ввели не правильное второе число")
}
else{
    document.write("Вы не ввели числа")
}