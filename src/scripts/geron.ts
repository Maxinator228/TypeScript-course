// type TStatusServer = 200 | 300 | 400;

// let currentStatus: TStatusServer = 400;




// Урок 3

// split
// let randString: string = "заказ"

// console.log(randString.split('').reverse().join(''))

// if(randString == randString.split('').reverse().join('')){
//     console.log(`Слово ${randString} - палиндром`)
// }

// // slice - отрицаительные числа, substirng
// let randString1: string = "набор слов"
// console.log(randString1.substring(0,5))
// console.log(randString1.slice(-4,0))

// // вывод последнего символа в строке
// console.log(randString1[randString1.length - 1])
// console.log(randString1.charAt(randString1.length - 1))


// // Практика по услвовиям

// // 1
// let num1: number = 10;
// let num2: number = 9;
// if(num1 > num2){
//     console.log(num1)
// }else{
//     console.log(num2)
// }

// // 2

// let year: number = 2008;

// if(year % 4 == 0 && year % 400 == 0 && year % 100 != 0){
//     console.log('yes')
// }else{
//     console.log('no')
// }

// // 3

// let sisAnswer: string = "1001";





// Урок 4

// Функции

type TPlace = "college" | "school";

const getCourse = (place:TPlace, score:number) => {
    if(score > 180){
        if(place == "college"){
            return "вы поступили на второй курс"
        }else{
            return "вы поступили на первый курс"
        }
    }
    else{
        return "вы не поступили, не хватило баллов"
    }
}

console.log(getCourse("school", 150))


// Trello

const calcProfit = (salary:number) => {
    let prem:number;

    if(salary > 400000){
        prem = salary * 0.1;
    } else if(salary > 300000){
        prem = salary * 0.15
    } else{
        prem = salary * 0.2
    }
    return prem;
}

console.log(calcProfit(350000))



// 5 урок

enum EColors {
    red = 'красный',
    black = 'черный',
    gray = 'серый'
}

const color = EColors.black

const getColor = (color:EColors) => {
    switch(color){
        case EColors.red:
            console.log('красный')
            break;
        case EColors.black:
                console.log('черный')
                break;
        case EColors.gray:
            console.log('серый')
            break;
        default:
            console.log('такого цвета нет')
            break
    }
}



type TCallBack = (num1:number, num2:number) => number;

const generateRandomNumber = (callback:TCallBack) => {    
    let num1: number = Math.floor(Math.random() * 100)
    let num2: number = Math.floor(Math.random() * 100)
    let answer = callback(num1,num2)
    return answer
}

const summary = (num1:number, num2: number) => {
    return num1 + num2
}
const multiply = (num1:number, num2: number) => {
    return num1 * num2
}
const divide = (num1:number, num2: number) => {
    return num2 != 0 ? num1 / num2 : 0
}

console.log(generateRandomNumber(summary));
console.log(generateRandomNumber(multiply));
console.log(generateRandomNumber(divide));



type TString = (str: string) => string;

const doString = (callback:TString) => {
    let str = 'дед'
    str = str.toUpperCase()
    let answer = callback(str)

    return answer
}

const password = (pass:string) => {
    if(pass.length > 8 && pass.includes('qwerty')){
        return pass + 'умер'
    } else{
        return 'почухай деда'
    }
}
const test = (pass:string) =>{
    if(pass == pass.split('').reverse().join('')){
        return `Пароль ${pass} - палиндром`
    }
    else{
        return "Неверный пароль"
    }
}
console.log(doString(password))
console.log(doString(test))



// 6 урок

type TPerson = {
    age: number, 
    name: string,
    id?: number
}

interface IPerson {
    age: number;
    name: string;
}

const person: TPerson = {
    age: 21,
    name: 'Max'
}


let yearsNum: number[] = [2019,2020,2021,2022,2023,2024];
let years: string[] = ['лето', 'осень','зима','весна'];

console.log(yearsNum[3]);
console.log(years[2]);
console.log(years[3]);
console.log(yearsNum[0])

