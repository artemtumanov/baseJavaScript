'use strict'

//Задание №1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

function isSimple(n) {                  //Напишем функцию, которая проверяет простое ли число
    for(let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}


let n = 2; // Обьявляем переменную n = 2, так как 0 и 1 априори не простые числа. Отсчет пойдет с 2

while(n <= 100) {                        // В цикле проверяем, если число простое, то выводим его
    if(isSimple(n)) {
        console.log (n);
    }
    n++;
}

//Задача №2-3. Товары в корзине хранятся в массиве. Задачи: a. Организовать такой массив для хранения товаров в корзине; b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

const basket = [100, 200, 300, 400, 500, 6];
let sum = 0;

function countBasketPrice() {
    for (let item of basket) {
        sum = sum + item;
    }
}
countBasketPrice();
console.log(sum);


//Задание №4. Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.

for (let i = 0; i <= 9; console.log(i++)); 

//Задание №5. Нарисовать пирамиду с 20 рядами с помощью console.log

let m = "*";

for(let i = 0; i <= 20; i++) {
    console.log(m);
    m = m + "*";
}