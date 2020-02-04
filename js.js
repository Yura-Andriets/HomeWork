/**
 * Created by PC on 04.02.2020.
 */
function payProduct(){
    let product1  = document.getElementById("product1").value;
    let product2  = document.getElementById("product2").value;
    let product3  = document.getElementById("product3").value;
    let payProduct  = document.getElementById("payProduct").value;

// Вывод максимального числа
    let maxNumber = Math.max(+product1, +product2, +product3);
    console.log("Максимальное число: " + +maxNumber);

// Вывод минимального числа
    let minNumber = Math.min(+product1, +product2, +product3);
    console.log("Минимальное число: " + +minNumber);

// Вывод суммы всех товаров
    let sum = +product1 + +product2 + + product3;
    console.log("Сумма всех товаров: " + +sum);

// Вывод суммы округленная в МЕНЬШУЮ сторону
    let sumMin = Math.floor(+product1) + Math.floor(+product2) + Math.floor(+product3);
    console.log("Сумма округленная в МЕНЬШУЮ сторону: " + +sumMin);

//Вывод суммы товаров округленную до сотен
    let q = (Math.round(+sumMin/100)*100);
    console.log("Сумма товаров округленную до сотен: " + +q);

//Вывод булевого значение
    let boole = sumMin % 2 === 0 ? console.log("сумма всех товаров - четное!") : console.log("сумма всех товаров - нечетное!");


//Вывод суммы сдачи
    let rest = +payProduct - +sum;
    console.log("Сумма сдачи: " + +rest);

//Вывод среднего значение цен всех товаров
    let middel = (sum/3).toFixed(2);
    console.log("Среднее значение цен всех товаров: " + +middel);

//Случайная скидка
    let discount = Math.random();
    console.log("Случайная скидка: " + Math.round(+discount*10) + " %");

//Сумма к оплате со скидкой округленная до 2 знака после запятой
    let sale = (sum - (sum/100)*(+discount*10)).toFixed(2);
    console.log("Сумма к оплате со скидкой округленная до 2 знака после запятой: " + +sale);



    console.log("Adwance");

//Округоенная скидка    
    let discountProduct = Math.round((sum/100)*(+discount*10));


//Оплачено со скидкой
    let saleProduct = Math.round(sum - +discountProduct);
    console.log("Оплачено со скидкой: " + +saleProduct);

//Себестоимость
    let cost = Math.round(+sum)/2;
    console.log("Себестоимость: " + +cost);

//Чистая прибыль
    let profit = +cost - +discountProduct;
    console.log("Чистая прибыль: " + +profit);

   }

document.getElementById("price").onclick = payProduct;
