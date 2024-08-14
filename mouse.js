let mouserotate = document.querySelector("#main")
let mousemove = document.querySelector("#circle")


mouserotate.addEventListener("mousemove" , function(dets){
    mousemove.style.left = dets.clientX+"px"
    mousemove.style.top = dets.clientY+"px"
})