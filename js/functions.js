//function checks if email input fields match with each other
function confirmEmail()
{

    var email = document.getElementById("user_email");
    var confirmEmail = document.getElementById("user_email--confirm");
    var error = document.getElementById("form__input-error-message");


    if(email.value != confirmEmail.value)
    {
        
        error.style.display = "block";
    }
    else{

        error.style.display = "none";
    }
}