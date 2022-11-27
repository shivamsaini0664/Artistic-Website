const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.4 });
tl.to(".slider", { y: "-100%", duration: 1, delay: 0.5 });
tl.to(".intro", { x: "100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".about99", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");




var mom2= $("#mom23")[0];
$(".Mind")
.mouseenter(function() {
    mom2.play();
})
.mouseleave(function(){
    mom2.pause();
});






var IF= $("#Letme")[0];
$(".Icarus")
.mouseenter(function() {
    IF.play();
})
.mouseleave(function(){
    IF.pause();
});

var NIL= $("#outside")[0];
$(".NoBody")
.mouseenter(function() {
    NIL.play();
})
.mouseleave(function(){
    NIL.pause();
});




