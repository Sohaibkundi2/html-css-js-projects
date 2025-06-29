let tougle = true;
let checkDate;

const s_icon = document.getElementById("s_icon");
const input = document.getElementById("input");
const check_btn = document.getElementById("check_btn");
const dob_el = document.getElementById("dob_el");

const initialTextEl = document.getElementById("initialText");
const afterBtnTextEl = document.getElementById("afterBtnText");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secendEl = document.getElementById("secend");

function doubleNum(numb){
    numb = (numb>9)?numb:`0${numb}`;
    return numb
}

const checkTougle = ()=>{
    if(tougle){
        dob_el.classList.remove("hide");
        tougle = false;
    } else {
        dob_el.classList.add("hide");
        tougle = !false;
    }
}

const updateAge=()=>{
    let currentDate = new Date();
    let dateDifference = currentDate - checkDate;
    year = Math.floor(dateDifference/(1000*60*60*24*365));
    month = Math.floor(dateDifference/(1000*60*60*24*365)%12);
    day = Math.floor(dateDifference/(1000*60*60*24)%30);
    hour = Math.floor(dateDifference/(1000*60*60)%24);
    minute = Math.floor(dateDifference/(1000*60)%60);
    secend = Math.floor(dateDifference/(1000)%60);

    yearEl.innerHTML = doubleNum(year);
    monthEl.innerHTML = doubleNum(month);
    dayEl.innerHTML = doubleNum(day);
    hourEl.innerHTML = doubleNum(hour);
    minuteEl.innerHTML = doubleNum(minute);
    secendEl.innerHTML = doubleNum(secend);
}


const setDoB=()=>{
    const dateString =input.value;
    checkDate = dateString? new Date(dateString):null;
    if(checkDate){
        initialTextEl.classList.add("hide");
        afterBtnTextEl.classList.remove("hide");
        setInterval(()=>updateAge(),1000);
    }else{
        initialTextEl.classList.remove("hide");
        afterBtnTextEl.classList.add("hide");
    }
}
setDoB();



s_icon.addEventListener("click",checkTougle);
check_btn.addEventListener("click",setDoB);