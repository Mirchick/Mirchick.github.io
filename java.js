
let prim1 = document.querySelector('#primer1')
let i = 0
prim1.innerHTML = 'To take'
prim1.style.backgroundColor = '#FFB040'



function change1(){
    if (i == 0){
        prim1.style.backgroundColor = '#3CB635'
        prim1.innerHTML = 'Брать'
        i++
    }
    else if (i == 1){
        prim1.style.backgroundColor = '#FFB040'
        prim1.innerHTML = 'To take'
        i--
    }
}

prim1.addEventListener('click',change1)