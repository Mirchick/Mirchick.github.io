
let exampleWord = document.querySelector('#exampleWord')
let examplePhrase = document.querySelector('#examplePhrase')
let arr1 = [{word:'To take',trans:'Взять',phrase:'To take a hat',phraseT:'Взять шляпу'}]
let cardExample = document.querySelector('#cardExample')

let {word,trans,phrase,phraseT} = arr1[0]
exampleWord.innerHTML = word
examplePhrase.innerHTML = phrase
let i = 0

cardExample.addEventListener('click',change)

/*document.getElementById('chCl').classList.remove("card text-white bg-primary mb-3");
document.getElementById('chCl').classList.add("card text-bg-secondary mb-3");
document.getElementById('chCl').className = "card text-bg-secondary mb-3"*/

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
