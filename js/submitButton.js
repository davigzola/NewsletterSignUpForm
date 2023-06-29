var submitButton = document.querySelector(".email-form-submit");
var dismissMessage = document.querySelector(".button-ty");
var emailRegisterSection = document.querySelector("#email-register-section");
var thankYouSection = document.querySelector("#thank-you-section");
var emailForm = document.querySelector(".email-form");
var emailFormField = document.querySelector(".email-form-field");


    emailForm.addEventListener("submit", function(event) {
        event.preventDefault()
    })

    submitButton.addEventListener("click", function() {
        emailRegisterSection.classList.add("hidden");
        thankYouSection.classList.remove("hidden")
    })
    
    dismissMessage.addEventListener("click", function() {
        thankYouSection.classList.add("hidden");
        emailRegisterSection.classList.remove("hidden");
    })
    



