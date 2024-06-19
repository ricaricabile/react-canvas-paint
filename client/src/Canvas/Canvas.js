// import { useRef } from 'react';
// import { useEffect } from 'react';
// const Canvas = props => {
//     const layerRef = useRef();
//     const frontRef = useRef();
//     const shapesRef = useRef();
//     const navRef = useRef();
//     useEffect(() => {
//         var screenWidth = layerRef.current.width;
//         var screenHeight = layerRef.current.height;
    
//         //plate
//         var front = frontRef.current;
//         front.width = screenWidth;
//         front.height = screenHeight;
//         var frontCont = front.getContext('2d');
    
//         //canvas to store shapes
//         var shapes = shapesRef.current;
//         shapes.width = screenWidth;
//         shapes.height = screenHeight;
//         var shapesCont = shapes.getContext('2d');
    
//         //canvas to navigate
//         var nav = navRef.current;
//         nav.width = screenWidth;
//         nav.height = screenHeight;
//         var navCont = nav.getContext('2d');
    
//         frontCont.fillStyle = '#999';
//         frontCont.strokeRect(0, 0, screenWidth, screenHeight);
//         frontCont.fillRect(0, 0, screenWidth, screenWidth);
    
//         var initialx = 0, initialy = 0, currentx = 0, currenty = 0, px = 0, py = 0;
//         var dx, dy;
//         var draw = false, isDrawing=false;
//         var width=0, height=0;
//         //default
//         var color = "black";
//         var shape = "box";
    
//         // $(document).on('click', '.colors', function () {
//         //     color = $(this).attr('id');
//         // });
//         // $(document).on('click', '.shapes', function () {
//         //     shape = $(this).attr('id');
//         // });
//         function drawBox(ctxboard, initialX, initialY, width, height) {
//             ctxboard.lineWidth = 2.124;
//             ctxboard.beginPath();
//             ctxboard.strokeStyle = color;
//             ctxboard.strokeRect(initialX, initialY, width, height);
//         }
//         function drawCirc(ctxboard, initialX, initialY, width, height) {
//             ctxboard.lineWidth = 2.124;
//             ctxboard.beginPath();
//             ctxboard.strokeStyle = color;
//             ctxboard.arc(initialX + width, initialY + height, Math.abs(width), 0, 2 * Math.PI, false);
//             ctxboard.stroke();
//         }
//         function drawLine(ctxboard, initialX, initialY, currX, currY) {
//             ctxboard.lineWidth = 2.124;
//             ctxboard.beginPath();
//             ctxboard.strokeStyle = color;
//             ctxboard.moveTo(initialX, initialY);
//             ctxboard.lineTo(currX, currY);
//             ctxboard.stroke();
//         }
//         function drawFree(ctxboard, penX, penY, currX, currY) {
//             ctxboard.lineWidth = 2.124;
//             ctxboard.beginPath();
//             ctxboard.strokeStyle = color;
//             ctxboard.moveTo(penX, penY);
//             ctxboard.lineTo(currX, currY);
//             ctxboard.stroke();
//         }
//         function resetBoard(ctxboard) {
//             ctxboard.clearRect(0, 0, screenWidth, screenHeight);
//         }
//         nav.addEventListener('dblclick', function (mouse) {
//             console.log('dbl');
//         }, false);
//         nav.addEventListener('mousedown', function (mouse) {
//                 px = initialx = mouse.offsetX;
//                 py = initialy = mouse.offsetY;
//                 draw = true;
//                 isDrawing = false;
//                 console.log('hello');
//         }, false);
//         nav.addEventListener('mousemove', function (mouse) {
//             currentx = mouse.offsetX;	
//             currenty = mouse.offsetY;
//             width = (currentx - initialx);
//             height = (currenty - initialy);
//             isDrawing = true;
//             if (draw) {
//                     resetBoard(navCont);
//                     drawShape(selectCtx(), initialx, initialy, width, height, currentx, currenty, px, py);
//                     px = currentx; py = currenty;
//             } else {
//                     // resetVar();
//             } 
//             selectCtx(shape);
//         }, false);
//         nav.addEventListener('mouseup', function (mouse) {
//             console.log("mouse up x: " +currentx+" y: "+currenty);
//                 resetBoard(navCont);
//                 if (isDrawing && draw) {
//                     drawShape(shapesCont, initialx, initialy, width, height, currentx, currenty, px, py);
//                 }
//                 // resetVar();
//         }, false);
    
    
        
