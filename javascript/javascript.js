const emailInput = document.getElementById("email-input");
const signInBtn = document.querySelector(".sign-in");
const emailValid = ["emaillista0@gmail.com", "emaillista1@gmail.com", "emaillista2@gmail.com", "emaillista3@gmail.com"];

let emailItem = false

signInBtn.addEventListener("click", function(){
    const userEmail = emailInput.value;


    for (let i = 0; i < emailValid.length; i++) {
        const emailListItems = emailValid[i]
        
        if (userEmail === emailListItems ) {
            emailItem = true
        }
    }

    if (emailItem === true){
        console.log("L'email è valida")
    }
    else {
        console.log("L'email non è valida")
    }
    
    
}) 



