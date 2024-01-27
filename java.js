let menu = document.getElementById('menu')
let block1 = document.getElementById('block1')
let block2 = document.getElementById('block2')
let block3 = document.getElementById('block3')


function add(src,price,name,text,index){
    menu.insertAdjacentHTML("beforeend",`<div class = 'menuMainDiv'>
    <img src = ${src} class = 'menuImg'><p class = 'menuPrice'>${price}</p>
    <div class = 'menuTextDiv'><p class = 'menuName'>${name}</p><p class = 'menuText'>${text}</p></div>
    <div data-index = ${index} class = 'menuButtons'><button data-type = 'minus' class = 'menuMinus' onclick = 'minusCount(${index})'>-</button><p data-index = ${index} class = 'menuCount'></p>
    <button data-type = 'plus' data-index = ${index} onclick = 'plusCount(${index})' class = 'menuPlus'><b>+</b></button></div><button data-type = 'add' data-index = ${index} class = 'addButton'>Добавить</button></div>`)
}
add('/images/lat.jpg','199p','Латте','Это кофе с молоком, но мы говорим латте, чтобы вы платили больше.',1)
add('/images/cap.jpg','259p','Капучино','Кофе как кофе, но бармен нарисует вам здоровенный член (на лбу)',2)
add('/images/esp.jpg','99p','Эспрессо','Господи, да не мучайся ты, возьми просто сок ну или латте',3)
add('/images/gor.jpg','229p','Шоколад','Попросил больше маршмелло и не допил-остаток уносишь в заднице.',4)
add('/images/raf.jpg','359p','Раф','Как говорит собачка? Раф! Поэтому цена и кусается',5)
add('/images/pep.jpg','99p','Пепси','В кофейню за пепси? Оплачивай и чтоб я тебя больше не видел. Чмошник',6)
menu.insertAdjacentHTML("beforeend",`<div style = 'height:15vw'></div>`)
function showBlock(block){
    block1.style.display = 'none'
    block2.style.display = 'none'
    block3.style.display = 'none'
    block.style.display = 'block'
}

let menuButtons = document.getElementsByClassName('menuButtons')
let addButtons = document.getElementsByClassName('addButton')
let menuCount = document.getElementsByClassName('menuCount')
for (elem of menuButtons){
    elem.style.display = 'none'
}
menu.onclick = function(event){
    if (event.target.dataset.type == 'add'){
        console.log('yy')
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
    }
    /*else if (event.target.dataset.type == 'plus'){
        console.log('ff')
        let index1 = event.target.dataset.index
        for (elem of menuCount){
            if (elem.dataset.index == index1){
                let count = elem.value
                console.log(count)
                elem.innerHTML = ++count
            }
        }
    }*/
}
function plusCount(id){
    for (elem of menuCount){
        if (elem.dataset.index == id){
            elem.innerHTML = ++elem.innerHTML
            if (elem.innerHTML >= 10){
                alert('Палец сломаю.')
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
    }
}
