

//DOM content load for loading elements from html
document.addEventListener('DOMContentLoaded', function () {

    //lets define our api url(like kotlin retrofit XD)
    const PREDICTOR_API_URL = "https://api.genderize.io/?name=";

    const userInputtedFormData = {
        name: "",
        gender: undefined,
    };
    
    // inputs values 
    const nameInput = document.querySelector("#name");
    const form = document.querySelector("#form");
    const savedAnswer = document.querySelector("#saved-answer");

    //buttons initializing
    const saveButton = document.querySelector("#save");
    const clearButton = document.querySelector("#clear");

    //results of api callings
    const genderHeader = document.querySelector("#gender-header");
    const genderPrediction = document.querySelector("#gender-prediction");

    //error detection will be used for api callings or ...
    const error = document.querySelector("#error");

    let fullname ;

    //this event handler will help us to mange clear events
    clear.addEventListener("click", () => {
        if (localStorage.getItem(fullname)) {
          localStorage.removeItem(fullname);
          fullname = ""
          savedAnswer.innerHTML = ""
          alert("data is cleared");
        }else{
            alert("data is already cleared");
        }
    
      });
    
    
});