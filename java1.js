let list = document.querySelector('#container')
let index1
let maker1 = document.querySelector('#maker1')
let maker2 = document.querySelector('#maker2')
let submit = document.querySelector('#submit')
let maker3 = document.querySelector('#maker3')
let maker4 = document.querySelector('#maker4')
let splitted 
let class1 = 'small'
let class2 = 'mid'
let class3 = 'big'
let mainClass = class2
let small1 = document.querySelector('.dropdown-item.small')
let mid1 = document.querySelector('.dropdown-item.mid')
let big1 = document.querySelector('.dropdown-item.big')
let pairSplitted
let objNew
let none = document.getElementById('none')
let noneLabel = document.getElementById('noneLabel')
let add = document.querySelector('#add')
let w = 36
let h = 48
let fs1 = 4.8
let fs2 = 1.6
let pt1 = 6.4
let pt2 = 8
let bh = 4.8
let bw = 4.8
let bfs = 2.4

let arr1 = [{'word':'To take','trans':'Взять','phrase':'To take a hat','phraseT':'Взять шляпу','turn':false},{'word':'To eat','trans':'Кушать','phrase':'To eat an apple','phraseT':'Кушать яблоко','turn':false},{'word':'To be','trans':'Быть','phrase':'To be at home','phraseT':'Быть дома','turn':false},{'word':'To wash','trans':'Мыть','phrase':'To wash the floor','phraseT':'Мыть пол','turn':false},{'word':'To bring','trans':'Приносить','phrase':'To bring the gift','phraseT':'Принести подарок','turn':false},{'word':'To stay','trans':'Оставаться','phrase':'To stay alive','phraseT':'Оставаться живым','turn':false},{'word':'To hold','trans':'Держать','phrase':'To hold a ball','phraseT':'Держать мяч','turn':false},{'word':'To swim','trans':'Плавать','phrase':'To swim in the pool','phraseT':'Плавать в бассейне','turn':false},{'word':'To think','trans':'Думать','phrase':'To think fast','phraseT':'Думать быстро','turn':false},{'word':'To rise','trans':'Поднимать','phrase':'To rise a hand','phraseT':'Поднять руку','turn':false},{'word':'To clean','trans':'Чистить','phrase':'To clean a carpet','phraseT':'Чистить ковёр','turn':false},{'word':'To look','trans':'Смотреть','phrase':'To look at people','phraseT':'Смотреть на людей','turn':false},{'word':'To love','trans':'Любить','phrase':'I love you','phraseT':'Я люблю тебя','turn':false},{'word':'To create','trans':'Создавать','phrase':'To create content','phraseT':'Создавать контент','turn':false},{'word':'To live','trans':'Жить','phrase':'To live long','phraseT':'Жить долго','turn':false},{'word':'To hate','trans':'Ненавидеть','phrase':'To hate soup','phraseT':'Ненавидеть суп','turn':false},{'word':'To dream','trans':'Мечтать','phrase':'To dream about the future','phraseT':'Мечтать о будущем','turn':false},{'word':'To lose','trans':'Терять','phrase':'To lose a sock','phraseT':'Потерять носок','turn':false},{'word':'To turn','trans':'Повернуть','phrase':'To turn right','phraseT':'Повернуть направо','turn':false},{'word':'To add','trans':'Добавлять','phrase':'To add water','phraseT':'Добавить воды','turn':false},{'word':'To drink','trans':'Пить','phrase':'To drink tea','phraseT':'Пить чай','turn':false},{'word':'To die','trans':'Умереть','phrase':'To die from illness','phraseT':'Умереть от болезни','turn':false},{'word':'To realize','trans':'Осознать','phrase':'To realize something','phraseT':'Что-то осознать','turn':false},{'word':'To feel','trans':'Чувствовать','phrase':'To feel the touch','phraseT':'Чувствовать прикосновение','turn':false}]
info = document.cookie
info = info.split(';')

