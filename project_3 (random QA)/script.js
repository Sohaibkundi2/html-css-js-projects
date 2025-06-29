let scoreUpdateEl = document.getElementById("scoreUpdate");
let questionEl = document.getElementById("question");
let answerEl = document.getElementById("answer");
let submitEl = document.getElementById("submit");

let footerUpr = document.getElementById("footerUpr");
let footerLwr = document.getElementById("footerLwr");

var answer =32;


const randNumb = (min,max)=>{
    return Math.floor(Math.random() * (max - min +1) +min);
}

multiply =()=>{
const numberEl = randNumb(1,16);
const numberEl2 = randNumb(1,10);
questionEl.innerHTML= `Q. What is ${numberEl} multiply by ${numberEl2} ?`;
answer = numberEl * numberEl2;
}
addition =()=>{
    const numberEl = randNumb(1,50);
    const numberEl2 = randNumb(1,50);
    questionEl.innerHTML= `Q. What is ${numberEl} added to ${numberEl2} ?`;
    answer = numberEl + numberEl2;
    }
subtraction =()=>{
    const numberEl = randNumb(1,50);
    const numberEl2 = randNumb(1,15);
    questionEl.innerHTML= `Q. What is ${numberEl} subtracted from ${numberEl2} ?`;
    answer = numberEl - numberEl2;
    }

division =()=>{
const numberEl = randNumb(1,30);
const numberEl2 = randNumb(1,5);
questionEl.innerHTML= `Q. What is ${numberEl} divided by ${numberEl2} ?`;
answer = numberEl / numberEl2;
}


submitEl.addEventListener(('click'),()=>{
    if(answer == answerEl.value){
        scoreUpdateEl.innerText =+scoreUpdateEl.innerText + 1;
        footerUpr.classList.remove("hide");
        footerLwr.classList.add("hide");


    } else
    {
        scoreUpdateEl.innerText =+scoreUpdateEl.innerText - 1;
        footerUpr.classList.add("hide");
        footerLwr.classList.remove("hide");
    }
    let numb = randNumb(1,4);
    switch (numb) {
        case 1:
            multiply();
            break;
        case 2:
            subtraction();
            break;
        case 3:
            division();
            break;
        case 4:
            addition();
            break;
        default:
            break;
    }
    answerEl.value="";
})