let array: TPerson[] = [
    {
        name: 'Max',
        age: 21
    },
    {
        name: 'Ma',
        age: 19
    },
    {
        name: 'Mx',
        age: 20
    }
]

console.log(array[1].age)
console.log(array[0].name)
console.log(array[2])


type TMonth = {
    title: string,
    days: number
}

let monthes: TMonth[] = [
    {
        title: 'Январь',
        days: 31
    },
    {
        title: 'Февраль',
        days: 28
    },
    {
        title: 'Март',
        days: 31
    },
    {
        title: 'Апрель',
        days: 30
    },
    {
        title: 'Май',
        days: 31
    }
]

monthes.push({
    title: 'Июнь',
    days: 29
})
console.log(monthes)
// находим месяца с днями меньше 30

let monthesMore30Days: TMonth[] = []
for(let i = 0; i < monthes.length; i++){
    if(monthes[i].days < 30){
        monthesMore30Days.push(monthes[i])
    }
}
console.log(monthesMore30Days)

// Рассчитать сумму всех дней в массиве

let sumOfDays: number = 0;
for(let i = 0; i < monthes.length; i++){
    sumOfDays += monthes[i].days
}
console.log('Сумма всех дней в массиве:' + sumOfDays)

// Найти месяц, в которых меньше и больше всего дней

let minMonthes: TMonth = monthes[0];
let maxMonthes: TMonth = monthes[0];

for(let i = 0; i < monthes.length; i++){
    if(monthes[i].days < minMonthes.days){
        minMonthes = monthes[i]
    }
}
for(let i = 0; i < monthes.length; i++){
    if(monthes[i].days > maxMonthes.days){
        maxMonthes = monthes[i]
    }
}

console.log(minMonthes);
console.log(maxMonthes);

// 2

type TProduct = {
    title: string,
    category: string,
    price: number
}

const products: TProduct[] = [
    {
        title: "BOSH-30",
        category: "Холодильник",
        price: 150000
    },
    {
        title: "POCO",
        category: "Микровоновка",
        price: 90000
    },
    {
        title: "SAMSUNG",
        category: "Стиральная машина",
        price: 135000
    },
]

// Самый дорогой товар
let mostExpensiveProduct: TProduct = products[0];
for (let i = 0; i < products.length; i++){
    if(products[i].price > mostExpensiveProduct.price){
        mostExpensiveProduct = products[i]
    }
}
console.log(mostExpensiveProduct)


// Cамый дешевый товар
let mostСheepProduct: TProduct = products[0];
for (let i = 0; i < products.length; i++){
    if(products[i].price < mostСheepProduct.price){
        mostСheepProduct = products[i]
    }
}
console.log(mostСheepProduct)

// Уменьшаем цену товара, если она больше 140000

let productUnder140000: TProduct[] = [];

for (let i = 0; i < products.length; i++){
    if(products[i].price > 140000){
        products[i].price -= 10000
        productUnder140000.push(products[i])
    }
}
console.log(productUnder140000)

// Создать новый массив с категориями из массива с товаров

const categories: string[] = []

for (let i = 0; i < products.length; i++){
    if(products[i].category){
        categories.push(products[i].category)
    }
}
console.log(categories)

// 3

const numArray: number[] = [35, 20, 75, 10, 50, 45, 30, 80, 25, 60, 15, 40, 55, 70, 65];

// Найти самое большое и маленькое число
let maxNumber = numArray[0];
for (let i = 1; i < numArray.length; i++) {
  if (numArray[i] > maxNumber) {
    maxNumber = numArray[i];
  }
}
console.log("Самое большое число:", maxNumber);

let minNumber = numArray[0];
for (let i = 1; i < numArray.length; i++) {
  if (numArray[i] < minNumber) {
    minNumber = numArray[i];
  }
}
console.log("Самое маленькое число:", minNumber);

// Найти сумму всех чисел

let sum: number = 0;
for (let i = 1; i < numArray.length; i++) {
    sum += numArray[i]
}
console.log('Сумма всех чисел в массиве:', sum)