if (document.cookie != ''){
    for (elem1 of info){
        objNew = {}
        splitted = elem1.split(',')
        for (pair of splitted){
            pairSplitted = pair.split('=')
            objNew[pairSplitted[0]] = pairSplitted[1]
            objNew['turn'] = false
        }
        arr1.unshift(objNew)
        render()
    }
}

function small(){
    mainClass = class1
    render()
    small1.className = 'dropdown-item small active'
    mid1.className = 'dropdown-item mid'
    big1.className = 'dropdown-item big'
}

function mid(){
    mainClass = class2
    render()
    small1.className = 'dropdown-item small'
    mid1.className = 'dropdown-item mid active'
    big1.className = 'dropdown-item big'
}

function big(){
    mainClass = class3
    render()
    small1.className = 'dropdown-item small'
    mid1.className = 'dropdown-item mid'
    big1.className = 'dropdown-item big active'
}

function render(){
    list.innerHTML = ''
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i]['turn'] == false){
            list.insertAdjacentHTML("beforeend",`<div class='card border-dark text-dark bg-light mb-3 ${mainClass}'>
            <div data-index = ${i} data-type = 'kart' class="card-body" style = '-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;'>
            <h1 data-index = ${i} data-type = 'kart' class ="card-title text-center ${mainClass}">${arr1[i]['word']}</h1><button data-index = ${i} data-type = 'delete' type="button" class="btn btn-success ${mainClass}">✓</button>
            <p data-index = ${i} data-type = 'kart' class="card-text text-center ${mainClass}">${arr1[i]['phrase']}</p>
            </div>
            </div>`)
        }
        else if (arr1[i]['turn'] == true){
            list.insertAdjacentHTML("beforeend",`<div class="card border-dark text-bg-dark mb-3 ${mainClass}">
            <div data-index = ${i} data-type = 'kart' class="card-body" style = '-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;'>
            <h1 data-index = ${i} data-type = 'kart' class ="card-title text-center ${mainClass}">${arr1[i]['trans']}</h1><button data-index = ${i} data-type = 'delete' type="button" class="btn btn-success ${mainClass}">✓</button>
            <p data-index = ${i} data-type = 'kart' class="card-text text-center ${mainClass}">${arr1[i]['phraseT']}</p>
            </div>
            </div>`)
        }
    }
}

function show(){
    none.className = "input-group mb-3 visible"
    add.className = "btn btn-dark invisible"
    noneLabel.className = 'visible'
}


/*list.addEventListener('click',change)*/

list.onclick = function(event){
    index1 = event.target.dataset.index
    if (event.target.dataset.type == 'delete'){
        arr1.splice(index1,1)
    }
    else if (event.target.dataset.type == 'kart'){
        arr1[index1].turn = !arr1[index1].turn
    }
    render()
}

function addition(){
    if (!maker1.value || !maker2.value){
        alert('Необходимо заполнить все обязательные поля')
    }
    else{
        objNew = {}
        objNew['word'] = maker1.value
        objNew['trans'] = maker2.value
        objNew['phrase'] = maker3.value
        objNew['phraseT'] = maker4.value
        objNew['turn'] = false
        arr1.unshift(objNew)
        document.cookie = `word=${maker1.value},trans=${maker2.value},phrase=${maker3.value},phraseT=${maker4.value};max-age=36000`
        maker1.value = ''
        maker2.value = ''
        maker3.value = ''
        maker4.value = ''
        none.className = "input-group mb-3 invisible"
        add.className = "btn btn-dark visible"
        noneLabel.className = 'invisible'
        render()
    }
}

function CookiesDelete() {
	let cookies = document.cookie.split(";");
	for (let i = 0; i < cookies.length; i++) {
		let cookie = cookies[i];
		let eqPos = cookie.indexOf("=");
		let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
		document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}
}

/*CookiesDelete() если надо очистить куки, то можно запустить*/


render()


