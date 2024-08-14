
var cur = document.querySelector("#cursor");
var curBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    cur.style.left = dets.clientX + "px";
    cur.style.top = dets.clientY + "px";
    curBlur.style.left = dets.clientX -200+ "px";
    curBlur.style.top = dets.clientY -200 + "px";
})


gsap.to("#nav",{
    backgroundColor: "black",
    duration: 1,
    height:"100px",
  
    scrollTrigger: {
        trigger: "#nav",
        start: "-5%",
        scroller:"body",
        end: "bottom top",
        scrub: 1,


    }
    
})

gsap.to("#main",{
    backgroundColor: "black",
    scrollTrigger:{
        trigger:"#main",
        start:"top -50%",
        scroller:"body",
        end:"top -100%",
        scrub:2
    }
})

