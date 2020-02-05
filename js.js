/**
 * Created by PC on 04.02.2020.
 */
function payProduct(){
    let product1  = document.getElementById("product1").value;
    let product2  = document.getElementById("product2").value;
    let product3  = document.getElementById("product3").value;
    let payProduct  = document.getElementById("payProduct").value;

// Вывод максимальной цены
    let maxNumber = Math.max(+product1, +product2, +product3);


// Вывод минимальной цены
    let minNumber = Math.min(+product1, +product2, +product3);


// Вывод суммы всех товаров
    let sum = +product1 + +product2 + + product3;


// Вывод суммы округленная в МЕНЬШУЮ сторону
    let sumMin = Math.floor(+product1) + Math.floor(+product2) + Math.floor(+product3);


//Вывод суммы товаров округленную до сотен
    let amount = (Math.round(+sumMin/100)*100);


//Вывод булевого значение
    let boole = sumMin % 2 === 0 ? "ДА" : "НЕТ!";


//Вывод суммы сдачи
    let rest = +payProduct - +sum;


//Вывод среднего значение цен всех товаров
    let middel = (sum/3).toFixed(2);


//Случайная скидка
    let discount = Math.random();
    discount = Math.round(+discount*10);


//Сумма к оплате со скидкой округленная до 2 знака после запятой
    let sale = (sum - (sum/100)*(+discount)).toFixed(2);




    //"Adwance";

//Округоенная скидка    
    let discountProduct = Math.round((sum/100)*(+discount));


//Сумма к оплате с учетом скидки
    let saleProduct = Math.round(sum - +discountProduct);


//Себестоимость
    let cost = Math.round(+sum)/2;


//Чистая прибыль
    let profit = +cost - +discountProduct;


    console.log(`
    Максимальная цена ${maxNumber}
    Минимальная цена ${minNumber}
    Сумма всех товаров: ${sum}
    Сумма округленная в МЕНЬШУЮ сторону: ${sumMin}
    Сумма товаров округленную до сотен: ${amount}
    Цена всех товаров четное! - ${boole}
    Сумма сдачи: ${rest}
    Среднее значение цен всех товаров: ${middel}
    Случайная скидка: ${discount} %
    Сумма к оплате со скидкой округленная до 2 знака после запятой: ${sale}
    Сумма к оплате с учетом скидки ${saleProduct}
    Себестоимость: ${cost}
    Чистая прибыль: ${profit}
   `)

}

document.getElementById("price").onclick = payProduct;