//         // let resetVar = ()=>{ 
//         //     initialx = 0; initialy = 0; width = 0; height = 0; px = 0, py = 0; draw = false;
//         //     currentx = 0; currenty = 0; isDrawing = false;
//         //     return;
//         // }
    
    
    
//         function checkBoundery(currX,currY){
//             if(currX >= 1 && currX <= screenWidth && currY >= 1 && currY <= screenHeight){
//                 return true;
//             }else{
//                 return false;
//             }
//         }
    
    
    
//         function selectCtx(){
//             if(shape == "pen"){
//                 return shapesCont;
//             }else{
//                 return navCont;
//             }	
//         }
    
    
    
//         function drawShape(ctxToDraw, initialX, initialY, width, height, currX, currY, penX, penY) {
//             switch (shape) {
//                 // case "box":    drawBox(ctxToDraw, initialX, initialY, width, height);  break;
    
//                 // case "circle": drawCirc(ctxToDraw, initialX, initialY, width, height); break;
    
//                 // case "line":   drawLine(ctxToDraw, initialX, initialY, currX, currY);  break;
    
//                 // case "pen":    drawFree(ctxToDraw, penX, penY, currX, currY);          break;
//                 default: drawFree(ctxToDraw, penX, penY, currX, currY); break;
//             }
//         }
//       });
    
//     // return <canvas ref = {ref} {...props}/>
//     return <div>
//         <div class="container" style={{width: '50%', zIndex: 0}}>
//     <div class="btn-group btn-group-justified" style={{width: '50%', marginLeft: '13%'}}>
//         <a href="#" id="box" class="btn btn-primary outline shapes" style={{backgroundColor: 'white'}}><i class="far fa-square"></i></a>
//         <a href="#" id="circle" class="btn btn-primary outline shapes" style={{backgroundColor: 'white'}}><i class="far fa-circle"></i></a>
//         <a href="#" id="line" class="btn btn-primary outline shapes" style={{backgroundColor: 'white'}}><i class="fas fa-grip-lines"></i></a>
//         <a href="#" id="pen" class="btn btn-primary outline shapes" style={{backgroundColor: 'white'}}><i class="fas fa-pencil-alt"></i></a>
//     </div>
//     <div class="btn-group btn-group-justified" style={{width: '50%', marginLeft: '13%'}} >
//         <a href="#" id="white" class="btn btn-primary colors" style={{backgroundColor: 'white'}}></a>
//         <a href="#" id="black" class="btn btn-primary colors" style={{backgroundColor: 'black'}}> </a>
//         <a href="#" id="silver" class="btn btn-primary colors" style={{backgroundColor: 'silver'}}></a>
//         <a href="#" id="red" class="btn btn-primary colors" style={{backgroundColor: 'red'}}> </a>
//         <a href="#" id="yellow" class="btn btn-primary colors" style={{backgroundColor: 'yellow'}}></a>
//         <a href="#" id="green" class="btn btn-primary colors" style={{backgroundColor: 'green'}}> </a>
//         <a href="#" id="blue" class="btn btn-primary colors" style={{backgroundColor: 'blue'}}></a>
//         <a href="#" id="violet" class="btn btn-primary colors" style={{backgroundColor: 'violet'}}> </a>
//     </div>
// </div>


//     <div ref = {layerRef} class="layer" style={{zIndex: 0}} >
//         <canvas ref = {frontRef} id="front" style= {{position: 'absolute', zIndex: 0}}>
//         </canvas>
//         <canvas ref = {shapesRef} id="shapes" style= {{position: 'absolute', zIndex: 0}}>
//         </canvas>
//         <canvas ref = {navRef}id="nav" style= {{position: 'absolute', zIndex: 0}}>
//         </canvas>
//     </div>
//     </div>
// }


// export default Canvas;