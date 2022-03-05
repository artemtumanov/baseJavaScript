'use strict'

//Задание №1. Почему код дает именно такие результаты?
    
    let a = 1,
        b = 1,
        c,
        d;

    c = ++a; console.log(c);   // Ответ: 2. Префиксная форма записи. Сначала идет инкрементирование a+1, потом возвращается значение в переменную c.
    d = b++; console.log(d); // Ответ: 1. Постфиксная форма записи. Сначала возвращается значение в перменную d, а потом идет инкрементирование b+1.
    c = (2 + ++a); console.log(c);// Ответ: 5. Перменная а = 2, после чего увеличилась на 1 и возвратило а = 3. Далее переменная а сложилась с 2 и возвратилось в перменную с.
    d = (2 + b++); console.log(d);// Ответ: 4. Переменная b = 2 после инкрементации вернула значение 2, прибавило 2 и значение было присвоено переменной d. После b увеличилось на единицу.
    console.log(a); //Ответ: 3. Так как после последней инкрементации а++ переменная получила значение 3.
    console.log(b); //Ответ: 3. Так как после последней инкрементации b++ переменная получила значение 3.


//Задание №2. Что будет выведено?
    
    console.log(null || 2 || undefined ); // Ответ: 2. Так как логический оператор ||(ИЛИ) ищет первое true и выводит его. В данном случае 2 = true.
    console.log( 1 && null && 2 ); //Ответ: null. Так как логический оператор &&(И) ищет первый false и выводит его. В данном случае null = false.

//Задание №3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу: 1. Если a и b положительные, вывести их разность; 2. Если а и b отрицательные, вывести их произведение; 3. Если а и b разных знаков, вывести их сумму;

    let a = +prompt('Введите первое число', '');
    let b = +prompt('Введите второе число', '');

    function giveResult (a, b) {
        if (a > 0 && b > 0) {
            return a - b
        } else if (a < 0 && b < 0) {
            return a * b
        } else {
            return a + b
        }
    }
    console.log (giveResult(a,b));

//Задание №4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

    let a = 8;

    switch(a) {
        case 1 : console.log(1);
        case 2 : console.log(2);
        case 3 : console.log(3);
        case 4 : console.log(4);
        case 5 : console.log(5);
        case 6 : console.log(6);
        case 7 : console.log(7);
        case 8 : console.log(8);
        case 9 : console.log(9);
        case 10 : console.log(10);
        case 11 : console.log(11);
        case 12 : console.log(12);
        case 13 : console.log(13);
        case 14 : console.log(14);
        case 15 : console.log(15);
                  break;

        default: console.log('Число не в промежутке от 0 до 15')
    }

//Задание №5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
    let a = 2, b = 3;

    function sum(a, b) {
        return a + b
    }

    function subtraction(a, b) {
        return a - b
    }

    function multiply(a, b) {
        return a * b
    }

    function div(a, b) {
        return a / b
    }

    console.log(sum(a, b));
    console.log(subtraction(a,b));
    console.log(multiply(a,b));
    console.log(div(a, b));

//Задание №6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции. В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch).
    
    function mathOperation(arg1, arg2, operation) {
        switch (operation) {
            case 'sum': return arg1 + arg2

            case 'subtraction': return arg1 - arg2

            case 'multiply':  return arg1 * arg2

            case 'div': return arg1 / arg2

            default: alert('Введите sum, subtraction, multiply или div');
        }
    }
    let arg1 = +prompt('Введите первый аргумент', '');
    let arg2 = +prompt('Введите второй аргумент', '');
    let operation = prompt('Введите оператор: sum = сложение, subtraction = вычитание, multiply = умножение, div = деление', 'sum');
    console.log( mathOperation(arg1, arg2, operation));

//Задание №7. Сравнить null и 0. Объяснить результат.
    console.log(null > 0); //false. Преобразует null в 0. 
    console.log(null == 0); //false. При нестрогом равенстве null == undefined. И больше ничему.
    console.log(null >= 0); //true. Здесь нестрогое равенство и >= работают по-разному. null преобразуется в число 0.

//Задание №8. С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val — заданное число, pow –— степень.

    let val = prompt('Введите число',''),
        pow = prompt('Введите в какую степень ввозвести', '');

    function power(val, pow) {
        if (pow==1) {
            return val;
        } else {
            return val = val * power(val, pow - 1);
        }
    }

    console.log(power(val, pow));
