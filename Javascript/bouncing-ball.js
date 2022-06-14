const refreshBtn = document.getElementById('refresh-btn');
const refreshIcon = document.getElementById('refresh-icon');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const ctatext = document.getElementById('cta-text');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

var particleArray = [];

const mouse = {
    x: undefined,
    y: undefined,
};

canvas.addEventListener('click', (e)=>{
    mouse.x = e.x;
    mouse.y = e.y;

    var amountofballs = document.getElementById('amount-of-balls').value
    for(let i = 0; i < amountofballs; i++){
        particleArray.push(new Ball());
    }
    
    ctatext.style.visibility='hidden'
});
var i = 1;
function addBalls(){
    mouse.x = window.innerWidth/2;
    mouse.y = window.innerHeight/2;

    setTimeout(function() {
        particleArray.push(new Ball());
        i++;
        if (i < 50) {
            addBalls();
        }
    }, 50);
}

function Ball(){
    this.x = mouse.x;
    this.y = mouse.y;
    try{
        this.gravity = document.querySelector('#gravity').value;
        this.friction = document.querySelector('#bounciness').value;
        this.size = document.getElementById('size-of-balls').value;
        this.speed = document.getElementById('speed-of-balls').value
    }catch{
        this.gravity = 0.5;
        this.friction = 0.9;
        this.size = 20;
        this.speed = 3;
    }
    
    this.color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256)+ "," + Math.floor(Math.random() * 256) + ")";
    this.direction = Math.random() * Math.PI * 2;
    this.dx = Math.cos(this.direction);
    this.dy = Math.sin(this.direction);

    this.gravityoff = function(){
        var precision = 1000;
        if(this.y - canvas.height + this.size *1 + this.dy> 0){
            this.dy -= Math.floor(Math.random() * (3 * precision - 1 * precision) + 1 * precision)/(1*precision);
        }
    };
    this.update = function(){
        this.x += this.dx * this.speed;
        this.y += this.dy * this.speed;
        if(this.x - this.size < 0 || this.x - canvas.width + this.size *1> 0){
            this.dx = -this.dx;
        }
        if(this.y - this.size + this.dy < 0 || this.y - canvas.height + this.size *1 + this.dy> 0){
            try{
                if(document.getElementById('gravity-btn').textContent=="Gravity: ON"){
                    this.dy = -this.dy * this.friction;
                }else{
                    this.dy = -this.dy;
                }
            }
            catch{
                this.dy = -this.dy;
            }
        }else{
            try{
                if(document.getElementById('gravity-btn').textContent=="Gravity: ON"){
                    this.dy += this.gravity*1;
                }
            }
            catch{}
        }   
    };
    this.draw = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    };
};

function GravityOff(){
    for(let i = 0; i< particleArray.length; i++){
        particleArray[i].gravityoff();
    }
}

function handle(){
    for(let i = 0; i< particleArray.length; i++){
        particleArray[i].draw();
        particleArray[i].update();
    }
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handle();
    requestAnimationFrame(animate);
}

function refresh(){
    particleArray = [];
    ctatext.style.visibility='visible'
}
animate();

refreshBtn.addEventListener('click', (e)=>{
    refreshIcon.style.animation = '0.4s ease-in 0s 1 rotate360';
    setTimeout(function() {
        refreshIcon.style.animation = 'none';
    }, 400);
});