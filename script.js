//console.log("working");

let button = document.querySelector("#searchButton");
let randomButton = document.querySelector("#random");
const bbName = document.querySelector("#bbName");
const bbBirthday = document.querySelector("#bbBirthday");
const bbNickname = document.querySelector("#bbNickname");
const bbOccupation = document.querySelector("#bbOccupation");
const bbPortrayed = document.querySelector("#bbPortrayed");
const bbInfo = document.querySelector(".bbInfo");
let input = document.getElementById("inputBar");

//use Event as a parameter
async function getData(event) {
  //preventing the default behavior of the browser
  event.preventDefault();
  let textInput = document.querySelector("#inputBar").value;

  fetch(`https://www.breakingbadapi.com/api/characters?name=${textInput}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      //console.log(res[0].name);
      bbName.innerHTML = `${res[0].name}`;
      bbImage.setAttribute("src", res[0].img);
      bbBirthday.innerText = `Birthdate: ${res[0].birthday}`;
      bbNickname.innerText = `Nickname: ${res[0].nickname}`;
      bbOccupation.innerText = `Occupation: ${res[0].occupation}`;
      bbPortrayed.innerText = `Birthdate: ${res[0].portrayed}`;
      bbInfo.style.opacity = 0.75;
    })
    .catch((err) => {
      console.log("error!", err);
    });
}

//Function that randomizes the character that appears
async function getRandom(event) {
  let textInput = null;
  function getRandomnumber(min, max) {
    min = Math.ceil(1);
    max = Math.floor(62);
    textInput = Math.floor(Math.random() * (max - min + 1) + min);
  }
  getRandomnumber();

  fetch(`https://www.breakingbadapi.com/api/characters/${textInput}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      //console.log(res[0].name);
      bbName.innerHTML = `${res[0].name}`;
      bbImage.setAttribute("src", res[0].img);
      bbBirthday.innerText = `Birthdate: ${res[0].birthday}`;
      bbNickname.innerText = `Nickname: ${res[0].nickname}`;
      bbOccupation.innerText = `Occupation: ${res[0].occupation}`;
      bbPortrayed.innerText = `Portrayed by: ${res[0].portrayed}`;
      bbInfo.style.opacity = 0.75;
    })
    .catch((err) => {
      console.log("error!", err);
    });
}

//1 Attach Event to Button
button.addEventListener("click", getData);
randomButton.addEventListener("click", getRandom);
//getRandom();

//Randomize Images and pull in other smaller character image 1
async function starterImage1() {
  let textInput = null;
  function getRandomnumber(min, max) {
    min = Math.ceil(1);
    max = Math.floor(62);
    textInput = Math.floor(Math.random() * (max - min + 1) + min);
  }
  getRandomnumber();

  fetch(`https://www.breakingbadapi.com/api/characters/${textInput}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      let bbMore1 = document.querySelector("#bbMore1");
      console.log(res);
      bbMore1.setAttribute("src", res[0].img);
    });
}
starterImage1();

//Randomize Images and pull in other smaller character image 2
async function starterImage2() {
  let textInput = null;
  function getRandomnumber(min, max) {
    min = Math.ceil(1);
    max = Math.floor(62);
    textInput = Math.floor(Math.random() * (max - min + 1) + min);
  }
  getRandomnumber();

  fetch(`https://www.breakingbadapi.com/api/characters/${textInput}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      let bbMore2 = document.querySelector("#bbMore2");
      console.log(res);
      bbMore2.setAttribute("src", res[0].img);
    });
}
starterImage2();

//Randomize Images and pull in other smaller character image 3
async function starterImage3() {
  let textInput = null;
  function getRandomnumber(min, max) {
    min = Math.ceil(1);
    max = Math.floor(62);
    textInput = Math.floor(Math.random() * (max - min + 1) + min);
  }
  getRandomnumber();

  fetch(`https://www.breakingbadapi.com/api/characters/${textInput}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      let bbMore3 = document.querySelector("#bbMore3");
      console.log(res);
      bbMore3.setAttribute("src", res[0].img);
    });
}
starterImage3();

//Randomize Images and pull in other smaller character image 4
async function starterImage4() {
  let textInput = null;
  function getRandomnumber(min, max) {
    min = Math.ceil(1);
    max = Math.floor(62);
    textInput = Math.floor(Math.random() * (max - min + 1) + min);
  }
  getRandomnumber();

  fetch(`https://www.breakingbadapi.com/api/characters/${textInput}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      let bbMore4 = document.querySelector("#bbMore4");
      console.log(res);
      bbMore4.setAttribute("src", res[0].img);
    });
}
starterImage4();

//Have Search work on keyboard "enter" button
input.addEventListener("keypress", (event) => {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    event.preventDefault();
    // Trigger the button element with a click
    button.click();
  }
});
