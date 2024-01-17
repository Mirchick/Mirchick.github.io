/*div with the showed cards*/
let list = document.querySelector('#container')

/*adding a word (inputs and a button)*/
let wordMaker = document.querySelector('#wordMaker')
let transMaker = document.querySelector('#transMaker')
let phraseMaker = document.querySelector('#phraseMaker')
let phraseTMaker = document.querySelector('#phraseTMaker')
let submit = document.querySelector('#submit')
let notVisible = document.getElementById('notVisible') /*the whole div*/
let add = document.querySelector('#add') /*shows this div */

/*actions with arrays and words*/
let mainArrStr = 'verbs' /*to add a specific category to a new card*/
let mainArrStrT = 'Глаголы'
let mainClass = 'mid' /*костыль*/
/*initial state of arrays*/
let verbs = [];let animals = [];let professions = [];let food = [];let school = [];let human = [];let properties = [];let mainArr = verbs
let current = 0 /*current card to show*/
let index1 /*target click index*/
let help1 = 0 /*optimization of a session*/
let objNew
let objnew

/*adding information of arrays to the storage*/
function getInfo(array){
    for (let h = 0;h < array.length;h++){
        localStorage.setItem(`${array[h]['word']}`,`${array[h]['word']},${array[h]['trans']},${array[h]['phrase']},${array[h]['phraseT']},${array[h]['turn']},${array[h]['category']}`)
    }
}

