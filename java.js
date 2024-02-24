let menu = document.getElementById('menu')
let kafe = document.getElementById('kafe')
let Sign = document.getElementById('Sign')
let basket = document.getElementById('basket')
let block1 = document.getElementById('block1')
let block2 = document.getElementById('block2')
let block3 = document.getElementById('block3')
let block4 = document.getElementById('block4')
let block5 = document.getElementById('block5')
let block6 = document.getElementById('block6')
let basketEmpty = document.getElementById('basketEmpty')
let basketItems = []
let telForm = document.getElementById('telForm')


function parsePhone(){
    if (telForm.validity.valid){
        let nomer = telForm.value
        alert(nomer)
        newNomer = '+' + nomer[0] + ' (' + nomer.slice(1,4) + ') ' + nomer.slice(4,7) + '-' + nomer.slice(7,9) + '-' + nomer.slice(9)
        telForm.value = newNomer
    }
}


function add(src,name,text,index,price){
    menu.insertAdjacentHTML("beforeend",`<div class = 'menuMainDiv'>
    <img src = ${src} class = 'menuImg'><p data-index = ${index} class = 'menuPrice'>${price}</p>
    <div class = 'menuTextDiv'><p data-index = ${index} class = 'menuName'>${name}</p><p class = 'menuText'>${text}</p></div>
    <div data-index = ${index} class = 'menuButtons'><button data-type = 'minus' class = 'menuMinus' onclick = 'minusCount(${index})'>-</button><p data-index = ${index} class = 'menuCount'></p>
    <button data-type = 'plus' data-index = ${index} onclick = 'plusCount(${index})' class = 'menuPlus'><b>+</b></button></div><button data-type = 'add' data-index = ${index} class = 'addButton'>Добавить</button></div>`)
}
add('/images/lat.jpg','Латте','Это кофе с молоком, но мы говорим латте, чтобы вы платили больше.',1,199)
add('/images/cap.jpg','Капучино','Кофе как кофе, но бармен нарисует вам здоровенный писюн  (на лбу)',2,259)
add('/images/esp.jpg','Эспрессо','Господи, да не мучайся ты, возьми просто сок ну или латте',3,99)
add('/images/gor.jpg','Шоколад','Попросил больше маршмелло и не допил-остаток уносишь в заднице.',4,229)
add('/images/raf.jpg','Раф','Как говорит собачка? Раф! Поэтому цена и кусается',5,359)
add('/images/pep.jpg','Пепси','В кофейню за пепси? Оплачивай и чтоб я тебя больше не видел. Чмошник',6,99)
menu.insertAdjacentHTML("beforeend",`<div style = 'height:15vw'></div>`)
function showBlock(block){
    block1.style.display = 'none'
    block2.style.display = 'none'
    block3.style.display = 'none'
    block4.style.display = 'none'
    block5.style.display = 'none'
    block6.style.display = 'none'
    block.style.display = 'block'
}

let menuButtons = document.getElementsByClassName('menuButtons')
let addButtons = document.getElementsByClassName('addButton')
let menuCount = document.getElementsByClassName('menuCount')
let menuName = document.getElementsByClassName('menuName')
let prices = document.getElementsByClassName('menuPrice')


