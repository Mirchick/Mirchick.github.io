let arr1 = [20,62,104,146,188,230,272,314,356,398,440]/*координаты для Х*/
let arr2 = [20,62,104,146,188,230,272,314,356,398,440,482,524,566,608,650,692,734,776]/*координаты для Y*/
let vragi = [{x:arr1[Math.floor(Math.random()*11)],y:arr1[Math.floor(Math.random()*5)]},{x:arr1[Math.floor(Math.random()*11)],y:arr1[Math.floor(Math.random()*5)]},{x:arr1[Math.floor(Math.random()*11)],y:arr1[Math.floor(Math.random()*5)]}]/*список врагов*/
let igra = document.getElementById('igra');/*наш холст*/
let hero = {x:230,y:776};/*герой и его координаты*/
let arrow = {};/*стрела и её координаты*/
let count = 0;/*счёт*/
let end = 3;/*конец игры*/
let enemySpeed = 1;
ctx = igra.getContext('2d');/*2д игра*/ 

const img1 = new Image();/*создание картинки врага*/
img1.src = 'images/enemy.png';/*путь до картинки врага*/

const img2 = new Image();/*создание картинки героя*/
img2.src = 'images/hero.png';/*путь до картинки героя*/

const img3 = new Image();/*создание картинки стрелы*/
img3.src = 'images/arrow.png';/*путь до картинки стрелы*/

const img4 = new Image();/*создание картинки фона*/
img4.src = 'images/fon.png';/*путь до картинки фона*/

const img5 = new Image();/*создание картинки короны*/
img5.src = 'images/crown.png';/*путь до картинки короны*/

document.addEventListener('keydown',sdvig)/*перемещение персонажа*/
function sdvig(event){
	if (event.key == 'ArrowLeft' && hero.x > 60){
		hero.x -= 42;
	}
	else if (event.key == 'ArrowRight' && hero.x < 400){
		hero.x += 42;
	}
	else if (event.key == 'ArrowUp' && hero.y > 60){
		hero.y -= 42;
	}
	else if (event.key == 'ArrowDown' && hero.y < 770){
		hero.y += 42;
	}
	else if (event.code == 'KeyT'){
		arrow.x = hero.x;
		arrow.y = hero.y;
	}
}

function drawGame(){
	ctx.drawImage(img4,0,40)
	for (vrag of vragi){
		ctx.drawImage(img1,vrag.x,vrag.y)
		vrag.y += enemySpeed;/*перемещение врагов*/
	}
	ctx.drawImage(img2,hero.x,hero.y)
	if (arrow){
		ctx.drawImage(img3,arrow.x,arrow.y);
		for (i = 0; i < vragi.length; i++){
            if (vragi[i].y > 850){
                end = 200;
            }
			if (arrow.x == vragi[i].x && vragi[i].y - 40 <= arrow.y && arrow.y <= vragi[i].y + 40){
                vragi.splice(i,1);
                if (end != 100){
                    vragi.push({x : arr1[Math.floor(Math.random()*11)],y : (Math.floor(Math.random()*(-100)-20))});
                    end++;
                }
		        arrow = {};
                count++;
                if (count % 15 == 0 && end != 100){
                    vragi.push({x : arr1[Math.floor(Math.random()*11)],y : (Math.floor(Math.random()*(-100)-20))});
                    end++;  
                }
			}
			if (arrow.y > 30){
				arrow.y -= 5;
			}
			else{
				arrow = {};
			}
		}
	}
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,500,40)
    ctx.font = '28px Arial'
    ctx.fillStyle = 'black';
    ctx.fillText(`Ваш счёт: ${count}`,5,32)
    ctx.fillStyle = 'red';
    if (end == 200){
        ctx.fillRect(50,438,400,80)
        ctx.font = '60px Impact'
        ctx.fillStyle = 'white'; 
        ctx.fillText('ПОРАЖЕНИЕ!',100,502)
        vragi = [{x:146,y:104},{x:146,y:146},{x:146,y:188},{x:146,y:230},{x:146,y:272},{x:146,y:314},{x:146,y:356},{x:188,y:356},{x:230,y:356},{x:272,y:356},{x:314,y:356}];
        enemySpeed = 0;
    }
    if (end == 100 && count == 100){
        ctx.fillStyle = 'red';
        ctx.fillRect(50,438,400,80)
        ctx.font = '60px Impact'
        ctx.fillStyle = 'white'; 
        ctx.fillText('ПОБЕДА!',144,500)
        hero.x = 205;
        hero.y = 400;
        ctx.drawImage(img5,180,304)
    }
}



let gaming = setInterval(drawGame,20)