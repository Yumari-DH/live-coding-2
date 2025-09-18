// API
const API_ENDPOINT = 'https://yesno.wtf/api';
const answer = document.getElementById("answer");
const button = document.getElementById("button");

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

function fetchAnswer() {

    fetch(API_ENDPOINT)

        .then(response => response.json())
        .then(dataJson => {
            console.log(dataJson); //objeto completo
            console.log(dataJson.answer); //solo la respuesta
            answer.textContent = dataJson.answer;
        })

        .catch(error => console.log("Hubo un error", error.message));

}//fn fetchAnswer

fetchAnswer();
console.log("script cargado", button);
button.addEventListener("click", function (event) {


    event.preventDefault();
    console.log("click detectado");
    fetchAnswer();
});

console.log("script hasta el final");

