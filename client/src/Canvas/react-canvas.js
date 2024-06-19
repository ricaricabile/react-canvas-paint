import {useRef, useEffect, useState} from 'react';
let tool = 'pen';
let color = 'black';
const ReactCanvas = props => {
    let percent = 0;
    
    let currentx = 0, currenty=0,currentxx = 0, currentyy=0, initialX = 0, initialY =0, startDrawing = false;
    let width = 0;
    let height = 0;
    var onresize = function(e) {
     }
    window.addEventListener("resize", onresize);
    window.addEventListener("load", function() {
        onresize();
    });
    useEffect(()=> {
        let canvas = document.getElementById('front');
        let navig = document.getElementById('back');

        percent = 75 / 100;
        canvas.width = window.screen.availWidth * percent;
        percent = 70 / 100;
        canvas.height = window.screen.availHeight * percent;
        const context = canvas.getContext('2d');
        const drawCanvas = () => {
            context.lineWidth = 2.124;
            context.beginPath();
            context.strokeStyle = 'black';
            context.moveTo(0, 0);
            context.lineTo(canvas.width, 0);
            context.stroke();
            context.moveTo(0, 0);
            context.lineTo(0, canvas.height);
            context.stroke();
            context.moveTo(canvas.width, 0);
            context.lineTo(canvas.width, canvas.height);
            context.stroke();
            context.moveTo(canvas.width, canvas.height);
            context.lineTo(0, canvas.height);
            context.stroke();
        }
        drawCanvas();
        
        percent = 75 / 100;
        navig.width = window.screen.availWidth * percent;
        percent = 70 / 100;
        navig.height = window.screen.availHeight * percent;
        const ctxnavig = navig.getContext('2d');

        canvas.addEventListener('mousemove', function (mouse) {
            console.log('move', tool);
            if(startDrawing && tool =='pen'){
               context.lineWidth = 2.124;
               context.beginPath();
               context.strokeStyle = color;
               context.moveTo(currentx, currenty);
               context.lineTo(mouse.offsetX, mouse.offsetY);
               context.stroke();
               currentx = mouse.offsetX;	
               currenty = mouse.offsetY;
            }

            if(startDrawing && tool =='line'){
                ctxnavig.clearRect(0, 0, navig.width, navig.height);
                ctxnavig.lineWidth = 2.124;
                ctxnavig.beginPath();
                ctxnavig.strokeStyle = color;
                ctxnavig.moveTo(currentx, currenty);
                ctxnavig.lineTo(mouse.offsetX, mouse.offsetY);
                ctxnavig.stroke();
             }
            
             if(startDrawing && tool =='box'){
                ctxnavig.clearRect(0, 0, navig.width, navig.height);
                width = (mouse.offsetX - currentx);
                height = (mouse.offsetY - currenty);
                ctxnavig.lineWidth = 2.124;
                ctxnavig.beginPath();
                ctxnavig.strokeStyle = color;
                ctxnavig.strokeRect(currentx, currenty, width, height);
             }
             if(startDrawing && tool =='circle'){
                ctxnavig.clearRect(0, 0, navig.width, navig.height);
                width = (mouse.offsetX - currentx);
                height = (mouse.offsetY - currenty);
                ctxnavig.lineWidth = 2.124;
                ctxnavig.beginPath();
                ctxnavig.strokeStyle = color;
                ctxnavig.arc(currentx + width, currenty + height, Math.abs(width), 0, 2 * Math.PI, false);
                ctxnavig.stroke();
             }
    }, false);
    canvas.addEventListener('mousedown', function (mouse) {
        console.log('mouse down', tool);
            currentx = mouse.offsetX;	
            currenty = mouse.offsetY;
            startDrawing = true;
            console.log('tool', tool);
        }, false);
   canvas.addEventListener('mouseup', function (mouse) {
        startDrawing = false;
        console.log('mouseup', tool);
        if( tool =='line'){
            ctxnavig.clearRect(0, 0, navig.width, navig.height);
            context.lineWidth = 2.124;
            context.beginPath();
            context.strokeStyle = color;
            context.moveTo(currentx, currenty);
            context.lineTo(mouse.offsetX, mouse.offsetY);
            context.stroke();
         }
         
         if(tool =='box'){
            width = (mouse.offsetX - currentx);
            height = (mouse.offsetY - currenty);   
            ctxnavig.clearRect(0, 0, navig.width, navig.height);
            context.lineWidth = 2.124;
            context.beginPath();
            context.strokeStyle = color;
            context.strokeRect(currentx, currenty, width, height);
             }
         if(tool =='circle'){
                ctxnavig.clearRect(0, 0, navig.width, navig.height);
                width = (mouse.offsetX - currentx);
                height = (mouse.offsetY - currenty);
                context.lineWidth = 2.124;
                context.beginPath();
                context.strokeStyle = color;
                context.arc(currentx + width, currenty + height, Math.abs(width), 0, 2 * Math.PI, false);
                context.stroke();
             }
    }, false);
    document.getElementById('pen').onclick = function(){
        tool ="pen";
    }
    document.getElementById('line').onclick = function(){
        tool ="line";
    }
    document.getElementById('box').onclick = function(){
        tool ="box";
    }
    document.getElementById('circle').onclick = function(){
        tool = "circle";
    }
    document.getElementById('red').onclick = function(){
        color ="red";
    }
    document.getElementById('pink').onclick = function(){
        color ="pink";
    }
    document.getElementById('Orange').onclick = function(){
        color ="Orange";
    }
    document.getElementById('Yellow').onclick = function(){
        color = "Yellow";
    }
    document.getElementById('Blue').onclick = function(){
        color ="Blue";
    }
    document.getElementById('Brown').onclick = function(){
        color ="Brown";
    }
    document.getElementById('Purple').onclick = function(){
        color ="Purple";
    }
    document.getElementById('Green').onclick = function(){
        color = "Green";
    }
    document.getElementById('clear').onclick = function(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawCanvas();
    }
    }, [])
    
    return <><canvas style={{position: 'absolute', zIndex: 1}} id="front"  {...props}  /> <canvas style={{position: 'absolute', zIndex: 0}} id="back"  {...props}/></>
}

export default ReactCanvas;