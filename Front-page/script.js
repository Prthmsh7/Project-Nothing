var crsr=document.querySelector("#cursor")
var blr=document.querySelector("#blur")
var navmenu=document.querySelectorAll("#menu h3")

document.addEventListener("mousemove",function(dets){
    gsap.to(crsr,{
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.8
    }),
    gsap.to(blr,{
        x: dets.clientX,
        y: dets.clientY,
        duration: 1,
        delay: 0.3
    })
    gsap.to("#colon-div h2",{
        transform: `translate(${-dets.clientX*.02}px, ${-dets.clientY*.02}px)`,
        duration: 0.5
    })
})
gsap.to("#nav", {
    backgroundColor: "#000",
    height: "13vh",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        scrub: 1,
        start: "top -20%",
        end: "top -11%"
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        scrub: 1,
        start: "top -30%",
        end: "top -80%"
    }
})
gsap.to("#top-colon",{
    top: "10px",
    left: "100px",
    scrollTrigger:{
        trigger: "#top-colon",
        scroller: "body",
        scrub: 1,
        start: "top 70%",
        end: "center center",
        // markers: true
    }
})
gsap.to("#bottom-colon",{
    bottom: "10px",
    right: "120px",
    scrollTrigger:{
        trigger: "#bottom-colon",
        scroller: "body",
        scrub: 1,
        start: "top 100%",
        end: "top 80%",
        // markers: true
    }
})


