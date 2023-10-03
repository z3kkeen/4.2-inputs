const canvas = document.createElement('canvas');
canvas.width = 1000;
canvas.height = 700;
const context = canvas.getContext('2d')!;
document.querySelector('#app')!.append(canvas);

let visible1: boolean = false;
let visible2: boolean = false;
let visible3: boolean = false;
let visible4: boolean = false;
let visible5: boolean = false;

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);

 
function onKeyDown(e: any) {
    console.log(e.key)
    if(e.key == 1) {
        visible1 = true;
        console.log(visible1)
        context.beginPath();
        context.arc(100, canvas.height / 2, 80, 0, Math.PI * 2);
        context.fillStyle = 'orange';
        context.fill();
        context.strokeStyle = 'red';
        context.lineWidth = 10;
        context.stroke();
        context.closePath()
    } else if(e.key == 2) {
        visible2 = true;
        console.log(visible1)
        context.beginPath();
        context.arc(300, canvas.height / 2, 80, 0, Math.PI * 2);
        context.fillStyle = 'yellow';
        context.fill();
        context.strokeStyle = 'orange';
        context.lineWidth = 10;
        context.stroke();
        context.closePath()
    } else if(e.key == 3) {
        visible3 = true;
        console.log(visible3)
        context.beginPath();
        context.arc(500, canvas.height / 2, 80, 0, Math.PI * 2);
        context.fillStyle = 'limegreen';
        context.fill();
        context.strokeStyle = 'teal';
        context.lineWidth = 10;
        context.stroke();
        context.closePath()
    } else if(e.key == 4) {
        visible3 = true;
        console.log(visible4)
        context.beginPath();
        context.arc(700, canvas.height / 2, 80, 0, Math.PI * 2);
        context.fillStyle = 'cyan';
        context.fill();
        context.strokeStyle = 'blue';
        context.lineWidth = 10;
        context.stroke();
        context.closePath()
    } else if(e.key == 5) {
        visible3 = true;
        console.log(visible5)
        context.beginPath();
        context.arc(900, canvas.height / 2, 80, 0, Math.PI * 2);
        context.fillStyle = 'violet';
        context.fill();
        context.strokeStyle = 'purple';
        context.lineWidth = 10;
        context.stroke();
        context.closePath()
    }
} 
 
function onKeyUp(e: any) {
    if(e.key == 1) {
        visible1 = false;
        context.clearRect(0, 0, 200, canvas.height);
        console.log(visible1)
    }
    if(e.key == 2) {
        visible2 = false;
        context.clearRect(200, 0, 200, canvas.height);
        console.log(visible2)
    }
    if(e.key == 3) {
        visible3 = false;
        context.clearRect(400, 0, 200, canvas.height);
        console.log(visible3)
    }
    if(e.key == 4) {
        visible4 = false;
        context.clearRect(600, 0, 200, canvas.height);
        console.log(visible4)
    }
    if(e.key == 5) {
        visible5 = false;
        context.clearRect(800, 0, 2000, canvas.height);
        console.log(visible5)
    }
}
