'use strict'
let basket = [{cost: 100, name: 'Пояс'},
              {cost: 200, name: 'Кроссовки'},
              {cost: 300, name: 'Кепка'},
              {cost: 400, name: 'Джинсы'},
              {cost: 500, name: 'Куртка'},
              {cost: 6, name: 'Брелок'},
];

const root = document.querySelector('#root');
root.style.display = 'flex';
root.style.justifyContent = 'space-between';
root.style.width = '700px';
root.style.flexWrap = 'wrap';
root.style.margin = '0 auto';

for (let i = 0; i < basket.length; i++) {
    let div = document.createElement('div');
    root.appendChild(div);
    div.style.width = '200px';
    div.style.height = '300px';
    div.style.border = '3px solid black';
    div.style.marginTop = '30px'
    div.style.boxSizing = 'border-box';
    div.style.background = '#448fe2';
    div.style.position = 'relative';

    if (i % 2 == 0) {
        div.style.background = '#51af2f';
    }

    let name = document.createElement('p');
    div.appendChild(name);
    name.innerHTML = `${basket[i].name}`;
    name.style.textAlign = 'center';
    name.style.background = '#000';
    name.style.color = '#fff';
    name.style.width = '195px';
    name.style.marginBottom = '165px';

    let cost = document.createElement('p');
    div.appendChild(cost);
    cost.innerHTML = `Цена ${basket[i].cost} рублей`;
    cost.style.background = '#000';
    cost.style.color = '#fff';
    cost.style.textAlign = 'center';
}


let sum = document.createElement('div');
root.appendChild(sum);
sum.style.width = '100%';
sum.style.height = '50px';
sum.style.marginTop = '10px';
sum.style.background = '#9c27b0';

let result = 0;
let quantity = basket.length;

for (let key in basket) {
    result += basket[key].cost;
}

sum.innerHTML = `В корзине: ${quantity} товаров на сумму ${result} рублей`;
sum.style.textAlign = 'center';
sum.style.lineHeight = '45px';
sum.style.color = '#d8ffff';
