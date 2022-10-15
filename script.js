//console.log("working");

let button = document.querySelector("#searchButton");
let randomButton = document.querySelector("#random");
const bbName = document.querySelector("#bbName");
const bbBirthday = document.querySelector("#bbBirthday");
const bbNickname = document.querySelector("#bbNickname");

//req and res
//request and response

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
      bbName.innerHTML = `Name: ${res[0].name}`;
      // bbName.innerHTML = `Name: ${res[0].name}`;
      bbImage.setAttribute("src", res[0].img);
      bbBirthday.innerText = `Birthdate: ${res[0].bbBirthday}`;
      bbNickname.innerText = `Nickname: ${res[0].bbNickname}`;
      bbOccupation.innerText = `Occupation: ${res[0].bbOccupation}`;
      bbPortrayed.innerText = `Birthdate: ${res[0].bbPortrayed}`;
    })
    .catch((err) => {
      console.log("error!", err);
    });
}

async function getRandom(event) {
  //preventing the default behavior of the browser
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
      bbName.innerHTML = `Name: ${res[0].name}`;
      // bbName.innerHTML = `Name: ${res[0].name}`;
      bbImage.setAttribute("src", res[0].img);
      bbBirthday.innerText = `Birthdate: ${res[0].bbBirthday}`;
      bbNickname.innerText = `Nickname: ${res[0].bbNickname}`;
      bbOccupation.innerText = `Occupation: ${res[0].bbOccupation}`;
      bbPortrayed.innerText = `Birthdate: ${res[0].bbPortrayed}`;
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

//2 Read the input bar variable/value
//3 Find the HTML Element we want to populate
//4 Populate Element, Render Data on screen
