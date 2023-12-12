let list1 = document.querySelector('#listTest')
let arr2 = [{'To take':'Взять','turn':false},{'To eat':'Есть','turn':false},{'To be':'Быть','turn':false},{'To wash':'Мыть','turn':false},{'To bring':'Приносить','turn':false},{'To stay':'Оставаться','turn':false},{'To hold':'Держать','turn':false},{'To swim':'Плавать','turn':false},{'To think':'Думать','turn':false},{'To rise':'Поднимать','turn':false},{'To clean':'Чистить','turn':false},{'To look':'Смотреть','turn':false},{'To love':'Любить','turn':false},{'To create':'Создавать','turn':false},{'To live':'Жить','turn':false},{'To hate':'Ненавидеть','turn':false},{'To dream':'Мечтать','turn':false},{'To lose':'Проигрывать','turn':false},{'To turn':'Поворачивать','turn':false},{'To add':'Добавлять','turn':false},{'To drink':'Пить','turn':false},{'To die':'Умирать','turn':false},{'To realize':'Осознавать','turn':false},{'To feel':'Чувствовать','turn':false}]
let inter = document.querySelector('#inter')
let check1 = document.querySelector('#button-addon2')
let score = 0
let checking = document.querySelector('#checking')
let start = document.querySelector('#start')
let finish = document.querySelector('#finish')
let progress = document.querySelector('#progress')
let fin = document.querySelector('#fin')
const jjj = 5

function newWord(){
    for (key in arr2[0]){
        if (key != 'turn'){
            list1.insertAdjacentHTML("beforeend",`<div class="card border-dark text-dark bg-light mb-3 help">
            <div   class="card-body" style = '-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;'>
            <h1  class ="card-title text-center help">${key}</h1>
            </div>
            </div>`)
        }
    }
}

function startTest(){
    list1.innerHTML = ''
    inter.value = ''
    progress.innerHTML = ''
    score = 0
    start.className = 'btn btn-primary invisible'
    finish.className = 'btn btn-primary visible'
    arr2 = [{'To take':'Взять','turn':false},{'To eat':'Есть','turn':false},{'To be':'Быть','turn':false},{'To wash':'Мыть','turn':false},{'To bring':'Приносить','turn':false},{'To stay':'Оставаться','turn':false},{'To hold':'Держать','turn':false},{'To swim':'Плавать','turn':false},{'To think':'Думать','turn':false},{'To rise':'Поднимать','turn':false},{'To clean':'Чистить','turn':false},{'To look':'Смотреть','turn':false},{'To love':'Любить','turn':false},{'To create':'Создавать','turn':false},{'To live':'Жить','turn':false},{'To hate':'Ненавидеть','turn':false},{'To dream':'Мечтать','turn':false},{'To lose':'Проигрывать','turn':false},{'To turn':'Поворачивать','turn':false},{'To add':'Добавлять','turn':false},{'To drink':'Пить','turn':false},{'To die':'Умирать','turn':false},{'To realize':'Осознавать','turn':false},{'To feel':'Чувствовать','turn':false}]
    newWord()
    checking.className = 'input-group mb-3 visible'
}

function finishTest(){
    list1.innerHTML = ''
    inter.value = ''
    progress.innerHTML = ''
    start.className = 'btn btn-primary visible'
    finish.className = 'btn btn-primary invisible'
    checking.className = 'input-group mb-3 invisible'
}

function check(){
    if (arr2.length > 0){
        for (key in arr2[0]){
            if (key != 'turn'){
                if ((inter.value).toString().toLowerCase() == (arr2[0][key]).toString().toLowerCase()){
                    ++score
                    list1.innerHTML = ''
                    inter.value = ''
                    arr2.shift()
                    newWord()
                    if (arr2.length == 0){
                        checking.className = 'input-group mb-3 invisible'
                        fin.innerHTML = `Тест завершён, Ваш счёт: ${score} из 24`
                        progress.insertAdjacentHTML("beforeend",`<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="height: 3vh">
                        <div class="progress-bar text-bg-warning" style="width: ${Math.round(score/24*100*10)/10}%">${Math.round(score/24*100*10)/10}%</div>
                        </div>`)
                        start.className = 'btn btn-primary visible'
                        finish.className = 'btn btn-primary invisible'
                    }
                }
                else{
                    list1.innerHTML = ''
                    inter.value = ''
                    arr2.shift()
                    newWord()
                    if (arr2.length == 0){
                        checking.className = 'input-group mb-3 invisible' 
                        fin.innerHTML = `Тест завершён, Ваш счёт: ${score} из 24`
                        progress.insertAdjacentHTML("beforeend",`<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="height: 3vh">
                        <div class="progress-bar text-bg-warning" style="width: ${Math.round(score/24*100*10)/10}%">${Math.round(score/24*100*10)/10}%</div>
                        </div>`)
                        start.className = 'btn btn-primary visible'
                        finish.className = 'btn btn-primary invisible'
                    }
                }
            }
        }
    }
}