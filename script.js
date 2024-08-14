var timeout;
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
function chotaBadaMouse() {
  var ScaleX = 1;
  var ScaleY = 1;

  var xprev = 0;
  var yprev = 0;
  window.addEventListener("mousemove", function (dets) {
   clearTimeout(timeout)
      ScaleX =  gsap.utils.clamp(1, 2  , dets.clientX - xprev) 
      ScaleY =   gsap.utils.clamp(1 , 2  ,dets.clientY - yprev)
    
    xprev = dets.clientX;
    yprev = dets.clientY;
    circleMouseFollower(ScaleX , ScaleY)
   setTimeout(function (){
    timeout =  document.querySelector("#semicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${1} , ${1})`;
   },100)
  
  });
}
chotaBadaMouse();
function firstPageAnime() {
  var tl = gsap.timeline();
  tl.from("#nav", {
    y: -10,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 2,
  });
  tl.to("#boundingelem", {
    ease: Expo.easeInOut,
    y: 0,
    duration: 2,
    delay: -1,
    stagger: 0.2,
  });
  tl.from(".last-heading", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut,
  });
}
function circleMouseFollower(ScaleX , ScaleY) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector("#semicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${ScaleX} , ${ScaleY})`;
    // console.log(dets.clientX , dets.clientY);
  });
}
circleMouseFollower();
firstPageAnime();


document.querySelectorAll(".elem").forEach(function(elem){
  var rotate = 0 ; 
  var diffrote = 0;

  elem.addEventListener("mouseleave" , function(dets){
    
        gsap.to(elem.querySelector("img") , {
          opacity:0,
          ease :Power3,
          duration:1,

        })
      });
  elem.addEventListener("mousemove" , function(dets){
var diff  = dets.clientY - elem.getBoundingClientRect().top
  diffrote = dets.clientX - rotate ; 
  rotate = dets.clientX;

    gsap.to(elem.querySelector("img") , {
      opacity:1,
      ease :Power3,
      top:diff,
      left:dets.clientX,
    rotate:  gsap.utils.clamp(-20 , 20 , diffrote)
    })
  });

});
// let content = document.querySelector(".elem");

// content.forEach(function(content){
// content.addEventListener("mousemove" , function(dets){
//   gsap.to(content.querySelector("img") , {
//     opacity :1,
//     ease:Power1,
//   })
// })
// })

  
