const configBtn = document.getElementById('small-config-btn');
x = document.getElementById('config-menu-background');
c = document.getElementById('config-menu');
configBtnExit = document.getElementById('config-exit');

configBtn.addEventListener('click', (e) => {
    x.style.display = "block";
    c.style.display = "block";
})
configBtnExit.addEventListener('click', (e) => {
    x.style.display = "none";
    c.style.display = "none";
})

function controlbar(){
    m = document.getElementById('control-bar-btn').textContent;

    if(m =="Control bar: ON"){
       document.getElementById('control-bar-btn').textContent = "Control bar: OFF";
       document.getElementById('control-bar').style.opacity = 0;
       document.getElementById('control-bar').style.pointerEvents = 'none';
    }
    else{ 
        document.getElementById('control-bar-btn').textContent = "Control bar: ON";
        document.getElementById('control-bar').style.opacity = 0.9;
        document.getElementById('control-bar').style.pointerEvents = 'all';
    }
}