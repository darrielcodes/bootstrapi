/////////////// PART ONE /////////////////////////////

let button = document.querySelector('button');
let img = document.querySelector('.card-img-top');

button.addEventListener('click', function(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(function(response){
        return response.json();
    }).then(function(data){
        img.src = data.message;
    })
});

/////////////// PART TWO /////////////////////////////

let form = document.querySelector('form'); // takes care of submit button (only if using input submit)
let userInput = document.querySelector('#textInput')
let display = document.querySelector('p')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let url = `https://goweather.herokuapp.com/weather/${userInput.value}` // need to change city to input box using string interpolation
    fetch(encodeURI(url)) // encodeURI - makes spaces able to use and makes this a useable URL
    .then(function(response){
        return response.json(); // puts into usable object
    }).then(function(data){
        display.innerText = `The temperature in ${userInput.value} is ${data.temperature}. The wind is ${data.wind}. It is ${data.description}.`
    })
});