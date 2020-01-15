// Your code goes here

// Navbar mouse over event
const navbar = document.querySelectorAll(".nav-link");
// 1. mouseenter event
// changes the background color of nav-item to a random color on each firing
//preventing the navbar from refreshing page
navbar.forEach(function(element) {
  element.addEventListener("mouseenter", event => {
    event.target.style.backgroundColor = randomColor();
  });
});

// 2.Click event
//plays the sound of doors closing when bus image is click
const busImg = document.querySelector(".intro img");
console.log(busImg);
busImg.addEventListener("click", event => {
  // Stops the background of the intro from changing section from changing when clicked
  event.stopPropagation();
  var audio = new Audio("bus-door1.mp3");
  audio.play();
  // 3. audio end event
  // calls the move the bus function when audio ends
  audio.addEventListener("ended", event => {
    moveThatBus();
  });
});
// Will change the background color of intro when clicked to random color
document.querySelector(".intro").addEventListener("click", event => {
  event.target.style.backgroundColor = randomColor();
});
ticketHeader = document.querySelector("header h2");
console.log(ticketHeader);
// 4.scroll event
//changes the text of the top h2 when page is scrolled
window.addEventListener(
  "wheel",
  event => {
    gsap.to(ticketHeader, {
      duration: 0.7,
      scale: 1.4,
      xPercent: 25
    });
    ticketHeader.textContent = "DOUBLE CLICK TO PURCHASE TICKET";
  },
  { once: true }
);

// 5. double click event
// changes h2 textContent
ticketHeader.addEventListener("dblclick", () => {
  console.log(event);
  ticketHeader.textContent = "THANK YOU! CLICK ON THE BUS TO DEPART";
});
// 6.Keypress event
// Checks if secret phrase is entered into keyboard and sets
// all elements to black background, removes images and brings busImg back into frame
const keys = [];
window.addEventListener("keypress", event => {
  const secret = "end";
  keys.push(event.key);
  if (keys.join("").includes(secret)) {
    document
      .querySelectorAll("*")
      .forEach(element => (element.style.backgroundColor = "black"));
    document
      .querySelectorAll(".img-content img")
      .forEach(element => (element.style.display = "none"));
    gsap.to(busImg, {
      duration: 1,
      scaleX: -1,
      xPercent: 0
    });
    const mainHeader = document.querySelector("h1");
    mainHeader.style.color = "white";
    mainHeader.textContent = "Came Home at night";
    console.log("Donesecret");
  }
});

// 7. mouseleave event
// changes h2 when mouse leavese busImg
busImg.addEventListener("mouseleave", () => {
  console.log("yo");
  ticketHeader.textContent = "If you want to come home just type end";
});
// 8. RightClick event
document.querySelector("body").addEventListener("contextmenu", event => {
  // Prevents the context menu from popping up on right-click
  event.preventDefault();
  document.querySelector(".intro p").style.color = randomColor();
});

// 9. Dragging event
// select a section of a paragraph section and drag out of it's container
// WARNING: Rapidly flashing colors and lights
const paragraphList = document.querySelectorAll("p");
paragraphList.forEach(element =>
  element.addEventListener("drag", event => {
    element.style.backgroundColor = randomColor();
    event.target.style.color = randomColor();
  })
);
// 10. focus event
// spins the navlinks 360deg when it receives focus, using tab for example
navbar.forEach(element => {
  element.addEventListener("focus", event => {
    gsap.to(element, 0.5, {
      rotation: 360
    });
  });
});

function moveThatBus() {
  const driveAudio = new Audio("busStartup.wav");
  driveAudio.play();
  document.querySelector("body").style.overflow = "hidden";
  event.target.style.position = "fixed";
  const tl = gsap.timeline();
  tl.to(busImg, 0.2, { rotation: -1, yoyo: true, repeat: 10 });
  tl.to(busImg, 0.2, { rotation: 1, yoyo: true, repeat: 10 }, "-=.2");
  tl.to(busImg, 1, { xPercent: 200 });
}
function randomColor() {
  return `rgba(${Math.floor(Math.random() * 254)},${Math.floor(
    Math.random() * 254
  )},${Math.floor(Math.random() * 254)})`;
}
