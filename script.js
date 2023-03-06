//FONCTIONALITE 1
let footer = document.querySelector("footer");
let count = 0;
footer.addEventListener("click", cliquerMoi);

function cliquerMoi() {
  count++;
  console.log("Bravo", count);
}

//FONCTIONALITE 2
let hamburgerMenu = document.querySelector(".navbar-toggler-icon");
let navHeader = document.querySelector("#navbarHeader");

hamburgerMenu.addEventListener("click", toggleNav);

function toggleNav() {
  navHeader.classList.toggle("collapse");
}

//FONCTIONALITE 3
let firstEditBtn = document.querySelector(
  "div.col-md-4:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)"
);
firstEditBtn.addEventListener("click", function () {
  this.style.color = "red";
});

//FONCTIONALITE 4
let secondEditBtn = document.querySelector(
  "div.col-md-4:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)"
);

secondEditBtn.addEventListener("click", function () {
  if (this.style.color == !"green") {
    this.style.color = "green";
  } else {
    this.style.color = "";
  }
});

//FONCTIONALITE 5
let cdnLink = document.querySelector("head > link:nth-child(2)");
let navBar = document.querySelector("header");
navBar.addEventListener("dblclick", function () {
  if (
    cdnLink.href ===
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  ) {
    cdnLink.href = "";
  } else {
    cdnLink.href =
      "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  }
});

//FONCTIONALITE 6
let cards = document.querySelectorAll("div.col-md-4 > div");
console.log(cards[0].childNodes[3]);
let viewBtn = document.querySelectorAll(
  "div.col-md-4 > div > div > div > div > button:nth-child(1)"
);

viewBtn.forEach((btn, index) => {
  btn.addEventListener("click", function (e) {
    cards[index].childNodes[1].classList.toggle("w-25");
    cards[index].childNodes[3].childNodes[1].classList.toggle("collapse");
  });
});

//FONCTIONALITE 7
let buttonNext = document.querySelector("a.btn:nth-child(2)");
let parentElement = document.querySelector(
  "div.col-md-4:nth-child(6)"
).parentNode;

buttonNext.addEventListener("click", skipCard);

function skipCard() {
  let firstCard = document.querySelector("div.col-md-4:nth-child(1)");
  let lastCard = document.querySelector("div.col-md-4:nth-child(6)");
  parentElement.insertBefore(lastCard, firstCard);
}

//FONCTIONALITE 8
let buttonPrevious = document.querySelector("a.btn:nth-child(1)");
buttonPrevious.addEventListener("click", previousCard);

function previousCard() {
  let firstCard_1 = document.querySelector("div.col-md-4:nth-child(1)");
  let lastCard_1 = document.querySelector("div.col-md-4:nth-child(6)");
  parentElement.insertBefore(firstCard_1, lastCard_1.nextSibling);
}

//FONCTIONALITE 9
let logoBtn = document.querySelector(".navbar-brand > strong:nth-child(2)");
let body = document.querySelector("body");

logoBtn.addEventListener("click", function (e) {
  logoBtn.classList.toggle("focused");
  logoBtn.classList.toggle("border");
});

window.addEventListener("keyup", function (e) {
  if (logoBtn.classList.contains("focused")) {
    switch (e.key) {
      case "a":
        body.classList.toggle("col-4");
        break;
      case "y":
        body.classList.toggle("offset-4");
        body.classList.toggle("col-4");
        break;
      case "p":
        body.classList.toggle("offset-6");
        body.classList.toggle("col-6");
        break;
      case "b":
        body.removeAttribute("class");
        break;
    }
  }
});
