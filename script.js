let video=document.querySelector('video');

console.dir(video)

setTimeout(()=>{    
    document.querySelector('.duracion').textContent='00:'+video.duration.toFixed(0)
},2000)

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
 document.querySelector('.tiempo-actual').textContent=video.currentTime
}

