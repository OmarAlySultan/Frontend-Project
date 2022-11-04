var mybutton = document.querySelector("#myBtn");

var myscroll = document.querySelector("#scroller");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block"; 
     myscroll.style.display = "block";
  } else {
    mybutton.style.display = "none";
    myscroll.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




const moreDetailses = document.querySelectorAll(".moreDetails");
for (let i = 0; i < moreDetailses.length; i++) {
  moreDetailses[i].style.display = "none";
}

const remove = document.querySelectorAll(".title");
for (let i = 0; i < remove.length; i++) {
  remove[i].style.display = "none";
}
const del = document.querySelectorAll(".fa-minus");
for (let i = 0; i < del.length; i++) {
  del[i].style.display = "none";
}




const Main = document.getElementsByClassName("main");
const Title = document.getElementsByClassName("title");
for (let i = 0; i < Main.length; i++) {
  Main[i].addEventListener("click", function() {
    for (let a = 0; a < Title.length; a++) {
      Title[a].style.display = "none";
      Main[a].style.color = "black"
      
      
    }
    Title[i].style.display = "block";
    Main[i].style.color = "blue"
  

  });
}




const Sub = document.getElementsByClassName("subtitle");
const Explain = document.getElementsByClassName("moreDetails");
const plus = document.getElementsByClassName("fa-plus");
const minus = document.getElementsByClassName("fa-minus");



for (let i = 0; i < Sub.length; i++) {
  Sub[i].addEventListener("click", function() {
    for (let a = 0; a < Explain.length; a++) {
      if (Explain[a] != Explain[i]) {
        Explain[a].style.display = "none";
        Sub[a].style.color = "black"
      } else {
        if (Explain[i].style.display == "none" || Explain[i].style.display == "") {
          Explain[i].style.display = "block";
          Sub[i].style.color = "blue"
        } else {
          Explain[i].style.display = "none";
          Sub[i].style.color = "black"
        }
      }
    }
  });
}
for (let i = 0; i < Sub.length; i++) {
  Sub[i].addEventListener("click", function() {
    for (let a = 0; a < minus.length; a++) {
      if (minus[a] != minus[i]) {
        minus[a].style.display = "none";
      } else {
        if (minus[i].style.display == "none" || minus[i].style.display == "") {
          minus[i].style.display = "block";
        } else {
          minus[i].style.display = "none";
        }
      }
    }
  });
}

for (let i = 0; i < Sub.length; i++) {
  Sub[i].addEventListener("click", function() {
    for (let a = 0; a < plus.length; a++) {
      if (plus[a] != plus[i]) {
        plus[a].style.display = "block";
      } else {
        if (plus[i].style.display == "block" || plus[i].style.display == "") {
          plus[i].style.display = "none";
        } else {
          plus[i].style.display = "block";
        }
      }
    }
  });
}


