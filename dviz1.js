const collection = document.getElementsByClassName("opisanieObjects")

function changeColor1() {
  for (let elem of collection){
    elem.style.backgroundColor = "white";
  }
}

function changeColor2() {
  for (let elem of collection){
    elem.style.backgroundColor = "#8BA8FF";
  }
}

function askUserName() {
  let person = prompt("Пожалуйста, введите Ваше имя:", "Гость");
  if (person != null) {
    alert("Привет, " + person + "! Как дела?");
  }
}
