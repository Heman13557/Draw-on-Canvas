const canvas  = document.querySelector("#frame");
const cxt = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hue = 0;

cxt.strokeStyle = "#BADASS";
cxt.lineJoin = "round";
cxt.lineCap = "round";


cxt.strokeStyle = `hsl(${hue},100%,50%)`;
cxt.lineWidth =  35;
let drawing = false;
let lx = 0;
let ly = 0;
function draw(e){
    if(!drawing) return;
    cxt.strokeStyle = `hsl(${hue},100%,50%)`;

    console.log(e);
    cxt.beginPath();
    cxt.moveTo(lx,ly);
    cxt.lineTo(e.offsetX, e.offsetY);
    cxt.stroke();
    [lx,ly] = [e.offsetX,e.offsetY];
    hue++;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', ()=>drawing = false);
canvas.addEventListener('mousedown',(e)=> {drawing = true;
    [lx,ly] = [e.offsetX,e.offsetY];
});