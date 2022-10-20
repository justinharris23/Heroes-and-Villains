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
let backgroundAbc = document.querySelector(".newBackground");
let body = document.querySelector("body");

//change background image on button click
// function myFunction() {
//   document.body.style.backgroundImage = "url('assets/bbbackground2.png')";
// }

backgroundAbc.addEventListener("click", () => {
  body.classList.toggle("newB");
});

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
      bbPortrayed.innerText = `Portrayed by: ${res[0].portrayed}`;
      bbInfo.style.display = "block";
    })
    .catch((err) => {
      console.log("error!", err);
    });
}

/////
///When you click a More Character button that character displays and the other images change
/////
async function getSpecific(id) {
  fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      bbName.innerHTML = `${res[0].name}`;
      bbImage.setAttribute("src", res[0].img);
      bbBirthday.innerText = `Birthdate: ${res[0].birthday}`;
      bbNickname.innerText = `Nickname: ${res[0].nickname}`;
      bbOccupation.innerText = `Occupation: ${res[0].occupation}`;
      bbPortrayed.innerText = `Portrayed by: ${res[0].portrayed}`;
      bbInfo.style.display = "block";
    })
    .catch((err) => {
      console.log("error!", err);
    });
}
///////
//////

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
      bbInfo.style.display = "block";
    })
    .catch((err) => {
      console.log("error!", err);
    });
  starterImage1();
  starterImage2();
  starterImage3();
  starterImage4();
}

//1 Attach Event to Button
button.addEventListener("click", getData);
randomButton.addEventListener("click", getRandom);

//getRandom();

//Function that randomizes More Character images

//Randomize Images and pull in a smaller character image 1
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
      bbMore1.addEventListener("click", function () {
        getSpecific(res[0].char_id);
      });
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
      bbMore2.addEventListener("click", function () {
        getSpecific(res[0].char_id);
      });
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
      bbMore3.addEventListener("click", function () {
        getSpecific(res[0].char_id);
      });
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
      console.log(bbMore4);
      bbMore4.setAttribute("src", res[0].img);
      bbMore4.addEventListener("click", function () {
        getSpecific(res[0].char_id);
      });
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

//////
//////

/////
