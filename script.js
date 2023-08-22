let video=document.querySelector('video');

console.dir(video)

setTimeout(()=>{    
    let tiempo=video.duration.toFixed(0)/60
    let minutos=Math.trunc(tiempo);
    let segundos=(tiempo-minutos)*60;
    document.querySelector('.duracion').textContent=minutos+":"+segundos.toFixed(0)
}, 2000)



let repro;
const reproducir=()=> {
    video.play()
  let duracionVideo=video.duration.toFixed(0);
  repro= setInterval (()=>{
     document.querySelector('.tiempo-actual').textContent='00:'+video.currentTime.toFixed(0)
 },1000)
 
}

const pausar=()=>{
 video.pause();
 clearInterval(repro)
 document.querySelector('.tiempo-actual').textContent='00:'+video.currentTime.toFixed(0)
}


//------------------------------------JUGUEMOS-----------------------------------------------------------------------------

let imagen1=document.querySelector('#imagen1');
let cajadrop2= document.querySelector('#cajadrop2');



imagen1.addEventListener('dragstart',(event)=>{
    event.dataTransfer.setData("Text","./assets/imagenes/rompe2.png")
    });

cajadrop2.addEventListener('dragover',(event)=>{
    event.preventDefault();
 });

 cajadrop2.addEventListener('drop',(event)=>{
    let datoGuardado= event.dataTransfer.getData("Text");

    cajadrop2.innerHTML=`<img src= ${datoGuardado} alt="rompecabeza2"/>`
 });


let imagen2=document.querySelector('#imagen2');
let cajadrop=document.querySelector('#cajadrop');

imagen2.addEventListener('dragstart',(event)=>{
    event.dataTransfer.setData("Text","./assets/imagenes/rompe1.png")
    });

cajadrop.addEventListener('dragover',(event)=>{
    event.preventDefault();
 });

 cajadrop.addEventListener('drop',(event)=>{
    let datoGuardado= event.dataTransfer.getData("Text");

    cajadrop.innerHTML=`<img src= ${datoGuardado} alt="rompecabeza"/>`
 });


 let imagen3=document.querySelector('#imagen3');
 let cajadrop3=document.querySelector('#cajadrop3');
 
 imagen3.addEventListener('dragstart',(event)=>{
     event.dataTransfer.setData("Text","./assets/imagenes/rompe3.png")
     });
 
 cajadrop3.addEventListener('dragover',(event)=>{
     event.preventDefault();
  });
 
  cajadrop3.addEventListener('drop',(event)=>{
     let datoGuardado= event.dataTransfer.getData("Text");
 
     cajadrop3.innerHTML=`<img src= ${datoGuardado} alt="rompecabeza"/>`
  });

  






// let menu= document.querySelector('.menu');
// let flag=false;
// let contador=0;


// function iniciar(){
//     var imagenes =document.querySelectorAll('#caja-imagenes img');
//      soltar-imagen=document.getElementById('cajadrop');  
//      soltar-imagen2 =document.getElementById('cajadrop2'); 
//      soltar-imagen3 = document.getElementById('cajadrop3'); 

//     for(var i=0; i<imagenes.length; i++){
//         imagenes[i].addEventListener('dragstart', arrastrado, false);
//         // imagenes[i].addEventListener('dragend', finalizado, false);
//     }

//     soltar.addEventListener('dragenter', function(e){
//     e.preventDefault(); }, false);
//     soltar.addEventListener('dragover', function(e){
//     e.preventDefault(); }, false)
      
//     ;
//     soltar.addEventListener('drop', soltado, false);


//     soltar2.addEventListener('dragenter', function(e){
//         e.preventDefault(); }, false);
//     soltar2.addEventListener('dragover', function(e){
//     e.preventDefault(); }, false);
//     soltar2.addEventListener('drop', soltado, false);


//     soltar3.addEventListener('dragenter', function(e){
//         e.preventDefault(); }, false);
//     soltar3.addEventListener('dragover', function(e){
//     e.preventDefault(); }, false);
//     soltar3.addEventListener('drop', soltado, false);

// }
// function arrastrado(e){
//     elemento=e.target;
//     e.dataTransfer.setData('Text', elemento.getAttribute('id'));
// }

// async function soltado(e){
//     e.preventDefault();
//     console.log(e)
//     let id=e.dataTransfer.getData('Text');
//     let imagen=document.getElementById(id);
//     imagen.style.display= 'none';
//      e.target.innerHTML='<img src="'+imagen.src+'" height="400px" width="275px">';
//     contador++


// }
// function reinicio() {
//     window.location.reload();
// }
// iniciar()
// //window.addEventListener('load', iniciar, false);