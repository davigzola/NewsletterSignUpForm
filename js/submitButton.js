var submitButton = document.querySelector(".email-form-submit");
var dismissMessage = document.querySelector(".button-ty");
var emailRegisterSection = document.querySelector("#email-register-section");
var thankYouSection = document.querySelector("#thank-you-section");
var emailForm = document.querySelector(".email-form");
var emailFormField = document.querySelector(".email-form-field");
var errorEmail = document.querySelector(".error-email")

    emailForm.addEventListener("submit", function(event) {
        event.preventDefault()
    })

    emailFormField.addEventListener("input", function() {
        if(correctEmail(emailFormField.value) == true) {

            submitButton.addEventListener("click", function() {
                emailRegisterSection.classList.add("hidden");
                thankYouSection.classList.remove("hidden")
            })
                        
            dismissMessage.addEventListener("click", function() {
                window.location.reload(true);
            })
        } else if(correctEmail(emailFormField.value) == false) {
            submitButton.addEventListener("click", function() {
                errorEmail.classList.remove("hidden")
            })
        } 
    })

    function correctEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
      }
    



