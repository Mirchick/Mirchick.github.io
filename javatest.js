let list1 = document.querySelector('#listTest')
let arr2 = [{'To take':'Брать','turn':false},{'To eat':'Есть','turn':false},{'To be':'Быть','turn':false},{'To wash':'Мыть','turn':false},{'To bring':'Приносить','turn':false},{'To stay':'Оставаться','turn':false},{'To hold':'Держать','turn':false},{'To swim':'Плавать','turn':false},{'To think':'Думать','turn':false},{'To rise':'Поднимать','turn':false},{'To clean':'Чистить','turn':false},{'To look':'Смотреть','turn':false},{'To love':'Любить','turn':false},{'To create':'Создавать','turn':false},{'To live':'Жить','turn':false},{'To hate':'Ненавидеть','turn':false},{'To dream':'Мечтать','turn':false},{'To lose':'Проигрывать','turn':false},{'To turn':'Поворачивать','turn':false},{'To add':'Добавлять','turn':false},{'To drink':'Пить','turn':false},{'To die':'Умирать','turn':false},{'To realize':'Осознавать','turn':false},{'To feel':'Чувствовать','turn':false}]
let inter = document.querySelector('.inter')
let check1 = document.querySelector('.check')
let score = 0

function newWord(){
    for (key in arr2[0]){
        if (key != 'turn'){
            list1.insertAdjacentHTML("beforeend",`<li class = 'divWords'><div class = 'relative'>
            <p data-type = 'kart' class = 'primer2' turn = 'false'>${key}</p>
            </div></li>`)
        }
    }
}

function startTest(){
    list1.innerHTML = ''
    inter.value = ''
    score = 0
    arr2 = [{'To take':'Брать','turn':false},{'To eat':'Есть','turn':false},{'To be':'Быть','turn':false},{'To wash':'Мыть','turn':false},{'To bring':'Приносить','turn':false},{'To stay':'Оставаться','turn':false},{'To hold':'Держать','turn':false},{'To swim':'Плавать','turn':false},{'To think':'Думать','turn':false},{'To rise':'Поднимать','turn':false},{'To clean':'Чистить','turn':false},{'To look':'Смотреть','turn':false},{'To love':'Любить','turn':false},{'To create':'Создавать','turn':false},{'To live':'Жить','turn':false},{'To hate':'Ненавидеть','turn':false},{'To dream':'Мечтать','turn':false},{'To lose':'Проигрывать','turn':false},{'To turn':'Поворачивать','turn':false},{'To add':'Добавлять','turn':false},{'To drink':'Пить','turn':false},{'To die':'Умирать','turn':false},{'To realize':'Осознавать','turn':false},{'To feel':'Чувствовать','turn':false}]
    newWord()
    inter.style.display = 'block'
    check1.style.display = 'block'
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
                        inter.style.display = 'none'
                        check1.style.display = 'none'
                        list1.innerHTML = `Тест завершён, Вы набрали ${score} очков`
                    }
                }
                else{
                    list1.innerHTML = ''
                    inter.value = ''
                    arr2.shift()
                    newWord()
                    if (arr2.length == 0){
                        inter.style.display = 'none'
                        check1.style.display = 'none'
                        list1.innerHTML = `Тест завершён, Вы набрали ${score} очков`
                    }
                }
            }
        }
    }
}