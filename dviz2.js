let knopka1 = document.getElementById('start1');
let knopka2 = document.getElementById('start2');
let arr1
let bukva = document.getElementById('letter');
let vvod = document.getElementById('vvod');
let rand;
let timer = document.getElementById('time');
let timerStart = 0.0;
let stop = 0;
let result = document.getElementById('finish');
let schet = 0;
let record = 0;
let best = document.getElementById('record')

/*----------------------------------------------------------------------------------------*/

let learning2 = function(){ /*основная программа введения и проверки букв с таймером*/
  if (stop == 0 && timerStart > 0.0){
    vvod.value = ''; /*сброс строки ввода*/
    rand = Math.floor(Math.random() * 26); /*рандомное число от 0 до 26*/
    bukva.innerHTML = arr1[rand]; /*вывод буквы*/
    document.addEventListener('keydown', function (event) {/*проверка нажатия верной клавиши*/
      if (event.code == 'Key' + arr1[rand] && stop == 0){ /*сравнение*/
        schet++;/*успех, плюс 1 балл*/
        result.innerHTML = 'Правильных букв: ' + schet;
        if (record < schet){
          record = schet;
          best.innerHTML = 'Лучший счёт: ' + record;
        }
      learning2();/*повтор функции*/
      }
    })
  }
}

/*-----------------------------------------------------------------------------------*/

let timing = function(){ /*создаем таймер*/
  if (timerStart != 0.0){/*если время еще есть*/
    if (timerStart <= 10.0){
      timer.style.backgroundColor = 'red'
    }
    timerStart = (timerStart - 0.2).toFixed(1);/*уменьшаем время на 0.2 секунды*/
    timer.innerHTML = timerStart;/*отображаем время*/
    setTimeout(timing,195);/*повторяем с данной задержкой*/
  }
  else{/*если время закончилось*/
    stop = 1;
    arr1 = [];
    timer.style.backgroundColor = '#69DC60'
  }
}

/*-----------------------------------------------------------------------------------*/

let learning1 = function(){ /*основная программа введения и проверки букв без времени*/
  vvod.value = '';/*очищаем строку ввода*/
  rand = Math.floor(Math.random() * 26);/*рандомное число от 0 до 26*/
  bukva.innerHTML = arr1[rand];/*рандомная буква*/
  document.addEventListener('keydown', function (event) {/*та ли клавиша нажата*/
    if (event.code == 'Key' + arr1[rand]){/*сравнение*/
      learning1();/*повтор функции*/
    }
  })
}

/*------------------------------------------------------------------------------------*/

let prepar1 = function(){
  arr1 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  timer.innerHTML = '';
  result.innerHTML = '';
  bukva.innerHTML = '-'
  vvod.focus();
}

/*------------------------------------------------------------------------------------*/

let prepar2 = function(){
  arr1 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  stop = 0;
  schet = 0;
  ogran = 0;
  timerStart = 15.0;
  timer.innerHTML = timerStart;
  result.innerHTML = 'Правильных букв: ' + schet;
  vvod.value = '';
  best.innerHTML = 'Лучший счёт: ' + record;
  timer.style.backgroundColor = 'white'
  vvod.focus();
}

/*------------------------------------------------------------------------------------*/

let naVremya = function(){
  if (timerStart == 0.0){
    prepar2();
    timing();
    learning2();
  }
}

let prosto = function(){
  if (timerStart == 0.0){
    prepar1();
    learning1();
  }
}

knopka1.onclick = prosto;
knopka2.onclick = naVremya;