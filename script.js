console.log("working");

let button = document.querySelector("#searchButton");
const heroName = document.querySelector("#heroName");
const heroStats = document.querySelector("#heroStats");
const heroImage = document.querySelector("#heroImage");

//req and res
//request and response

//use Event as a parameter
async function getData(event) {
  //preventing the default behavior of the browser
  event.preventDefault();
  let textInput = document.querySelector("#inputBar").value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log("success!", res.name);
      heroName.innerText = res.name;
      heroStats.innerText = `${res.height}: feet and ${res.weight} lbs`;
      heroImage.setAttribute("src", res.sprites.front_shiny);

      console.log(res.sprites);
    })
    .catch((err) => {
      console.log("error!", err);
    });
}

//1 Attach Even to Button
//button.addEventListener("click", getData);

//2 Read the input bar variable/value
//3 Find the HTML Element we want to populate
//4 Populate Element, Render Data on screen
