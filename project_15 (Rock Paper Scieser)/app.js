let myScore = 0;
let compScore = 0;
const clicked = document.querySelectorAll(".allDiv");
const alertMsg = document.querySelector(".move");
let myScoreValue = document.querySelector(".ourScore");
let compScoreValue = document.querySelector(".compScore");

const drawGame=()=>{
    console.log("Game is Drawn");
    alertMsg.innerText=("Game is Drawn ,Let's Play Again");
    alertMsg.style.backgroundColor = "black";
}
let    showWinner=(userWin,userClick,compClick)=>{
    if(userWin){
        myScore++;
        console.log("won");
        alertMsg.innerText=(`You Win! Your ${userClick} beats the ${compClick}`);
        alertMsg.style.backgroundColor = "green";
        myScoreValue.innerText=myScore;
    }
    else{
        compScore++;
        console.log("lose");
        alertMsg.innerText=(`You Lose! ${compClick} beats your ${userClick}`);
        alertMsg.style.backgroundColor = "red";
        compScoreValue.innerText=compScore;
    }
}
playGame=(userClick)=>{
    console.log("You have clicked the",userClick);
    const compClick=gencompClick();
    console.log("Comp have clicked the",compClick);



    if(userClick ===compClick){
        drawGame();
    }
    else{
        userWin = true;
        if(userClick==="Rock"){
            //Sciesers , Paper
            userWin=compClick==="Paper"? false:true;
        }else if(userClick==="Paper"){
            //Sciesers , Rock
            userWin=compClick==="Sciesers"? false:true;
        }else{
            //rock paper
            userWin= compClick==="Rock"? false :true;
        }
        showWinner(userWin,userClick,compClick);
    }   
}   
  // Computer Area
  const gencompClick=()=>{
    const Option=["Rock","Paper","Sciesers"];
    const randIdx = Math.floor(Math.random()*3);
    return Option[randIdx];
}


        // User Area
clicked.forEach((allDiv)=>{
    allDiv.addEventListener("click",()=>{
        const userClick = allDiv.getAttribute("id");
        playGame(userClick);
    })
})
