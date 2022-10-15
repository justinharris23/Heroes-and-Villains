//console.log("working");

let button = document.querySelector("#searchButton");
const bbName = document.querySelector("#bbName");
const bbImage = document.querySelector("#bbImage");
const bbBirthday = document.querySelector("#bbBirthday");

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
      bbImage.setAttribute("src", res[0].img);
      bbBirthday.innerText = `Birthdate: ${res[0].birthday}`;
      //bbInfo.innerText = `${res.height}: ft and ${res.weight} lbs`;
      //bbBio.innerText = bbGroup.innerText = console.log(res.sprites);
    })
    .catch((err) => {
      console.log("error!", err);
    });
}

//1 Attach Event to Button
button.addEventListener("click", getData);

//2 Read the input bar variable/value
//3 Find the HTML Element we want to populate
//4 Populate Element, Render Data on screen
