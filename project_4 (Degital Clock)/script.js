const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secendEl = document.getElementById("secend");
const ampmEl = document.getElementById("ampm");



const degitalClock=()=>{


    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    h = (h<10)? `0${h}`:h;
    m = (m<10)? `0${m}`:m;
    s = (s<10)? `0${s}`:s;


    let ampm = "AM";

    if(h>12){
        h=h-12;
        ampm = "PM";
    }


    hourEl.innerHTML=h;
    minuteEl.innerHTML =m;
    secendEl.innerHTML = s;
    ampmEl.innerHTML=ampm;
    


    setInterval(()=>{
        degitalClock();
    },1000);
}

degitalClock();