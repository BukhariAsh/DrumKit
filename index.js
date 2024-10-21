// for (let i = 0; i < document.querySelectorAll("button").length; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", handleClick);
//   function handleClick() {
//     alert("I got clicked");
//   }
// }

// for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
//   function handleClick() {
//     alert("I got clicked");
//   }
// }

// let j = document.querySelectorAll(".drum").length;
// for (let i = 0; i < j; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
//   function handleClick() {
//     alert("I got clicked");
//   }
// }

// let j = document.querySelectorAll(".drum").length;
// for (let i = 0; i < j; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     alert("I got clicked");
//   });
// }

// function add(num1, num2) {
//   return num1 + num2;
// }
// function multiply(num1, num2) {
//   return num1 * num2;
// }
// function calculator(num1, num2, operator) {
//   return operator(num1, num2);
// }
// console.log(calculator(4, 5, add));
// console.log(calculator(4, 5, multiply));

let j = document.querySelectorAll(".drum").length;
for (let i = 0; i < j; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonClicked = this.innerHTML;
    console.log(buttonClicked);
    let buttonAudio;
    makeSound(buttonClicked);
    buttonAnimation(buttonClicked);
  });
}

// alert("I got clicked");
// console.log(this.innerHTML);
// this.style.color = "white";
// console.log(audio.duration);
document.addEventListener("keydown", function (event) {
  console.log(event);
  console.log(event.key);
  makeSound(event.key);
  buttonAnimation(event.key);
  // alert("a key was pressed");
});

function makeSound(key) {
  switch (key) {
    case "w":
      buttonAudio = new Audio("./sounds/tom-1.mp3");
      buttonAudio.play();
      break;
    case "a":
      buttonAudio = new Audio("./sounds/tom-2.mp3");
      buttonAudio.play();
      break;
    case "s":
      buttonAudio = new Audio("./sounds/tom-3.mp3");
      buttonAudio.play();
      break;
    case "d":
      buttonAudio = new Audio("./sounds/tom-4.mp3");
      buttonAudio.play();
      break;
    case "j":
      buttonAudio = new Audio("./sounds/crash.mp3");
      buttonAudio.play();
      break;
    case "k":
      buttonAudio = new Audio("./sounds/kick-bass.mp3");
      buttonAudio.play();
      break;
    case "l":
      buttonAudio = new Audio("./sounds/snare.mp3");
      buttonAudio.play();
      break;

    default:
      console.log("Not in the range");
  }
}
function buttonAnimation(currentKey) {
  // document.querySelector(".w").classList.add("pressed");
  let keyInUse = document.querySelector("." + currentKey);
  keyInUse.classList.add("pressed");
  setTimeout(function () {
    // keyInUse.classList.remove("pressed");
    document.querySelector("." + currentKey);
    keyInUse.classList.remove("pressed");
  }, 100);
}

// Create a function that takes a character as input and plays the sound accordingly

// document.querySelector(".w").addEventListener("click", function () {
//   // alert("I got clicked");
//   let buttonAudio = new Audio("./sounds/tom-1.mp3");
//   buttonAudio.play();
//   // console.log(audio.duration);
// });

// document.querySelector(".a").addEventListener("click", function () {
//   // alert("I got clicked");
//   let buttonAudio = new Audio("./sounds/tom-2.mp3");
//   buttonAudio.play();
//   // console.log(audio.duration);
// });

// Objetcs
// let bellBoy1Name = "timmy";
// let bellBoy1Age = 21;
// let bellBoy1Permit = true;
// let bellBoy1Languages = ["English", "French"];

// let bellBoy1 = {
//   name: "Timmy",
//   age: 21,
//   permit: true,
//   language: ["english", "french"],
// };
// console.log(bellBoy1.name);
// function BellBoy(name, age, permit, language) {
//   this.name = name;
//   this.age = age;
//   this.permit = permit;
//   this.language = language;
// }
// let bellBoy1 = new BellBoy("Timmy", 21, true, ["English", "French"]);
// console.log(bellBoy1.age);

// let bellBoy2 = new BellBoy("Jimmy", 22, false, ["English", "German"]);
// console.log(bellBoy2.language);
