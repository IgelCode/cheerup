const arrowleft = document.getElementById("arrowleft");
const arrowright = document.getElementById("arrowright");
const pics = document.getElementsByClassName("pics");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const btns = document.getElementsByClassName("slidebtn");
let i = 0;
let a = 1;

arrowleft.addEventListener("click", goleft);
arrowright.addEventListener("click", goright);

btnone.addEventListener("click", btnstyle);
btntwo.addEventListener("click", btnstyle);
btnthree.addEventListener("click", btnstyle);

function myLoop() {
  btns[i].style.color = "gold";
  setTimeout(function () {
    if (i < pics.length - 1) {
      pics[i].style.visibility = "hidden";
      pics[i + 1].style.visibility = "visible";
      i++;
      btns[i - 1].style.color = "black";
    } else if (i == pics.length - 1) {
      pics[i].style.visibility = "hidden";
      i = 0;
      pics[i].style.visibility = "visible";
      btns[pics.length - 1].style.color = "black";
    }

    if (i <= pics.length) {
      myLoop();
    }
  }, 5000);
}
myLoop();

function goleft() {
  pics[i].style.visibility = "hidden";

  if (i > 0) {
    pics[i - 1].style.visibility = "visible";
    i--;
  } else if (i == 0) {
    i = 2;
    pics[i].style.visibility = "visible";
  }
}
function goright() {
  pics[i].style.visibility = "hidden";

  if (i < pics.length - 1) {
    pics[i + 1].style.visibility = "visible";

    i++;
  } else if (i == pics.length - 1) {
    i = 0;
    pics[i].style.visibility = "visible";
  }
}

function btnstyle() {
  btnone.style.color = "black";
  btntwo.style.color = "black";
  btnthree.style.color = "black";
  this.style.color = "gold";
  pics[i].style.visibility = "hidden";
  i = Number(this.dataset.id);
  console.log(this.dataset.id);
  pics[i].style.visibility = "visible";
}
