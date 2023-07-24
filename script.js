let video= document.querySelector('video');
let video2= document.querySelector("#video-2")

setTimeout(()=>{    
    document.querySelector('.duracion').textContent='00:'+video.duration.toFixed(0)
},2000)

let repro;
const reproducir=()=>{
    video.play();
    let duracionVideo=video.duration.toFixed(0);

   repro= setInterval(()=>{
    document.querySelector('.tiempo-actual').textContent='00:'+video.currentTime.toFixed(0)
   },1000)
}

const pausar=()=>{
    video.pause();
    clearInterval(repro)
  
}


const verDuracion=()=>{
    let duracion=video2.duration
 console.log(duracion)
 if(duracion >= 60){
   let minutos= parseInt(duracion/ 60 )
   console.log(minutos);
   let segundos =parseInt((duracion - minutos*60))
    console.log(segundos)

    document.querySelector(".duracion-2").textContent=minutos +":"+ segundos;

 }
}