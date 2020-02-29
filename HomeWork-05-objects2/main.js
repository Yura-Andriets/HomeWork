/**
 * Created by Юрий on 27.02.2020.
 */


const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476
};

const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921
};

const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114
};

let dreamSalary = parseInt(prompt("Введите желаемую зарплату "));

while (!dreamSalary){
    alert('Введите число');
    dreamSalary = parseInt(prompt("Введите желаемую зарплату "));
}


function getMyTaxes (value){
    return (this.tax * value);
}

const taxUkraine = getMyTaxes.call(ukraine, dreamSalary);
const taxLatvia = getMyTaxes.call(latvia, dreamSalary);
const taxLitva = getMyTaxes.call(litva, dreamSalary);


function getMiddleTaxes () {
    return (this.tax * this.middleSalary);
}

const middleTaxItUkraine = getMiddleTaxes.call(ukraine);
const middleTaxItLatvia = getMiddleTaxes.call(latvia);
const middleTaxItLitva = getMiddleTaxes.call(litva);


function getTotalTaxes (){
    return (this.tax * this.middleSalary * this.vacancies);
}

const totalTaxesUkraine = getTotalTaxes.call(ukraine);
const totalTaxesLatvia = getTotalTaxes.call(latvia);
const totalTaxesLitva = getTotalTaxes.call(litva);


function getMySalary (min, max){
    const interval = setInterval( ()=> {
        const salary = Math.floor(Math.random() * (max - min + 1) + min);
        const taxes = Math.floor(this.tax * salary);
        const profit = salary - taxes;
        const obj = {salary, taxes, profit};
        console.log(obj);
    }, 10000);
    setTimeout( () => { clearInterval(interval) }, 100000 );
}

getMySalary.call(ukraine, 1500, 2000);


document.write(`

Function #1 <br><br>

Ит-специалист с зарплатой "${dreamSalary}", заплатит налога в Украине: ${taxUkraine}.<br><br>
Ит-специалист с зарплатой "${dreamSalary}", заплатит налога  в Латвии: ${taxLatvia}.<br><br>
Ит-специалист с зарплатой "${dreamSalary}", заплатит налога  в Литве: ${taxLitva}.<br><br>

<br><br>

Function #2 <br><br>

Сумма налога, которую в среднем платять ИТ-специалисты в Украине: ${middleTaxItUkraine}.<br><br>
Сумма налога, которую в среднем платять ИТ-специалисты в Латвии: ${middleTaxItLatvia}.<br><br>
Сумма налога, которую в среднем платять ИТ-специалисты в Литве: ${middleTaxItLitva}.<br><br>

<br><br>

Function #3 <br><br>

Сумма всех налогов, которые платять ИТ-специалисты в Украине - ${totalTaxesUkraine}.<br><br>
Сумма всех налогов, которые платять ИТ-специалисты в Латвии - ${totalTaxesLatvia}.<br><br>
Сумма всех налогов, которые платять ИТ-специалисты в Литвы - ${totalTaxesLitva}.<br><br>

<br><br>

Function #4 <br><br>

Виполнение функции в console

`)

