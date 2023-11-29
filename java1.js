let list = document.querySelector('#list')
let index1
let maker1 = document.querySelector('#maker1')
let maker2 = document.querySelector('#maker2')
let submit = document.querySelector('#submit')

let arr1 = [{'To take':'Брать','turn':false},{'To eat':'Есть','turn':false},{'To be':'Быть','turn':false},{'To wash':'Мыть','turn':false},{'To bring':'Приносить','turn':false},{'To stay':'Оставаться','turn':false},{'To hold':'Держать','turn':false},{'To swim':'Плавать','turn':false},{'To think':'Думать','turn':false},{'To rise':'Поднимать','turn':false},{'To clean':'Чистить','turn':false},{'To look':'Смотреть','turn':false},{'To love':'Любить','turn':false},{'To create':'Создавать','turn':false},{'To live':'Жить','turn':false},{'To hate':'Ненавидеть','turn':false},{'To dream':'Мечтать','turn':false},{'To lose':'Проигрывать','turn':false},{'To turn':'Поворачивать','turn':false},{'To add':'Добавлять','turn':false},{'To drink':'Пить','turn':false},{'To die':'Умирать','turn':false},{'To realize':'Осознавать','turn':false},{'To feel':'Чувствовать','turn':false}]

info = document.cookie
info = info.split(';')

if (document.cookie != ''){
    for (elem1 of info){
        splitted = elem1.split('=')
        objNew1 = {}
        objNew1[splitted[0]] = splitted[1]
        objNew1['turn'] = false 
        arr1.unshift(objNew1)
    }
}

function render(){
    list.innerHTML = ''
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i]['turn'] == false){
            for (key in arr1[i]){
                if (key != 'turn'){
                    list.insertAdjacentHTML("beforeend",`<li class = 'divWords'><div class = 'relative'>
                    <p data-index = ${i} data-type = 'kart' class = 'primer2' turn = 'false'>${key}</p><button data-index = ${i} data-type = 'delete' class = 'press'>✔</button>
                    </div></li>`)
                }
            }
        }
        else if (arr1[i]['turn'] == true){
            for (key in arr1[i]){
                if (key != 'turn'){
                    list.insertAdjacentHTML("beforeend",`<li class = 'divWords'><div class = 'relative'>
                    <p data-index = ${i} data-type = 'kart' class = 'primer3' turn = 'true'>${arr1[i][key]}</p><button data-index = ${i} data-type = 'delete' class = 'press'>✔</button>
                    </div></li>`)
                }
            }   
        }
    }
}

for (let i = 0; i < arr1.length; i++){
    if (arr1[i]['turn'] == false){
        for (key in arr1[i]){
            if (key != 'turn'){
                list.insertAdjacentHTML("beforeend",`<li class = 'divWords'><div class = 'relative'>
                <p data-index = ${i} data-type = 'kart' class = 'primer2' turn = 'false'>${key}</p><button data-index = ${i} data-type = 'delete' class = 'press'>✔</button>
                </div></li>`)
            }
        }
    }
    else if (arr1[i]['turn'] == true){
        for (key in arr1[i]){
            if (key != 'turn'){
                list.insertAdjacentHTML("beforeend",`<li class = 'divWords'><div class = 'relative'>
                <p data-index = ${i} data-type = 'kart' class = 'primer3' turn = 'true'>${arr1[i][key]}</p><button data-index = ${i} data-type = 'delete' class = 'press'>✔</button>
                </div></li>`)
            }
        }   
    }
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

function showMaker(){
    maker1.style.display = 'block'
    maker2.style.display = 'block'
    submit.style.display = 'block'
}

function addition(){
    if (!maker1.value || !maker2.value){
        alert('Необходимо заполнить все поля')
    }
    else{
        objNew = {}
        objNew[`${maker1.value}`] = maker2.value
        objNew[`turn`] = false
        arr1.unshift(objNew)
        document.cookie = `${maker1.value}=${maker2.value};max-age=360000`
        maker1.value = ''
        maker2.value = ''
        maker1.style.display = 'none'
        maker2.style.display = 'none'
        submit.style.display = 'none'
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


console.log(info)


