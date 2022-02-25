const arrowleft = document.getElementById("arrowleft");
const arrowright = document.getElementById("arrowright");
const pics = document.getElementsByClassName("pics");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const btns = document.getElementsByClassName("slidebtn");
const btnone = document.getElementById("btnone");
const btntwo = document.getElementById("btntwo");
const btnthree = document.getElementById("btnthree");
let i = 0;

arrowleft.addEventListener("click", goleft);
arrowright.addEventListener("click", goright);

btnone.addEventListener("click", btnstyle);
btntwo.addEventListener("click", btnstyle);
btnthree.addEventListener("click", btnstyle);

function myLoop() {
  btns[i].style.color = "gold";
  setTimeout(function () {
    if (i < pics.length - 1) {
      pics[i].style.opacity = "0%";
      pics[i + 1].style.opacity = "100%";
      i++;
      btns[i - 1].style.color = "black";
    } else if (i == pics.length - 1) {
      pics[i].style.opacity = "0%";
      i = 0;
      pics[i].style.opacity = "100%";
      btns[pics.length - 1].style.color = "black";
    }

    if (i <= pics.length) {
      myLoop();
    }
  }, 5000);
}
myLoop();

function goleft() {
  pics[i].style.opacity = "0%";
  btns[i].style.color = "black";
  if (i > 0) {
    pics[i - 1].style.opacity = "100%";
    btns[i - 1].style.color = "gold";
    i--;
  } else if (i == 0) {
    i = 2;
    pics[i].style.opacity = "100%";
    btns[i].style.color = "gold";
  }
}
function goright() {
  pics[i].style.opacity = "0%";
  btns[i].style.color = "black";

  if (i < pics.length - 1) {
    pics[i + 1].style.opacity = "100%";
    btns[i + 1].style.color = "gold";
    i++;
  } else if (i == pics.length - 1) {
    i = 0;
    pics[i].style.opacity = "100%";
    btns[i].style.color = "gold";
  }
}

function btnstyle() {
  btnone.style.color = "black";
  btntwo.style.color = "black";
  btnthree.style.color = "black";
  console.log(this);
  this.style.color = "gold";
  pics[i].style.opacity = "0%";
  i = Number(this.dataset.id);

  pics[i].style.opacity = "100%";
}
