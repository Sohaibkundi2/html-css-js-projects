const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secendEl = document.querySelector(".secend");

const updateClock=()=>{
    let clock = new Date();
    let hour = clock.getHours();
    let minute = clock.getMinutes();
    let secend = clock.getSeconds();

    const hourDeg = (hour / 12) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;

    const minuteDeg = (minute / 60) * 360;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;

    const secendDeg = (secend / 60) * 360;
    secendEl.style.transform = `rotate(${secendDeg}deg)`;
}


setInterval((updateClock),1000)
