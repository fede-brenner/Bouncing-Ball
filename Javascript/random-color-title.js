function randomColor(){
    var letters = document.getElementsByClassName('letter');

    for(let i = 0; i < letters.length; i++){
        letters[i].style.color = "rgb(" + Math.floor(Math.random() * (180 - 0 +1)+ 50) + "," + Math.floor(Math.random()  * (180 - 0 +1)+ 50) + "," + Math.floor(Math.random()  * (180 - 0 +1)+ 50) + ")";
    }
}
function randomColorLoop(){
    var letters = document.getElementsByClassName('letter');

    for(let i = 0; i < letters.length; i++){
        letters[i].style.color = "rgb(" + Math.floor(Math.random() * (180 - 0 +1)+ 50) + "," + Math.floor(Math.random()  * (180 - 0 +1)+ 50) + "," + Math.floor(Math.random()  * (180 - 0 +1)+ 50) + ")";
    }
    setTimeout(function() {
        randomColorLoop();     
    }, 1000);
}