/*uploading information from all arrays to storage*/
function uploadInfo(){
    getInfo([{'word':'To take','trans':'Взять','phrase':'To take a hat','phraseT':'Взять шляпу','turn':false,'category':'verbs'},{'word':'To eat','trans':'Кушать','phrase':'To eat an apple','phraseT':'Кушать яблоко','turn':false,'category':'verbs'},
    {'word':'To be','trans':'Быть','phrase':'To be at home','phraseT':'Быть дома','turn':false,'category':'verbs'},{'word':'To wash','trans':'Мыть','phrase':'To wash the floor','phraseT':'Мыть пол','turn':false,'category':'verbs'},{'word':'To bring','trans':'Приносить','phrase':'To bring the gift','phraseT':'Принести подарок','turn':false,'category':'verbs'},{'word':'To stay','trans':'Оставаться','phrase':'To stay alive','phraseT':'Оставаться живым','turn':false,'category':'verbs'},{'word':'To hold','trans':'Держать','phrase':'To hold a ball','phraseT':'Держать мяч','turn':false,'category':'verbs'},{'word':'To swim','trans':'Плавать','phrase':'To swim in the pool','phraseT':'Плавать в бассейне','turn':false,'category':'verbs'},{'word':'To think','trans':'Думать','phrase':'To think fast','phraseT':'Думать быстро','turn':false,'category':'verbs'},
    {'word':'To rise','trans':'Поднимать','phrase':'To rise a hand','phraseT':'Поднять руку','turn':false,'category':'verbs'},{'word':'To clean','trans':'Чистить','phrase':'To clean a carpet','phraseT':'Чистить ковёр','turn':false,'category':'verbs'},{'word':'To look','trans':'Смотреть','phrase':'To look at people','phraseT':'Смотреть на людей','turn':false,'category':'verbs'},{'word':'To love','trans':'Любить','phrase':'I love you','phraseT':'Я люблю тебя','turn':false,'category':'verbs'},{'word':'To create','trans':'Создавать','phrase':'To create content','phraseT':'Создавать контент','turn':false,'category':'verbs'},{'word':'To live','trans':'Жить','phrase':'To live long','phraseT':'Жить долго','turn':false,'category':'verbs'},{'word':'To hate','trans':'Ненавидеть','phrase':'To hate soup','phraseT':'Ненавидеть суп','turn':false,'category':'verbs'},{'word':'To dream','trans':'Мечтать','phrase':'To dream about the future','phraseT':'Мечтать о будущем','turn':false,'category':'verbs'},
    {'word':'To lose','trans':'Терять','phrase':'To lose a sock','phraseT':'Потерять носок','turn':false,'category':'verbs'},{'word':'To turn','trans':'Повернуть','phrase':'To turn right','phraseT':'Повернуть направо','turn':false,'category':'verbs'},{'word':'To add','trans':'Добавлять','phrase':'To add water','phraseT':'Добавить воды','turn':false,'category':'verbs'},{'word':'To drink','trans':'Пить','phrase':'To drink tea','phraseT':'Пить чай','turn':false,'category':'verbs'},{'word':'To die','trans':'Умереть','phrase':'To die from illness','phraseT':'Умереть от болезни','turn':false,'category':'verbs'},{'word':'To realize','trans':'Осознать','phrase':'To realize something','phraseT':'Что-то осознать','turn':false,'category':'verbs'},{'word':'To feel','trans':'Чувствовать','phrase':'To feel the touch','phraseT':'Чувствовать прикосновение','turn':false,'category':'verbs'}])
    getInfo([{'word': 'Dog', 'trans': 'Собака', 'phrase': 'Barking dog', 'phraseT': 'Лающая собака', 'turn': false,'category':'animals'},{'word': 'Horse', 'trans': 'Лошадь', 'phrase': 'ride a horse', 'phraseT': 'Кататься на лошади', 'turn': false,'category':'animals'},{'word': 'Zebra', 'trans': 'Зебра', 'phrase': 'Funny zebra', 'phraseT': 'Смешная зебра', 'turn': false,'category':'animals'},{'word': 'Lion', 'trans': 'Лев', 'phrase': 'King lion', 'phraseT': 'Король лев', 'turn': false,'category':'animals'},{'word': 'Cat', 'trans': 'Кот', 'phrase': 'Cat meows', 'phraseT': 'Кот мяукает', 'turn': false,'category':'animals'},{'word': 'Frog', 'trans': 'Лягушка', 'phrase': 'Frog jumps', 'phraseT': 'Лягушка прыгает', 'turn': false,'category':'animals'},{'word': 'Mouse', 'trans': 'Мышь', 'phrase': 'Small mouse', 'phraseT': 'Маленькая мышь', 'turn': false,'category':'animals'},{'word': 'Turtle', 'trans': 'Черепаха', 'phrase': 'Clever turtle', 'phraseT': 'Умная черепаха', 'turn': false,'category':'animals'}, {'word': 'Bear', 'trans': 'Медведь', 'phrase': 'Angry bear', 'phraseT': 'Злой медведь', 'turn': false,'category':'animals'},{'word': 'Panda', 'trans': 'Панда', 'phrase': 'Lazy panda', 'phraseT': 'Ленивая панда', 'turn': false,'category':'animals'},{'word': 'Tiger', 'trans': 'Тигр', 'phrase': 'Mighty tiger', 'phraseT': 'Мощный тигр', 'turn': false,'category':'animals'},{'word': 'Rat', 'trans': 'Крыса', 'phrase': 'Rat hides', 'phraseT': 'Крыса прячется', 'turn': false,'category':'animals'},{'word': 'Pig', 'trans': 'Свинка', 'phrase': 'Pink pig', 'phraseT': 'Розовая свинка', 'turn': false,'category':'animals'},{'word': 'Crocodile', 'trans': 'Крокодил', 'phrase': 'Crocodile swims', 'phraseT': 'Крокодил плавает', 'turn': false,'category':'animals'},{'word': 'Monkey', 'trans': 'Обезьяна', 'phrase': 'Monkey sleeps', 'phraseT': 'Обезьяна спит', 'turn': false,'category':'animals'},{'word': 'Snake', 'trans': 'Змея', 'phrase': 'Snake bites', 'phraseT': 'Змея кусает', 'turn': false,'category':'animals'}])
    getInfo([{'word': 'Head', 'trans': 'Голова', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'},{'word': 'Nose', 'trans': 'Нос', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'},{'word': 'Hand', 'trans': 'Рука', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'}, {'word': 'Leg', 'trans': 'Нога', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'}, {'word': 'Body', 'trans': 'Туловище', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'}, {'word': 'Back', 'trans': 'Спина', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'},{'word': 'Belly', 'trans': 'Живот', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'}, {'word': 'Ear', 'trans': 'Ухо', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'},{'word': 'Mouth', 'trans': 'Рот', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'},{'word': 'Eye', 'trans': 'Глаз', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'},{'word': 'Spine', 'trans': 'Позвоночник', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'}, {'word': 'Hair','trans': 'Волосы', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'}, {'word': 'Bone', 'trans': 'Кость', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'}, {'word': 'Illness', 'trans': 'Болезнь', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'}, {'word': 'Job', 'trans': 'Работа', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'}, {'word': 'Family', 'trans': 'Семья', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'},{'word': 'Parents', 'trans': 'Родители', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'}])
    getInfo([{'word': 'Teacher', 'trans': 'Учитель', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'},{'word': 'Engineer', 'trans': 'Инженер', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'},{'word': 'Doctor', 'trans': 'Доктор', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'},{'word': 'Programmer', 'trans': 'Программист', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'},{'word': 'Translator', 'trans': 'Переводчик', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'}, {'word': 'Writer', 'trans': 'Писатель', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'},{'word': 'Scientist', 'trans': 'Учёный', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'},{'word': 'Astronomer', 'trans': 'Астроном', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'}, {'word': 'Policeman', 'trans': 'Полицейский', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'},{'word': 'Driver', 'trans': 'Водитель', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'},{'word': 'Actor', 'trans': 'Актёр', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'},{'word': 'Cook', 'trans': 'Повар', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'}, {'word': 'Pilot', 'trans': 'Пилот', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'}, {'word': 'Fireman', 'trans': 'Пожарный', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'},{'word': 'Postman', 'trans': 'Почтальон', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'}, {'word': 'Cosmonaut', 'trans': 'Космонавт', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'}])
    getInfo([{'word': 'Clever', 'trans': 'Умный', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'},{'word': 'Silly', 'trans': 'Глупый', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'},{'word': 'Beautiful', 'trans': 'Красивый', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'}, {'word': 'Funny', 'trans': 'Смешной', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'}, {'word': 'Sad', 'trans': 'Грустный', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'}, {'word': 'Happy', 'trans': 'Счастливый', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'},{'word': 'Angry', 'trans': 'Злой', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'}, {'word': 'Kind', 'trans': 'Добрый', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'},{'word': 'Big', 'trans': 'Большой', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'},{'word': 'Small', 'trans': 'Маленький', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'},{'word': 'Round', 'trans': 'Круглый', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'}, {'word': 'Interesting','trans': 'Интересный', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'}, {'word': 'Boring', 'trans': 'Скучный', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'}, {'word': 'Careful', 'trans': 'Осторожный', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'}, {'word': 'Wide', 'trans': 'Широкий', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'}, {'word': 'Wise', 'trans': 'Мудрый', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'},{'word': 'Active', 'trans': 'Активный', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'}])
    getInfo([{'word': 'Bacon', 'trans': 'Бекон', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Meat', 'trans': 'Мясо', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},
    {'word': 'Fish', 'trans': 'Рыба', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Avocado', 'trans': 'Авокадо', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Garlic', 'trans': 'Чеснок', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Potato', 'trans': 'Картошка', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Apple', 'trans': 'Яблоко', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Banana', 'trans': 'Банан', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Berry', 'trans': 'Ягода', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Lemon', 'trans': 'Лемон', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Orange', 'trans': 'Апельсин', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Plum', 'trans': 'Слива', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Watermelon', 'trans': 'Арбуз', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Rice', 'trans': 'Рис', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Cheese', 'trans': 'Сыр', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Eggs', 'trans': 'Яйца', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Milk', 'trans': 'Молоко', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Cookie', 'trans': 'Печенье', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Cake', 'trans': 'Торт', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Chockolate', 'trans': 'Шоколад', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Honey', 'trans': 'Мёд', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Sugar', 'trans': 'Сахар', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Salt', 'trans': 'Соль', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Carrot', 'trans': 'Морковь', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Pizza', 'trans': 'Пицца', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Sushi', 'trans': 'Суши', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}])
    getInfo([{'word': 'Book', 'trans': 'Книга', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'},{'word': 'Paper', 'trans': 'Бумага', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'},{'word': 'Pen', 'trans': 'Ручка', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'}, {'word': 'Pencil', 'trans': 'Карандаш', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'}, {'word': 'School', 'trans': 'Школа', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'}, {'word': 'Note', 'trans': 'Заметка', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'},{'word': 'Board', 'trans': 'Доска', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'}, {'word': 'Textbook', 'trans': 'Учебник', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'},{'word': 'Student', 'trans': 'Ученик', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'},{'word': 'Lesson', 'trans': 'Урок', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'},{'word': 'Break', 'trans': 'Перерыв', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'}, {'word': 'Hometask','trans': 'Д/з', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'}, {'word': 'Dictionary', 'trans': 'Словарь', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'}, {'word': 'Math', 'trans': 'Математика', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'}, {'word': 'Biology', 'trans': 'Биология', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'}, {'word': 'Geometry', 'trans': 'Геометрия', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'},{'word': 'Literature', 'trans': 'Литература', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'}])
    document.cookie = 'info=yes;max-age=300000'/*helps not to upload again to the same user*/
}

/*clears the storage*/  /*ДОДЕЛАТЬ!!!*/
function deleteAllWords(){
    while(localStorage.length>0) {     
        let key1 = localStorage.key(0)
        localStorage.removeItem(key1)
    }
}

/*rendering*/
function render(){
    list.innerHTML = ''
    if (document.cookie == ''){
        uploadInfo()
    }
    if (help1 == 0){
        for(let r=0; r<localStorage.length; r++) {
            let key = localStorage.key(r);
            let values = localStorage.getItem(key).split(',')
            objnew = {}
            objnew['word'] = values[0]
            objnew['trans'] = values[1]
            objnew['phrase'] = values[2]
            objnew['phraseT'] = values[3]
            objnew['turn'] = false
            if (values[5] == 'verbs'){
                verbs.unshift(objnew)
            }
            else if (values[5] == 'animals'){
                animals.unshift(objnew)
            }
            else if (values[5] == 'professions'){
                professions.unshift(objnew)
            }
            else if (values[5] == 'food'){
                food.unshift(objnew)
            }
            else if (values[5] == 'school'){
                school.unshift(objnew)
            }
            else if (values[5] == 'human'){
                human.unshift(objnew)
            }
            else if (values[5] == 'properties'){
                properties.unshift(objnew)
            }
        }
        help1 = 1
    }
    if (mainArr.length > 0){
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
        }
        showWord()
    }
    else{
        list.insertAdjacentHTML("beforeend",`<div class="card border-dark text-bg-dark mb-3 elems ${mainClass}">
                <div class="card-body" style = '-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;'>
                <h1 class ="cardNoWords">В категории "${mainArrStrT}" сейчас нет слов</h1>
                </div>
                </div>`)
    }
}

/*shows next word*/
function currentP(){
    let elems = document.getElementsByClassName('elems')
    if (current == elems.length-1){
        current = 0
    }
    else{
        current++
    }
}

/*shows previous word*/
function currentM(){
    let elems = document.getElementsByClassName('elems')
    if (current == 0){
        current = elems.length-1
    }
    else{
        current--
    }
}

/*shows adding form*/
function show(){
    notVisible.style.display = 'block'
    add.style.display = 'none'
    add.style.marginBottom = '0vh'
}

/*shows the current word*/
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

/*processing the cick action*/
list.onclick = function(event){
    let elems = document.getElementsByClassName('elems')
    index1 = event.target.dataset.index
    if (event.target.dataset.type == 'delete'){
        localStorage.removeItem(`${mainArr[index1]['word']}`)/*deleting the card from storage by key*/
        if (index1 == elems.length-1){
            currentP()
            mainArr.splice(index1,1)
        }
        else{
            mainArr.splice(index1,1)
        }
        console.log(localStorage.length)
    }
    else if (event.target.dataset.type == 'kart'){
        mainArr[index1].turn = !mainArr[index1].turn/*turning current card*/
    }
    else{
        for (let i = 0; i < mainArr.length; i++){/*turning other cards back*/
            mainArr[i].turn = false
        }
    }
    render()
}

function addition(){
    if (!wordMaker.value || !transMaker.value){
        alert('Необходимо заполнить все обязательные поля')
    }
    else{
        objNew = {}
        objNew['word'] = wordMaker.value
        objNew['trans'] = transMaker.value
        objNew['phrase'] = phraseMaker.value
        objNew['phraseT'] = phraseTMaker.value
        objNew['turn'] = false
        current = 0
        mainArr.unshift(objNew)
        localStorage.setItem(`${wordMaker.value}`,`${wordMaker.value},${transMaker.value},${phraseMaker.value},${phraseTMaker.value},false,${mainArrStr}`)
        wordMaker.value = ''
        transMaker.value = ''
        phraseMaker.value = ''
        phraseTMaker.value = ''
        notVisible.style.display = 'none'
        add.style.display = 'block'
        add.style.marginBottom = '14vh'
        render()
    }
}

/*deleting cookies*/
function deleteCookie(){
    document.cookie = 'info=yes;max-age=1'
}


render()

console.log(document.cookie)
