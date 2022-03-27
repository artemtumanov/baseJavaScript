'use strict'
//Задание №1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например: для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект {}.

let num = 245;
let obj ={};

function numberToObject(num) {
    if (num > 999 || num < 0) {
        console.log ('Введите число от 0 до 999');
        return obj;
    }
    num = String(num).split('');
    obj = {
        единицы: num[num.length - 1],
        десятки: num[num.length - 2],
        сотни: num[num.length - 3]
    }
    if (num.length == 2) {
        delete obj["сотни"];
    }
    if (num.length == 1) {
        delete obj["сотни"];
        delete obj["десятки"];
    }
    return obj;
}

console.log(numberToObject(num));


//Задание №2. [100, 200, 300, 400, 500, 6] становится вот таким массивом: [{cost: 100, name: 'пояс' }, {cost: 200, name: 'кроссовки' }, { cost: 300, name: 'кепка' }, { cost: 400, name: 'джинсы' }, { cost: 500, name: 'куртка' }, { cost: 6, name: 'брелок' }]. Функция должна подсчитывать сумму из такого массива.

//Первый способ
let basket = [{cost: 100, name: 'пояс'},
              {cost: 200, name: 'кроссовки'},
              {cost: 300, name: 'кепка'},
              {cost: 400, name: 'джинсы'},
              {cost: 500, name: 'куртка'},
              {cost: 6, name: 'брелок'}
];

let sum = 0;

for (let key in basket) {
    sum += basket[key].cost
}

console.log(sum);


//Второй способ
let basket2 = [{cost: 100, name: 'пояс'},
              {cost: 200, name: 'кроссовки'},
              {cost: 300, name: 'кепка'},
              {cost: 400, name: 'джинсы'},
              {cost: 500, name: 'куртка'},
              {cost: 6, name: 'брелок'}
];

let sum2 = 0;

let result = basket2.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.cost;
}, sum2);

console.log(result);