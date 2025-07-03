function card() {
  let btnEl = document.querySelector(".btn");
  let statusEl = document.querySelector(".status");

  let tougle = true;

  btnEl.addEventListener("click", () => {
    if (tougle) {
      statusEl.innerHTML = "Friends";
      btnEl.innerHTML = "Remove Friend";
      btnEl.style.backgroundColor = " red";
      statusEl.style.color = "rgb(0, 171, 0)";
      tougle = false;
    } else {
      statusEl.innerHTML = "Always Happy";
      btnEl.innerHTML = "Add Friend";
      btnEl.style.backgroundColor = " rgb(0, 171, 0)";
      statusEl.style.color = "#f423f8";
      tougle = true;
    }
  });
}

let curser = document.querySelector(".curser");
let main = document.querySelector(".main");
let cardH = document.querySelector(".card");

function crsr() {
  main.addEventListener("mousemove", function (e) {
    gsap.to(curser, {
      x: e.x,
      y: e.y,
      duration: 0.7,
    });
  });
}

function cardHover() {
  cardH.addEventListener("mouseenter", () => {
    gsap.to(curser, {
      scale:3,
      fontSize:6,

    })
      curser.innerHTML="View More";
  });
  cardH.addEventListener("mouseleave", () => {
    gsap.to(curser, {
      scale:1
    })
    curser.innerHTML="";
  });
}

cardHover();
crsr();
card();
