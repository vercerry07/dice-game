var random1 = Math.floor((Math.random() * 6) + 1);
console.log(random1);


var random2 = Math.floor((Math.random() * 6) + 1);
console.log(random2);

let pic1 = document.getElementById("pic1");

let pic2 = document.getElementById("pic2");


/////For 1st block
if(random1 === 1){
    pic1.innerHTML = `<img class="img2" src="images/dice1.png">`;
}

else if(random1 === 2){
    pic1.innerHTML = `<img class="img2" src="images/dice2.png">`;
}

else if(random1 === 3){
    pic1.innerHTML = `<img class="img2" src="images/dice3.png">`;
}

else if(random1 === 4){
    pic1.innerHTML = `<img class="img2" src="images/dice4.png">`;
}

else if(random1 === 5){
    pic1.innerHTML = `<img class="img2" src="images/dice5.png">`;
}

else if(random1 === 6){
    pic1.innerHTML = `<img class="img2" src="images/dice6.png">`;
}

//////For second block

if(random2 === 1){
    pic2.innerHTML = `<img class="img2" src="images/dice1.png">`;
}

else if(random2 === 2){
    pic2.innerHTML = `<img class="img2" src="images/dice2.png">`;   
}

else if(random2 === 3){
    pic2.innerHTML = `<img class="img2" src="images/dice3.png">`;   
}

else if(random2 === 4){
    pic2.innerHTML = `<img class="img2" src="images/dice4.png">`;   
}

else if(random2 === 5){
    pic2.innerHTML = `<img class="img2" src="images/dice5.png">`;   
}

else if(random2 === 6){
    pic2.innerHTML = `<img class="img2" src="images/dice6.png">`;   
}

















