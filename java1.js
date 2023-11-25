let list = document.querySelector('#list')
let index1
let arr1 = [{'To take':'Брать','turn':false},{'To eat':'Есть (еду)','turn':false},{'To be':'Быть','turn':false},{'To wash':'Мыть','turn':false},{'To bring':'Приносить','turn':false},{'To stay':'Оставаться','turn':false},{'To hold':'Держать','turn':false},{'To swim':'Плавать','turn':false},{'To think':'Думать','turn':false},{'To rise':'Поднимать','turn':false},{'To clean':'Чистить','turn':false},{'To look':'Смотреть','turn':false},{'To love':'Любить','turn':false},{'To create':'Создавать','turn':false},{'To live':'Жить','turn':false},{'To hate':'Ненавидеть','turn':false},{'To dream':'Мечтать','turn':false},{'To lose':'Терять/Проигрывать','turn':false},{'To turn':'Поворачивать','turn':false},{'To add':'Добавлять','turn':false},{'To drink':'Пить','turn':false},{'To die':'Умирать','turn':false},{'To realize':'Осознавать','turn':false},{'To feel':'Чувствовать','turn':false}]
function render(){
    list.innerHTML = ''
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i]['turn'] == false){
            for (key in arr1[i]){
                if (key != 'turn'){
                    list.insertAdjacentHTML("beforeend",`<li class = 'divWords'><div class = 'relative' class = 'noselect'>
                    <p data-index = ${i} data-type = 'kart' class = 'primer2' class = 'noselect' turn = 'false'>${key}</p><button data-index = ${i} data-type = 'delete' class = 'press'>✔</button>
                    </div></li>`)
                }
            }
        }
        else if (arr1[i]['turn'] == true){
            for (key in arr1[i]){
                if (key != 'turn'){
                    list.insertAdjacentHTML("beforeend",`<li class = 'divWords'><div class = 'relative' class = 'noselect'>
                    <p data-index = ${i} data-type = 'kart' class = 'primer3' class = 'noselect' turn = 'true'>${arr1[i][key]}</p><button data-index = ${i} data-type = 'delete' class = 'press'>✔</button>
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
                list.insertAdjacentHTML("beforeend",`<li class = 'divWords'><div class = 'relative' class = 'noselect'>
                <p data-index = ${i} data-type = 'kart' class = 'primer2' class = 'noselect' turn = 'false'>${key}</p><button data-index = ${i} data-type = 'delete' class = 'press'>✔</button>
                </div></li>`)
            }
        }
    }
    else if (arr1[i]['turn'] == true){
        for (key in arr1[i]){
            if (key != 'turn'){
                list.insertAdjacentHTML("beforeend",`<li class = 'divWords'><div class = 'relative' class = 'noselect'>
                <p data-index = ${i} data-type = 'kart' class = 'primer3' class = 'noselect' turn = 'true'>${arr1[i][key]}</p><button data-index = ${i} data-type = 'delete' class = 'press'>✔</button>
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

