const configBtn = document.getElementById('small-config-btn');
x = document.getElementById('config-menu-background');
c = document.getElementById('config-menu');
configBtnExit = document.getElementById('config-exit');
configMenuBackground = document.getElementById('config-menu-background');

configBtn.addEventListener('click', (e) => {
    x.style.display = "block";
    c.style.animation = '0.2s ease-in 0s 1 slideInFromLeft';
    c.style.display = "block";
    
})
configBtnExit.addEventListener('click', (e) => {
    x.style.display = "none";
    c.style.animation = '0.2s ease-in 0s 1 slideOutFromLeft';
    setTimeout(function() {
        c.style.display = "none";
    }, 201);
    
})
configMenuBackground.addEventListener('click', (e) => {
    x.style.display = "none";
    c.style.animation = '0.2s ease-in 0s 1 slideOutFromLeft';
    setTimeout(function() {
        c.style.display = "none";
    }, 201);
})

function controlbar(){
    m = document.getElementById('control-bar-btn').textContent;

    if(m =="Control bar: ON"){
        document.getElementById('control-bar-btn').textContent = "Control bar: OFF";
        document.getElementById('control-bar').style.display = 'none';
        document.getElementById('top-bar').style.justifyContent = 'flex-end';
    }
    else{ 
        document.getElementById('control-bar-btn').textContent = "Control bar: ON";
        document.getElementById('control-bar').style.display = 'flex';
        document.getElementById('top-bar').style.justifyContent = 'space-between';
    }
}
function Gravity(){
    m = document.getElementById('gravity-btn').textContent;
    var elems = document.getElementsByClassName('control-gravity');

    if(m =="Gravity: ON"){
        document.getElementById('control-bar').style.gridTemplateColumns = 'repeat(4, auto)';
        document.getElementById('gravity-btn').textContent = "Gravity: OFF";
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'none';
        }
    }
    else{ 
        document.getElementById('control-bar').style.gridTemplateColumns = 'repeat(6, auto)';
        document.getElementById('gravity-btn').textContent = "Gravity: ON";
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'block';
        }
    }
}