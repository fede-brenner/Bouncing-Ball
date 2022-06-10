const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const ctatext = document.getElementById('cta-text');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

const particleArray = [];

const mouse = {
    x: undefined,
    y: undefined,
};

canvas.addEventListener('click', (e)=>{
    mouse.x = e.x;
    mouse.y = e.y;

    var amountofballs = document.getElementById('amount-of-balls').value
    for(let i = 0; i < amountofballs; i++){
        particleArray.push(new Particle());
    }
    ctatext.style.visibility='hidden'
});

class Particle{
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        
        this.color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256)+ "," + Math.floor(Math.random() * 256) + ")";
        
        this.size = document.getElementById('size-of-balls').value;

        
        this.direction = Math.random() * Math.PI * 2;

        this.speed = document.getElementById('speed-of-balls').value

        
    }
    update(){
        this.x += Math.cos(this.direction) * this.speed;
        this.y += Math.sin(this.direction) * this.speed;
        if(this.x - this.size < 0 || this.x - canvas.width + this.size *1> 0){
            this.direction = Math.atan2(Math.sin(this.direction),Math.cos(this.direction)*-1);
        }
        if(this.y - this.size < 0 || this.y - canvas.height + this.size *1> 0){
            this.direction = Math.atan2(Math.sin(this.direction)*-1,Math.cos(this.direction));
        }
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}

function handle(){
    for(let i = 0; i< particleArray.length; i++){
        particleArray[i].draw();
        particleArray[i].update();
    }
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    handle();
    requestAnimationFrame(animate);
}

animate();        