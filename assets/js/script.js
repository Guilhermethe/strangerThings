gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText)

ScrollSmoother.create({
	smooth: 1.5,
	effects: true,
});

function animarPagina(){
    
gsap.from('body', {
    opacity:0,
    duration:1
});
gsap.from('.bg1', {
    y:-60,
    duration:1
});
gsap.from('.bg2', {
    y:60,
    duration:1
});
gsap.from('.card', {
    opacity:0,
    filter:'blur(10px)',
    duration:1,
    stagger:0.3,

    scrollTrigger:{
        trigger:'.card',
        start: "0% 80%",
        end: "100% 50%",
        scrub: true,
        markers:false
    }
});
gsap.from('.lista ul li', {
    opacity:0,
    x:40,
    filter:'blur(10px)',
    duration:1,
    stagger:0.1,

    scrollTrigger: {
      trigger: ".lista ul",
      start: "0% 80%",
      end: "100% 50%",
      scrub: true,
      markers:false
    }
});
gsap.from('footer',{
    y: "-30%",
    immediateRender: false,
    scrollTrigger: {
        trigger: "footer",
        scrub: true,
        invalidateOnRefresh: true,
        end: "100% 100%",
    },
})

const txtSplit = document.querySelectorAll('.txtSplit');

txtSplit.forEach((split)=>{
    const txtS = SplitText.create(split, {
        type:'lines, words, chars',
        mask:'lines',
    });

    gsap.from(txtS.chars, {
        y:40,
        opacity: 0,
        duration:0.3,
        stagger:0.03,
        scrollTrigger:{
            trigger:split,
        },
    });
});

}


const tl = gsap.timeline({
  onComplete() {
    animarPagina()
    gsap.to("#preloader", {
      opacity: 0,
      display: "none",
    });
  },
});

tl.to("#preloader path", {
  duration: 1,
  strokeDashoffset: 0,
});
tl.to("#preloader path", {
  fill: "rgb(168, 19, 19)",
  duration: 0.5,
  strokeDashoffset: 0,
});