// Создать новый массив с числами от 70

const newArrayFrom70: number[] = [];
for(let i = 0; i < numArray.length; i++){
    if(numArray[i] >= 70){
        newArrayFrom70.push(numArray[i])
    }
}
console.log(newArrayFrom70);

// Создать новый массив с числами до 30

const newArrayUnder30: number[] = [];
for(let i = 0; i < numArray.length; i++){
    if(numArray[i] <= 30){
        newArrayUnder30.push(numArray[i])
    }
}
console.log(newArrayUnder30);

// Соединить массивы из 4 и 5 задания в один новый

const newArray: number[] = [...newArrayFrom70, ...newArrayUnder30];
console.log("Объединенный массив:", newArray);

// Вывести количество элементов массива из 6-ого задания
console.log(newArray.length);

// Заменить все числа от 30 до 50 на 20 в основном массиве

for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] >= 30 && numArray[i] <= 50) {
      numArray[i] = 20;
    }
}
console.log("Массив после замены:", numArray);

// Заменить все числа от 50 до 70 на 80 в основном массиве

for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] >= 50 && numArray[i] <= 70){
      numArray[i] = 80;
    }
}
console.log("Массив после замены:", numArray);

//  Найти сумму всех чисел в основном массиве
for (let i = 1; i < numArray.length; i++) {
    sum += numArray[i]
}
console.log('Сумма всех чисел в массиве:', sum)



// 7 урок
let numbers: number[] = [1,2,3,4,5,6];

// методы для добавления элементов в массив
numbers.push(7)
numbers.unshift(7)
numbers.splice(2,0,7777)


numbers.forEach(item =>{
    console.log(item)
})

// сортировка
numbers.sort((a,b) => {
    return a - b
})
console.log(numbers)


let strings = ['3000','2','30','200','5'];
let stringsToNum = strings.map(elem => parseInt(elem))
stringsToNum.sort((a,b) => {
    return a - b
})
console.log(stringsToNum)


let numbersMore5 = stringsToNum.filter((item) => item > 5)
console.log(numbersMore5)


type TCategory = "iphone" | "laptop";
type TStuff = {
    category: TCategory,
    price: number,
    count: number
}
let stuffs: TStuff[] = [
    {
        category: 'iphone',
        price: 300000,
        count: 5
    },
    {
        category: 'iphone',
        price: 250000,
        count: 104
    },
    {
        category: 'laptop',
        price: 505000,
        count: 3
    },
    {
        category: 'laptop',
        price: 718000,
        count: 12
    }
]

//  сделать отдельный массив под каждую категорию
let smartphones:TStuff[] = stuffs.filter((item) => item.category === 'iphone')
console.log(smartphones)
let laptops:TStuff[] = stuffs.filter((item) => item.category === 'laptop')
console.log(laptops)
// сортировка по убыванию цены
smartphones.sort((a,b) => {return b.price - a.price})
console.log(smartphones)
laptops.sort((a,b) => {return b.price - a.price})
console.log(laptops)

// создать функцию по добавлению товара в каждую категорию

const addStuff = (category:TCategory, price:number,count:number) => {
    if(category === 'iphone'){
        smartphones.push(
            {
                category: category,
                price: price,
                count: count
            }
        )
    } else{
        laptops.push(
            {
                category: category,
                price: price,
                count: count
            }
        )
    }
}
addStuff('iphone', 10000000,3432)
addStuff('laptop', 25000,140)
console.log(smartphones)
console.log(laptops)

// Добавить по два товара в массив с каждой категорией

stuffs.push(
    {
        category: 'iphone',
        price: 300000,
        count: 5
    },
    {
        category: 'iphone',
        price: 250000,
        count: 104
    },
    {
        category: 'laptop',
        price: 505000,
        count: 3
    },
    {
        category: 'laptop',
        price: 718000,
        count: 12
    }
)

// Увеличить цену товаров первой категории на 10%

smartphones.map((item) => item.price *= 1.1)
console.log(smartphones)

