const bodyEl = document.querySelector("body");


bodyEl.addEventListener("mousemove",(event)=>{
    let xside = (event.offsetX);
    let yside = (event.offsetY);
    const spanEl = document.createElement("span");
    spanEl.style.left = xside +"px"
    spanEl.style.top = yside +"px"
    size = Math.random()*100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
})