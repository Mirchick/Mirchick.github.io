let list1 = document.querySelector('#listTest')
let arr2 = []
let inter = document.querySelector('#inter')
let check1 = document.querySelector('#button-addon2')
let score = 0
let checking = document.querySelector('#checking')
let start = document.querySelector('#start')
let finish = document.querySelector('#finish')
let progress = document.querySelector('#progress')
let fin = document.querySelector('#fin')
let option = ['none','inline']
let temporaryArr = []
let testRunning = false

arrVerbs = [{'word':'To take','trans':'Взять','phrase':'To take a hat','phraseT':'Взять шляпу','turn':false,'category':'verbs'},{'word':'To eat','trans':'Кушать','phrase':'To eat an apple','phraseT':'Кушать яблоко','turn':false,'category':'verbs'},
{'word':'To be','trans':'Быть','phrase':'To be at home','phraseT':'Быть дома','turn':false,'category':'verbs'},{'word':'To wash','trans':'Мыть','phrase':'To wash the floor','phraseT':'Мыть пол','turn':false,'category':'verbs'},{'word':'To bring','trans':'Приносить','phrase':'To bring the gift','phraseT':'Принести подарок','turn':false,'category':'verbs'},{'word':'To stay','trans':'Оставаться','phrase':'To stay alive','phraseT':'Оставаться живым','turn':false,'category':'verbs'},{'word':'To hold','trans':'Держать','phrase':'To hold a ball','phraseT':'Держать мяч','turn':false,'category':'verbs'},{'word':'To swim','trans':'Плавать','phrase':'To swim in the pool','phraseT':'Плавать в бассейне','turn':false,'category':'verbs'},{'word':'To think','trans':'Думать','phrase':'To think fast','phraseT':'Думать быстро','turn':false,'category':'verbs'},
{'word':'To rise','trans':'Поднимать','phrase':'To rise a hand','phraseT':'Поднять руку','turn':false,'category':'verbs'},{'word':'To clean','trans':'Чистить','phrase':'To clean a carpet','phraseT':'Чистить ковёр','turn':false,'category':'verbs'},{'word':'To look','trans':'Смотреть','phrase':'To look at people','phraseT':'Смотреть на людей','turn':false,'category':'verbs'},{'word':'To love','trans':'Любить','phrase':'I love you','phraseT':'Я люблю тебя','turn':false,'category':'verbs'},{'word':'To create','trans':'Создавать','phrase':'To create content','phraseT':'Создавать контент','turn':false,'category':'verbs'},{'word':'To live','trans':'Жить','phrase':'To live long','phraseT':'Жить долго','turn':false,'category':'verbs'},{'word':'To hate','trans':'Ненавидеть','phrase':'To hate soup','phraseT':'Ненавидеть суп','turn':false,'category':'verbs'},{'word':'To dream','trans':'Мечтать','phrase':'To dream about the future','phraseT':'Мечтать о будущем','turn':false,'category':'verbs'},
{'word':'To lose','trans':'Терять','phrase':'To lose a sock','phraseT':'Потерять носок','turn':false,'category':'verbs'},{'word':'To turn','trans':'Повернуть','phrase':'To turn right','phraseT':'Повернуть направо','turn':false,'category':'verbs'},{'word':'To add','trans':'Добавлять','phrase':'To add water','phraseT':'Добавить воды','turn':false,'category':'verbs'},{'word':'To drink','trans':'Пить','phrase':'To drink tea','phraseT':'Пить чай','turn':false,'category':'verbs'},{'word':'To die','trans':'Умереть','phrase':'To die from illness','phraseT':'Умереть от болезни','turn':false,'category':'verbs'},{'word':'To realize','trans':'Осознать','phrase':'To realize something','phraseT':'Что-то осознать','turn':false,'category':'verbs'},{'word':'To feel','trans':'Чувствовать','phrase':'To feel the touch','phraseT':'Чувствовать прикосновение','turn':false,'category':'verbs'}]
arrAnimals = [{'word': 'Dog', 'trans': 'Собака', 'phrase': 'Barking dog', 'phraseT': 'Лающая собака', 'turn': false,'category':'animals'},{'word': 'Horse', 'trans': 'Лошадь', 'phrase': 'ride a horse', 'phraseT': 'Кататься на лошади', 'turn': false,'category':'animals'},{'word': 'Zebra', 'trans': 'Зебра', 'phrase': 'Funny zebra', 'phraseT': 'Смешная зебра', 'turn': false,'category':'animals'},{'word': 'Lion', 'trans': 'Лев', 'phrase': 'King lion', 'phraseT': 'Король лев', 'turn': false,'category':'animals'},{'word': 'Cat', 'trans': 'Кот', 'phrase': 'Cat meows', 'phraseT': 'Кот мяукает', 'turn': false,'category':'animals'},{'word': 'Frog', 'trans': 'Лягушка', 'phrase': 'Frog jumps', 'phraseT': 'Лягушка прыгает', 'turn': false,'category':'animals'},{'word': 'Mouse', 'trans': 'Мышь', 'phrase': 'Small mouse', 'phraseT': 'Маленькая мышь', 'turn': false,'category':'animals'},{'word': 'Turtle', 'trans': 'Черепаха', 'phrase': 'Clever turtle', 'phraseT': 'Умная черепаха', 'turn': false,'category':'animals'}, {'word': 'Bear', 'trans': 'Медведь', 'phrase': 'Angry bear', 'phraseT': 'Злой медведь', 'turn': false,'category':'animals'},{'word': 'Panda', 'trans': 'Панда', 'phrase': 'Lazy panda', 'phraseT': 'Ленивая панда', 'turn': false,'category':'animals'},{'word': 'Tiger', 'trans': 'Тигр', 'phrase': 'Mighty tiger', 'phraseT': 'Мощный тигр', 'turn': false,'category':'animals'},{'word': 'Rat', 'trans': 'Крыса', 'phrase': 'Rat hides', 'phraseT': 'Крыса прячется', 'turn': false,'category':'animals'},{'word': 'Pig', 'trans': 'Свинка', 'phrase': 'Pink pig', 'phraseT': 'Розовая свинка', 'turn': false,'category':'animals'},{'word': 'Crocodile', 'trans': 'Крокодил', 'phrase': 'Crocodile swims', 'phraseT': 'Крокодил плавает', 'turn': false,'category':'animals'},{'word': 'Monkey', 'trans': 'Обезьяна', 'phrase': 'Monkey sleeps', 'phraseT': 'Обезьяна спит', 'turn': false,'category':'animals'},{'word': 'Snake', 'trans': 'Змея', 'phrase': 'Snake bites', 'phraseT': 'Змея кусает', 'turn': false,'category':'animals'}]
arrHuman = [{'word': 'Head', 'trans': 'Голова', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'},{'word': 'Nose', 'trans': 'Нос', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'},{'word': 'Hand', 'trans': 'Рука', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'}, {'word': 'Leg', 'trans': 'Нога', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'}, {'word': 'Body', 'trans': 'Туловище', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'}, {'word': 'Back', 'trans': 'Спина', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'},{'word': 'Belly', 'trans': 'Живот', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'}, {'word': 'Ear', 'trans': 'Ухо', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'},{'word': 'Mouth', 'trans': 'Рот', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'},{'word': 'Eye', 'trans': 'Глаз', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'},{'word': 'Spine', 'trans': 'Позвоночник', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'}, {'word': 'Hair','trans': 'Волосы', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'}, {'word': 'Bone', 'trans': 'Кость', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'}, {'word': 'Illness', 'trans': 'Болезнь', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'}, {'word': 'Job', 'trans': 'Работа', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'}, {'word': 'Family', 'trans': 'Семья', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'},{'word': 'Parents', 'trans': 'Родители', 'phrase': '', 'phraseT': '', 'turn': false,'category':'human'}]
arrProfessions = [{'word': 'Teacher', 'trans': 'Учитель', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'},{'word': 'Engineer', 'trans': 'Инженер', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'},{'word': 'Doctor', 'trans': 'Доктор', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'},{'word': 'Programmer', 'trans': 'Программист', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'},{'word': 'Translator', 'trans': 'Переводчик', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'}, {'word': 'Writer', 'trans': 'Писатель', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'},{'word': 'Scientist', 'trans': 'Учёный', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'},{'word': 'Astronomer', 'trans': 'Астроном', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'}, {'word': 'Policeman', 'trans': 'Полицейский', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'},{'word': 'Driver', 'trans': 'Водитель', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'},{'word': 'Actor', 'trans': 'Актёр', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'},{'word': 'Cook', 'trans': 'Повар', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'}, {'word': 'Pilot', 'trans': 'Пилот', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'}, {'word': 'Fireman', 'trans': 'Пожарный', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'},{'word': 'Postman', 'trans': 'Почтальон', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'}, {'word': 'Cosmonaut', 'trans': 'Космонавт', 'phrase': '', 'phraseT': '', 'turn': false,'category':'professions'}]
arrProperties = [{'word': 'Clever', 'trans': 'Умный', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'},{'word': 'Silly', 'trans': 'Глупый', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'},{'word': 'Beautiful', 'trans': 'Красивый', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'}, {'word': 'Funny', 'trans': 'Смешной', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'}, {'word': 'Sad', 'trans': 'Грустный', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'}, {'word': 'Happy', 'trans': 'Счастливый', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'},{'word': 'Angry', 'trans': 'Злой', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'}, {'word': 'Kind', 'trans': 'Добрый', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'},{'word': 'Big', 'trans': 'Большой', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'},{'word': 'Small', 'trans': 'Маленький', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'},{'word': 'Round', 'trans': 'Круглый', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'}, {'word': 'Interesting','trans': 'Интересный', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'}, {'word': 'Boring', 'trans': 'Скучный', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'}, {'word': 'Careful', 'trans': 'Осторожный', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'}, {'word': 'Wide', 'trans': 'Широкий', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'}, {'word': 'Wise', 'trans': 'Мудрый', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'},{'word': 'Active', 'trans': 'Активный', 'phrase': '', 'phraseT': '', 'turn': false,'category':'properties'}]
arrFood = [{'word': 'Bacon', 'trans': 'Бекон', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Meat', 'trans': 'Мясо', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},
    {'word': 'Fish', 'trans': 'Рыба', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Avocado', 'trans': 'Авокадо', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Garlic', 'trans': 'Чеснок', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Potato', 'trans': 'Картошка', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Apple', 'trans': 'Яблоко', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Banana', 'trans': 'Банан', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Berry', 'trans': 'Ягода', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Lemon', 'trans': 'Лемон', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Orange', 'trans': 'Апельсин', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Plum', 'trans': 'Слива', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Watermelon', 'trans': 'Арбуз', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Rice', 'trans': 'Рис', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Cheese', 'trans': 'Сыр', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Eggs', 'trans': 'Яйца', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Milk', 'trans': 'Молоко', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Cookie', 'trans': 'Печенье', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Cake', 'trans': 'Торт', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Chockolate', 'trans': 'Шоколад', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Honey', 'trans': 'Мёд', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Sugar', 'trans': 'Сахар', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Salt', 'trans': 'Соль', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Carrot', 'trans': 'Морковь', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}, {'word': 'Pizza', 'trans': 'Пицца', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'},{'word': 'Sushi', 'trans': 'Суши', 'phrase': '', 'phraseT': '', 'turn': false,'category':'food'}]
arrSchool = [{'word': 'Book', 'trans': 'Книга', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'},{'word': 'Paper', 'trans': 'Бумага', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'},{'word': 'Pen', 'trans': 'Ручка', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'}, {'word': 'Pencil', 'trans': 'Карандаш', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'}, {'word': 'School', 'trans': 'Школа', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'}, {'word': 'Note', 'trans': 'Заметка', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'},{'word': 'Board', 'trans': 'Доска', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'}, {'word': 'Textbook', 'trans': 'Учебник', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'},{'word': 'Student', 'trans': 'Ученик', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'},{'word': 'Lesson', 'trans': 'Урок', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'},{'word': 'Break', 'trans': 'Перерыв', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'}, {'word': 'Hometask','trans': 'Д/з', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'}, {'word': 'Dictionary', 'trans': 'Словарь', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'}, {'word': 'Math', 'trans': 'Математика', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'}, {'word': 'Biology', 'trans': 'Биология', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'}, {'word': 'Geometry', 'trans': 'Геометрия', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'},{'word': 'Literature', 'trans': 'Литература', 'phrase': '', 'phraseT': '', 'turn': false,'category':'school'}]

function newWord(){
    list1.insertAdjacentHTML("beforeend",`<div class="card border-dark text-dark bg-light mb-3 help">
        <div   class="card-body" style = '-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;'>
        <h1  class ="card-title text-center help">${arr2[0]['word']}</h1>
        </div>
        </div>`)
}

let doneCollection = document.getElementsByTagName('span')

function startTest(){
    for (element of temporaryArr){
        arr2.push(...element)
    }
    lengthArr = arr2.length
    if (lengthArr > 0){
        testRunning = true
        list1.innerHTML = ''
        inter.value = ''
        progress.innerHTML = ''
        score = 0
        fin.innerHTML = ''
        start.style.display = 'none'
        finish.style.display = 'block'
        newWord()
        checking.className = 'input-group mb-3 visible'
    }
    else {
        alert('Необходимо выбрать категории для теста')
    }
}


function finishTest(){
    list1.innerHTML = ''
    inter.value = ''
    fin.innerHTML = ''
    progress.innerHTML = ''
    start.style.display = 'block'
    finish.style.display = 'none'
    checking.className = 'input-group mb-3 invisible'
    testRunning = false
}

function check(){
    if (arr2.length > 0){
        if ((inter.value).toString().toLowerCase() == (arr2[0]['trans']).toString().toLowerCase()){
            ++score
            list1.innerHTML = ''
            inter.value = ''
            arr2.shift()
            if (arr2.length == 0){
                checking.className = 'input-group mb-3 invisible'
                fin.innerHTML = `Тест завершён, Ваш счёт: ${score} из ${lengthArr}`
                progress.insertAdjacentHTML("beforeend",`<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="height: 3vh">
                <div class="progress-bar text-bg-warning" style="width: ${Math.round(score/lengthArr*100*10)/10}%">${Math.round(score/lengthArr*100*10)/10}%</div>
                </div>`)
                start.style.display = 'block'
                finish.style.display = 'none'
                testRunning = false
            }
            else {
                newWord()
                inter.focus()
            }
        }
        else{
            list1.innerHTML = ''
            inter.value = ''
            arr2.shift()
            if (arr2.length == 0){
                checking.className = 'input-group mb-3 invisible' 
                fin.innerHTML = `Тест завершён, Ваш счёт: ${score} из ${lengthArr}`
                progress.insertAdjacentHTML("beforeend",`<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="height: 3vh">
                <div class="progress-bar text-bg-warning" style="width: ${Math.round(score/24*100*10)/10}%;color:black">${Math.round(score/24*100*10)/10}%</div>
                </div>`)
                start.style.display = 'block'
                finish.style.display = 'none'
                testRunning = false
            }
            else {
                newWord()
                inter.focus()
            }
        }
    }
}



function gray(id){
    if (testRunning === false){
        let opt = doneCollection[id]
        if (opt.className === 'firstOption'){
            opt.className = 'secondOption'
        }
        else if (opt.className === 'secondOption'){
            opt.className = 'firstOption'
        }
    }
}

function addTestCategory(list){
    if (testRunning === false){
        if (temporaryArr.includes(list)){
            let index = temporaryArr.indexOf(list)
            temporaryArr.splice(index,1)
            console.log('deleted') 
            console.log(temporaryArr) 
        }
        else{
            temporaryArr.push(list)
            console.log('added') 
            console.log(temporaryArr) 
        }
    }
}
