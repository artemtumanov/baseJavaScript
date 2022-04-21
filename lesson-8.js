'use strict'

//Задание. В чем отличие call() от apply().

const data = {
    name: 'Artem',
    lastName: 'Tumanov',
    showFullName: function () {
        console.log(this.name + ' ' + this.lastName);
    }
}

const data2 = { 
    name: 'Ivan',
    lastName: 'Petrov'
}

data.showFullName.call(data2); // Ivan Petrov
data.showFullName.apply(data2); // Ivan Petrov

        //Как видно из примера call() и apply() идентичны. Но небольшое отличие заключается во втором передаваемом параметре. Если в call(context, arg1, arg2...) аргументы функции передаются через запятую, то в apply(context, [arg1, arg2]) идет передача через массив. То есть apply более удобно использовать, если аргументы нашей функции лежат в массиве.


const a = 1,
      b = 2;

const arr = [1, 2];

function sum(a, b) {
    return a + b;
}

console.log( sum.call(null, a, b)); // 3
console.log( sum.apply(null, arr)); // 3