laptops.map((item) => item.price *= 0.8)
console.log(laptops)

// Вывести массив с первой категорией по возрастнаию и со второй по убыванию

smartphones.sort((a,b) => {return a.price - b.price})
console.log(smartphones)

laptops.sort((a,b) => {return b.price - a.price})
console.log(laptops)

const newStuff = smartphones.concat(laptops);

newStuff.sort((a,b) => {return b.price - a.price})
console.log(newStuff)

// 8 урок

// // импорт как обьект
// import * as testObject from ".test"

// // обычный импорт 
// import { testFunction } from "./test";

// // импорт при экспорте по умолчанию
// import { testFunction } from "./test";

const office = {
    tech: {
        employersCount:10,
        jobsCount: 5
    },
    design: {
        employersCount:10,
        jobsCount: 5
    }
}

let sumOfWorks = 0;
Object.entries(office).forEach(([keys, values]) => {
    sumOfWorks += values.jobsCount
})


// Trello #8

import { seasons, auto } from "./data";

enum ETitleSeasons{
    winter = 'зимний',
    spring = 'весенний',
    summer = 'летний',
    autumn = 'осенний'
}

type TPeriod = {
    closeProjects: number,
    income: number,
    hired: number,
    dismissed: number,
    newProjects: number
}

export type TSeason = {
    winter: TPeriod,
    spring: TPeriod,
    summer: TPeriod,
    autumn: TPeriod
}

type TDifferenceSeason = {
   title: ETitleSeasons,
   season: TPeriod 
}

// Максимальная и минимальная прибыль за сезон

const getTitleSeasons = (season: string) => {
    switch(season){
        case 'winter':
            return ETitleSeasons.winter
        case 'spring':
            return ETitleSeasons.spring
        case 'autumn':
            return ETitleSeasons.autumn 
        default: 
            return ETitleSeasons.summer
    }
}

export let maxIncomeSeason: TDifferenceSeason | null = null;
export let minIncomeSeason: TDifferenceSeason | null = null;

Object.entries(seasons).forEach(([seasonKey, seasonValues]) =>{
    if(!maxIncomeSeason || seasonValues.income >= maxIncomeSeason.season.income){
        maxIncomeSeason = {
            title: getTitleSeasons(seasonKey),
            season: seasonValues
        }
    }
    if(!minIncomeSeason || seasonValues.income <= minIncomeSeason.season.income){
        minIncomeSeason = {
            title: getTitleSeasons(seasonKey),
            season: seasonValues
        }
    }
}) 




// Trello #9

type TParams = {
    width: number, 
    height: number, 
    weight: number
}

type TDetail = {
    title:string,
    params:TParams
}

type TOptions = {
    name: string,
    details: TDetail[],
    mainEngineer: string,
    deadline: string
}

export type TDepartments = {
    tech: TOptions[],
    turbo: TOptions[],
    chemical: TOptions[]
}

enum EDepName {
    tech = 'Технический',
    turbo = 'Турбинный цех',
    chemical = 'Химический'
}

const calculateDetailCost = (params:TParams) => {
    return (params.width * params.height) / params.weight * 150
}

const calculateProjectBudget = (project: TOptions) => {
    console.log(project.name);

    let totalProjectCost = 0;

    project.details.forEach((detail) => {
        const detailCost = calculateDetailCost(detail.params)
        totalProjectCost += detailCost
        console.log(`${detail.title} - стоимость детали: ${detailCost}`)
    })

    console.log(`Общий бюджет на проект: ${totalProjectCost}`);
    return totalProjectCost
}

Object.entries(auto).forEach(([departmentName, projects]) => {
    const depName: EDepName = EDepName[departmentName as EDepName]
    let totalDepartmentBudget = 0;

    projects.forEach((project) => {
        const projectBudget = calculateProjectBudget(project);
        totalDepartmentBudget += projectBudget;
    });

    console.log(`Название отдела: ${depName} - бюджет на отдел: ${totalDepartmentBudget}`)
})

