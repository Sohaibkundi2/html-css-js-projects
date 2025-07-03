const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


let absImgEl = document.querySelector(".abs-img");
let elemContainerEl = document.querySelector(".elem-container");
elemContainerEl.addEventListener("mouseenter",()=>{
    absImgEl.style.display = "inline-block";
})
elemContainerEl.addEventListener("mouseleave",()=>{
    absImgEl.style.display = "none";
})

let elems = document.querySelectorAll(".elem");

elems.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        var image = e.getAttribute('image-name');
        absImgEl.style.backgroundImage = `url(${image})`;
    })
})

// swiper=()=>{
//     var swiper = new Swiper(".mySwiper", {
//         slidesPerView: "auto",
//         centeredSlides: true,
//         spaceBetween: 30,
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//         },
//     });
// }


let loader = document.querySelector(".loader")

    setTimeout(()=>{
        loader.style.top = "-100%";
    },3100)



swiper();
