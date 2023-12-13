let list = document.querySelector('#container')
let index1
let maker1 = document.querySelector('#maker1')
let maker2 = document.querySelector('#maker2')
let submit = document.querySelector('#submit')
let maker3 = document.querySelector('#maker3')
let maker4 = document.querySelector('#maker4')
let splitted 
let class2 = 'mid'
let mainClass = class2
let small1 = document.querySelector('.dropdown-item.small')
let mid1 = document.querySelector('.dropdown-item.mid')
let big1 = document.querySelector('.dropdown-item.big')
let pairSplitted
let objNew
let none = document.getElementById('none')
let noneLabel = document.getElementById('noneLabel')
let add = document.querySelector('#add')
let current = 0
let verbs = [{'word':'To take','trans':'Взять','phrase':'To take a hat','phraseT':'Взять шляпу','turn':false},{'word':'To eat','trans':'Кушать','phrase':'To eat an apple','phraseT':'Кушать яблоко','turn':false},{'word':'To be','trans':'Быть','phrase':'To be at home','phraseT':'Быть дома','turn':false},{'word':'To wash','trans':'Мыть','phrase':'To wash the floor','phraseT':'Мыть пол','turn':false},{'word':'To bring','trans':'Приносить','phrase':'To bring the gift','phraseT':'Принести подарок','turn':false},{'word':'To stay','trans':'Оставаться','phrase':'To stay alive','phraseT':'Оставаться живым','turn':false},{'word':'To hold','trans':'Держать','phrase':'To hold a ball','phraseT':'Держать мяч','turn':false},{'word':'To swim','trans':'Плавать','phrase':'To swim in the pool','phraseT':'Плавать в бассейне','turn':false},{'word':'To think','trans':'Думать','phrase':'To think fast','phraseT':'Думать быстро','turn':false},{'word':'To rise','trans':'Поднимать','phrase':'To rise a hand','phraseT':'Поднять руку','turn':false},{'word':'To clean','trans':'Чистить','phrase':'To clean a carpet','phraseT':'Чистить ковёр','turn':false},{'word':'To look','trans':'Смотреть','phrase':'To look at people','phraseT':'Смотреть на людей','turn':false},{'word':'To love','trans':'Любить','phrase':'I love you','phraseT':'Я люблю тебя','turn':false},{'word':'To create','trans':'Создавать','phrase':'To create content','phraseT':'Создавать контент','turn':false},{'word':'To live','trans':'Жить','phrase':'To live long','phraseT':'Жить долго','turn':false},{'word':'To hate','trans':'Ненавидеть','phrase':'To hate soup','phraseT':'Ненавидеть суп','turn':false},{'word':'To dream','trans':'Мечтать','phrase':'To dream about the future','phraseT':'Мечтать о будущем','turn':false},{'word':'To lose','trans':'Терять','phrase':'To lose a sock','phraseT':'Потерять носок','turn':false},{'word':'To turn','trans':'Повернуть','phrase':'To turn right','phraseT':'Повернуть направо','turn':false},{'word':'To add','trans':'Добавлять','phrase':'To add water','phraseT':'Добавить воды','turn':false},{'word':'To drink','trans':'Пить','phrase':'To drink tea','phraseT':'Пить чай','turn':false},{'word':'To die','trans':'Умереть','phrase':'To die from illness','phraseT':'Умереть от болезни','turn':false},{'word':'To realize','trans':'Осознать','phrase':'To realize something','phraseT':'Что-то осознать','turn':false},{'word':'To feel','trans':'Чувствовать','phrase':'To feel the touch','phraseT':'Чувствовать прикосновение','turn':false}]
let animals = [{'word': 'Dog', 'trans': 'Собака', 'phrase': 'Barking dog', 'phraseT': 'Лающая собака', 'turn': false},{'word': 'Horse', 'trans': 'Лошадь', 'phrase': 'ride a horse', 'phraseT': 'Кататься на лошади', 'turn': false},{'word': 'Zebra', 'trans': 'Зебра', 'phrase': 'Funny zebra', 'phraseT': 'Смешная зебра', 'turn': false},{'word': 'Lion', 'trans': 'Лев', 'phrase': 'King lion', 'phraseT': 'Король лев', 'turn': false},{'word': 'Cat', 'trans': 'Кот', 'phrase': 'Cat meows', 'phraseT': 'Кот мяукает', 'turn': false},{'word': 'Frog', 'trans': 'Лягушка', 'phrase': 'Frog jumps', 'phraseT': 'Лягушка прыгает', 'turn': false},{'word': 'Mouse', 'trans': 'Мышь', 'phrase': 'Small mouse', 'phraseT': 'Маленькая мышь', 'turn': false},{'word': 'Turtle', 'trans': 'Черепаха', 'phrase': 'Clever turtle', 'phraseT': 'Умная черепаха', 'turn': false}, {'word': 'Bear', 'trans': 'Медведь', 'phrase': 'Angry bear', 'phraseT': 'Злой медведь', 'turn': false},{'word': 'Panda', 'trans': 'Панда', 'phrase': 'Lazy panda', 'phraseT': 'Ленивая панда', 'turn': false},{'word': 'Tiger', 'trans': 'Тигр', 'phrase': 'Mighty tiger', 'phraseT': 'Мощный тигр', 'turn': false},{'word': 'Rat', 'trans': 'Крыса', 'phrase': 'Rat hides', 'phraseT': 'Крыса прячется', 'turn': false},{'word': 'Pig', 'trans': 'Свинка', 'phrase': 'Pink pig', 'phraseT': 'Розовая свинка', 'turn': false},{'word': 'Crocodile', 'trans': 'Крокодил', 'phrase': 'Crocodile swims', 'phraseT': 'Крокодил плавает', 'turn': false},{'word': 'Monkey', 'trans': 'Обезьяна', 'phrase': 'Monkey sleeps', 'phraseT': 'Обезьяна спит', 'turn': false},{'word': 'Snake', 'trans': 'Змея', 'phrase': 'Snake bites', 'phraseT': 'Змея кусает', 'turn': false}]
let professions = [{'word': 'Teacher', 'trans': 'Учитель', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Engineer', 'trans': 'Инженер', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Doctor', 'trans': 'Доктор', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Programmer', 'trans': 'Программист', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Translator', 'trans': 'Переводчик', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Writer', 'trans': 'Писатель', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Scientist', 'trans': 'Учёный', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Astronomer', 'trans': 'Астроном', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Policeman', 'trans': 'Полицейский', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Driver', 'trans': 'Водитель', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Actor', 'trans': 'Актёр', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Cook', 'trans': 'Повар', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Pilot', 'trans': 'Пилот', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Fireman', 'trans': 'Пожарный', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Postman', 'trans': 'Почтальон', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Cosmonaut', 'trans': 'Космонавт', 'phrase': '', 'phraseT': '', 'turn': false}]
let food = [{'word': 'Bacon', 'trans': 'Бекон', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Meat', 'trans': 'Мясо', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Fish', 'trans': 'Рыба', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Avocado', 'trans': 'Авокадо', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Garlic', 'trans': 'Чеснок', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Potato', 'trans': 'Картошка', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Apple', 'trans': 'Яблоко', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Banana', 'trans': 'Банан', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Berry', 'trans': 'Ягода', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Lemon', 'trans': 'Лемон', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Orange', 'trans': 'Апельсин', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Plum', 'trans': 'Слива', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Watermelon', 'trans': 'Арбуз', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Rice', 'trans': 'Рис', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Cheese', 'trans': 'Сыр', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Eggs', 'trans': 'Яйца', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Milk', 'trans': 'Молоко', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Cookie', 'trans': 'Печенье', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Cake', 'trans': 'Торт', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Chockolate', 'trans': 'Шоколад', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Honey', 'trans': 'Мёд', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Sugar', 'trans': 'Сахар', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Salt', 'trans': 'Соль', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Carrot', 'trans': 'Морковь', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Pizza', 'trans': 'Пицца', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Sushi', 'trans': 'Суши', 'phrase': '', 'phraseT': '', 'turn': false}]
let school = [{'word': 'Book', 'trans': 'Книга', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Paper', 'trans': 'Бумага', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Pen', 'trans': 'Ручка', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Pencil', 'trans': 'Карандаш', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'School', 'trans': 'Школа', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Note', 'trans': 'Заметка', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Board', 'trans': 'Доска', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Textbook', 'trans': 'Учебник', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Student', 'trans': 'Ученик', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Lesson', 'trans': 'Урок', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Break', 'trans': 'Перерыв', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Hometask','trans': 'Д/з', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Dictionary', 'trans': 'Словарь', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Math', 'trans': 'Математика', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Biology', 'trans': 'Биология', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Geometry', 'trans': 'Геометрия', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Literature', 'trans': 'Литература', 'phrase': '', 'phraseT': '', 'turn': false}]
let human = [{'word': 'Head', 'trans': 'Голова', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Nose', 'trans': 'Нос', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Hand', 'trans': 'Рука', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Leg', 'trans': 'Нога', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Body', 'trans': 'Туловище', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Back', 'trans': 'Спина', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Belly', 'trans': 'Живот', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Ear', 'trans': 'Ухо', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Mouth', 'trans': 'Рот', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Eye', 'trans': 'Глаз', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Spine', 'trans': 'Позвоночник', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Hair','trans': 'Волосы', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Bone', 'trans': 'Кость', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Illness', 'trans': 'Болезнь', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Job', 'trans': 'Работа', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Family', 'trans': 'Семья', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Parents', 'trans': 'Родители', 'phrase': '', 'phraseT': '', 'turn': false}]
let properties = [{'word': 'Clever', 'trans': 'Умный', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Silly', 'trans': 'Глупый', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Beautiful', 'trans': 'Красивый', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Funny', 'trans': 'Смешной', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Sad', 'trans': 'Грустный', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Happy', 'trans': 'Счастливый', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Angry', 'trans': 'Злой', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Kind', 'trans': 'Добрый', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Big', 'trans': 'Большой', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Small', 'trans': 'Маленький', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Round', 'trans': 'Круглый', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Interesting','trans': 'Интересный', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Boring', 'trans': 'Скучный', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Careful', 'trans': 'Осторожный', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Wide', 'trans': 'Широкий', 'phrase': '', 'phraseT': '', 'turn': false}, {'word': 'Wise', 'trans': 'Мудрый', 'phrase': '', 'phraseT': '', 'turn': false},{'word': 'Active', 'trans': 'Активный', 'phrase': '', 'phraseT': '', 'turn': false}]
let mainArr = verbs
/*----------------------------------------*/
let arr1 = ['Book','Paper','Pen','Pencil','School','Note','Board','Textbook','Student','Lesson','Break','Hometask','Dictionary','Math','Biology','Geometry','Literature']
let arr2 = ['Книга','Бумага','Ручка','Карандаш','Школа','Заметка','Доска','Учебник','Ученик','Урок','Перерыв','Д/з','Словарь','Математика','Биология','Геометрия','Литература']
let arr3 = []
let arr4 = []
let obje = {}
for (let g = 0;g < arr1.length; g++){
    obje = {}
    obje['word'] = arr1[g]
    obje['trans'] = arr2[g]
    obje['phrase'] = ''
    obje['phraseT'] = ''
    obje['turn'] = false
    school.push(obje)
}

console.log(school)



/*-------------------------------------------*/
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
        mainArr.unshift(objNew)
        render()
    }
}

function render(){
    list.innerHTML = ''
    for (let i = 0; i < mainArr.length; i++){
        if (mainArr[i]['turn'] == false){
            list.insertAdjacentHTML("beforeend",`<div class='card border-dark text-dark bg-light mb-3 elems ${mainClass}'>
            <div data-index = ${i} data-type = 'kart' class="card-body" style = '-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;'>
            <button class = 'previous' onclick = 'currentM()' >❮</button><button class = 'next' onclick = 'currentP()' >❯</button>
            <h1 data-index = ${i} data-type = 'kart' class ="card-title text-center ${mainClass}">${mainArr[i]['word']}</h1><button data-index = ${i} data-type = 'delete' type="button" class="btn btn-success ${mainClass}">✓</button>
            <p data-index = ${i} data-type = 'kart' class="card-text text-center ${mainClass}">${mainArr[i]['phrase']}</p>
            </div>
            </div>`)
        }
        else if (mainArr[i]['turn'] == true){
            list.insertAdjacentHTML("beforeend",`<div class="card border-dark text-bg-dark mb-3 elems ${mainClass}">
            <div data-index = ${i} data-type = 'kart' class="card-body" style = '-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;'>
            <button class = 'previous' onclick = 'currentM()' >❮</button><button class = 'next' onclick = 'currentP()' >❯</button>
            <h1 data-index = ${i} data-type = 'kart' class ="card-title text-center ${mainClass}">${mainArr[i]['trans']}</h1><button data-index = ${i} data-type = 'delete' type="button" class="btn btn-success ${mainClass}">✓</button>
            <p data-index = ${i} data-type = 'kart' class="card-text text-center ${mainClass}">${mainArr[i]['phraseT']}</p>
            </div>
            </div>`)
        }
        showWord()
    }
}

function currentP(){
    let elems = document.getElementsByClassName('elems')
    if (current == elems.length-1){
        current = 0
    }
    else{
        current++
    }
}

function currentM(){
    let elems = document.getElementsByClassName('elems')
    if (current == 0){
        current = elems.length-1
    }
    else{
        current--
    }
}

function show(){
    none.className = "input-group mb-3 visible"
    add.className = "btn btn-dark invisible"
    noneLabel.className = 'visible'
}

function showWord(){
    let elems = document.getElementsByClassName('elems')
    for (let i = 0; i < elems.length; i++){
        if (i == current){
            elems[i].style.display = 'block'
        }
        else{
            elems[i].style.display = 'none'
        }
    }
}


/*list.addEventListener('click',change)*/

list.onclick = function(event){
    let elems = document.getElementsByClassName('elems')
    index1 = event.target.dataset.index
    if (event.target.dataset.type == 'delete'){
        if (index1 == elems.length-1){
            currentP()
            mainArr.splice(index1,1)
        }
        else{
            mainArr.splice(index1,1)
            console.log(current)
        }
    }
    else if (event.target.dataset.type == 'kart'){
        mainArr[index1].turn = !mainArr[index1].turn
    }
    else{
        for (let i = 0; i < mainArr.length; i++){
            mainArr[i].turn = false
        }
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
        mainArr.unshift(objNew)
        document.cookie = `word=${maker1.value},trans=${maker2.value},phrase=${maker3.value},phraseT=${maker4.value};max-age=36000`
        maker1.value = ''
        maker2.value = ''
        maker3.value = ''
        maker4.value = ''
        none.className = "input-group mb-3 invisible"
        add.className = "btn btn-dark visible"
        noneLabel.className = 'invisible'
        current = 0
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

showWord()


