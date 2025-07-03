let tl = gsap.timeline();


tl.to(".yellow-bg-1",{
    top:"-100%",
    delay:.5,
    duration:.5,
    ease:"expo.out"
})


tl.from(".yellow-bg-1",{
    top:"100%",
    duration:.7,
    ease:"expo.out"
},'a')

tl.to(".loader .para",{
    duration: .5,
    delay:.2,
    color:"black"
},'a')

tl.to(".loader",{
    opacity:0
})
tl.to(".loader",{
    display:"none"
})

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let page2bg = document.querySelector(".page-2");
let elems = document.querySelectorAll(".moving-elem");
elems.forEach(elem => {
    elem.addEventListener("mouseenter",()=>{
        let image = elem.getAttribute("data-img")
        page2bg.style.backgroundImage = `url(${image})`
    })
});