for (elem of menuButtons){
    elem.style.display = 'none'
}
menu.onclick = function(event){
    if (event.target.dataset.type == 'add'){
        let index1 = event.target.dataset.index
        let menuButtons = document.getElementsByClassName('menuButtons')
        for (elem of menuButtons){
            if (elem.dataset.index == index1){
                elem.style.display = 'flex'
            }
        }
        for (elem of addButtons){
            if (elem.dataset.index == index1){
                elem.style.display = 'none'
            }
        }
        for (elem of menuCount){
            if (elem.dataset.index == index1){
                elem.innerHTML = 1
            }
        }
        for (elem2 of menuName){
            if (elem2.dataset.index == index1){
                basketItems.push(elem2.innerHTML)
            }
        }
    }
}
function plusCount(id){
    for (elem of menuCount){
        if (elem.dataset.index == id){
            elem.innerHTML = ++elem.innerHTML
            if (elem.innerHTML >= 10){
                alert('Палец сломаю.')
            }
        }
        for (elem2 of menuName){
            if (elem2.dataset.index == id && elem.dataset.index == id){
                basketItems.push(elem2.innerHTML)
            }
        }
    }
}
function minusCount(id){
    for (elem of menuCount){
        if (elem.dataset.index == id){
            elem.innerHTML = --elem.innerHTML
            if (elem.innerHTML < 1){
                for (elem1 of menuButtons){
                    if (elem1.dataset.index == id){
                        elem1.style.display = 'none'
                    }
                }
                for (elem1 of addButtons){
                    if (elem1.dataset.index == id){
                        elem1.style.display = 'block'
                    }
                }
            }
        }
        for (elem2 of menuName){
            if (elem2.dataset.index == id && elem.dataset.index == id){
                let word = elem2.innerHTML
                let wordFound = basketItems.indexOf(word)
                basketItems.splice(wordFound,1)
            }
        }
    }
}
function addKafe(src,name,text,index){
    kafe.insertAdjacentHTML("beforeend",`<div class = 'kafeMainDiv'>
    <p class = 'kafeName'>${name}</p><img src = ${src} class = 'kafeImg'>
    <div class = 'kafeTextDiv'><p class = 'kafeText'>${text}</p></div>
    <div data-index = ${index} class = 'kafeButton'>
    </div></div>`)
}
function renderBasket(){
    basket.innerHTML = ''
    let countedDrinks = {}
    if (basketItems.length > 0){
        for (someDrink of basketItems){
            if (countedDrinks[someDrink]){
                countedDrinks[someDrink] += 1
            }
            else{
                countedDrinks[someDrink] = 1
            }
        }
        basket.insertAdjacentHTML("beforeend",`<div style = 'height:8vw'></div>`)
        let summa = 0
        for (drink in countedDrinks){
            if(drink == "Латте"){
                summa += countedDrinks[drink]*199
            }
            else if(drink == 'Капучино'){
                summa += countedDrinks[drink]*259
            }
            else if(drink == 'Эспрессо'){
                summa += countedDrinks[drink]*99
            }
            else if(drink == 'Шоколад'){
                summa += countedDrinks[drink]*229
            }
            else if(drink == 'Раф'){
                summa += countedDrinks[drink]*359
            }
            else if(drink == 'Пепси'){
                summa += countedDrinks[drink]*99
            }
        }
        for (drink in countedDrinks){
            basket.insertAdjacentHTML("beforeend",`<div class = 'basketDrinkDiv'><p class = 'basketDrink'>${drink}</p><p class = 'basketDrinkCount'>${countedDrinks[drink]}</p></div>`)
        }
        basket.insertAdjacentHTML("beforeend",`<div class = 'basketDrinkDivSum'><p class = 'sum'>Итого:</p><p class = 'basketDrinkSum'>${summa}р</p></div>`)
    }
    else{
        basket.insertAdjacentHTML("beforeend",`<div><p id="basketEmpty">Корзина пуста</p></div>`)
    }
}

addKafe('/images/kafe1.jpg','кафе на Василеостровской','Самое лучшее кафе в центре Северной Столицы, приходите и пейте кофе я вас люблю. До встречи!',1)
addKafe('/images/kafe2.jpg','кафе на Академической','Изысканное заведение с новым ремонтом и огромным выбором напитков на любой вкус. Ждём Вас в кафе на Академической!',1)
addKafe('/images/kafe3.jpg','кафе на Невском','Расположенное в самом центре города, данное заведение Вас очень обрадует видами и очень огорчит ценами. Приходите!',1)
addKafe('/images/kafe4.jpg','кафе на Адмиралтейской','Это заведение одно из самых старых в нашем любимом городе. Изначально Петр 1 увидел наше кафе и только потом болото.',1)
kafe.insertAdjacentHTML("beforeend",`<div style = 'height:15vw'></div>`)

function sign(){
    showBlock(block6)
    
}


