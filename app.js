const inputElem = document.getElementById('input')
const createBtn = document.getElementById('button')
const listt = document.getElementById('list')
const notes = [{title:'Любить Аню',done:false},{title:'Целовать Аню',done:false}]

function render(){
    listt.innerHTML = ''
    for (let index = 0; index < notes.length; index++){
        listt.insertAdjacentHTML("beforeend",`<li class = 'zametka'>
        <span class = "${notes[index].done ? 'gifa': ''}">${notes[index].title}</span><span><button class = 'remove' data-index = '${index}' data-type = 'rem'>X</button></span><span><button class = 'done' data-index = '${index}' data-type = 'toggle'>✓</button></span>`)
    }
    if (notes.length == 0){
        listt.innerHTML = `<p id = 'net'>Нет элементов</p>`
    }
}

render()

createBtn.onclick = function(){
    if (inputElem.value){
        notes.push({title:inputElem.value,done:false})
        listt.insertAdjacentHTML("beforeend",`<li class = 'zametka'>
        <span>${inputElem.value}</span>
        </li>`)
        inputElem.value = ''
        render()
    }
}

listt.onclick = function(event){
    if (event.target.dataset.index){
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type
        if (type === 'toggle'){
            notes[index].done = !notes[index].done
            render()
        }
        else if (type === 'rem'){
            notes.splice(index,1)
            render()
        }
    }
}
