
let exampleWord = document.querySelector('#exampleWord')
let examplePhrase = document.querySelector('#examplePhrase')
let arr1 = [{word:'To take',trans:'Взять',phrase:'To take a hat',phraseT:'Взять шляпу'}]
let cardExample = document.querySelector('#cardExample')
let cardExample1 = document.querySelector('#cardExample1')
let exampleWord1 = document.querySelector('#exampleWord1')
let examplePhrase1 = document.querySelector('#examplePhrase1')
let dada = 1
let navigation = document.querySelectorAll('.navigation')
let changing = 0
let hideScroll1 = document.querySelector('#hideScroll')




let {word,trans,phrase,phraseT} = arr1[0]
exampleWord.innerHTML = word
examplePhrase.innerHTML = phrase
let i = 0

cardExample.addEventListener('click',change)

/*document.getElementById('chCl').classList.remove("card text-white bg-primary mb-3");
document.getElementById('chCl').classList.add("card text-bg-secondary mb-3");
document.getElementById('chCl').className = "card text-bg-secondary mb-3"*/

function hideScroll(){
    if (changing == 0){
        for (element of navigation){
            element.style.display = 'none'
        }
        changing++
        hideScroll1.innerHTML = '///'
    }
    else if (changing == 1){
        for (element of navigation){
            element.style.display = 'block'
        }
        changing--
        hideScroll1.innerHTML = 'X'
    }
}

function change(){
    if (i == 1){
        exampleWord.innerHTML = word
        examplePhrase.innerHTML = phrase
        document.getElementById('chCl').className = "card border-dark text-dark bg-light mb-3"
        i--
    }
    else if (i == 0){
        exampleWord.innerHTML = trans
        examplePhrase.innerHTML = phraseT
        document.getElementById('chCl').className = "card border-dark text-bg-dark mb-3"
        i++
    }
}

function prikol(){
    alert('Шутки шутками, но понятно ведь, что карточка исчезнет?')
}

function replacing(){
    if (dada == 1){
        cardExample1.style.backgroundImage = 'url(images/wall.jpg)'
        cardExample1.style.backgroundSize = 'cover'
        exampleWord1.innerHTML = ''
        examplePhrase1.innerHTML = ''
        dada--
        setTimeout(prikol,2000)
    }
    else if (dada == 0){
        cardExample1.style.backgroundImage = 'initial'
        exampleWord1.innerHTML = 'To live'
        examplePhrase1.innerHTML = 'To live long'
        dada++
    }
}
