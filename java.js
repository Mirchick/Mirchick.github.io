let a
let help
const result = document.getElementById('nameSmall')
function fullDate1(){
    if (help === 0){
        let now = new Date()
        a = (now.toString().slice(0,25))
        result.innerHTML = a
    }
}

function dateOnly1(){
    if (help === 1){
        let now = new Date()
        a = (now.toDateString())
        result.innerHTML = a
    }
}

function timeOnly1(){
    if (help === 2){
        let now = new Date()
        a = (now.toTimeString().slice(0,9))
        result.innerHTML = a
    }
}

function fullDate(){
    help = 0
    setInterval(fullDate1,500)
}

function dateOnly(){
    help = 1
    dateOnly1()
}

function timeOnly(){
    help = 2
    setInterval(timeOnly1,500)
}