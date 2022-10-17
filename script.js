//console.log("working");

let button = document.querySelector("#searchButton");
let randomButton = document.querySelector("#random");
const bbName = document.querySelector("#bbName");
const bbBirthday = document.querySelector("#bbBirthday");
const bbNickname = document.querySelector("#bbNickname");
const bbOccupation = document.querySelector("#bbOccupation");
const bbPortrayed = document.querySelector("#bbPortrayed");
const bbInfo = document.querySelector(".bbInfo");

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
      // bbName.innerHTML = `Name: ${res[0].name}`;
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
  event.preventDefault();
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
      // bbName.innerHTML = `Name: ${res[0].name}`;
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
// onload = getRandom();
//onload = (getRandom) => { };
window.location.onload(getRandom);
