

document.getElementById("register").addEventListener("click", validateForm);
var registrationType = document.getElementsByName("registration-type");
document.getElementById("error-container").style.display = "none";
var errorDiv = document.getElementById("error-container");

var participantType = "";
var discountCode = "Lehman College";
var totalPrice = 0;
//console.log("Hello World!");

function validateForm(){

    errorDiv.style.display = "none";
    
    let fullName = document.getElementById("fullname").value;
    let eMail = document.getElementById("email").value;
    //put password and password confirmation here
    let password = document.getElementById("passwordInput").value;
    let passwordConfirm = document.getElementById("confirmpPassword").value;

    let organization = document.getElementById("organization").value;
    let country = document.getElementById("country").value;
    let phone = document.getElementById("phoneNumber").value;
    let discountInput = document.getElementById("discountCode").value; 

    fullName = fullName.trim();
    eMail = eMail.trim();
    organization = organization.trim();
    country = country.trim();
    phone = phone.trim();
    password = password.trim();
    passwordConfirm = passwordConfirm.trim()

    //errorDiv.style.display = "none";

    if(fullName.length <= 0){
        document.getElementById("name-error").style.display = "block";
        errorDiv.style.display = "block";
    }

    if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/.test(eMail)){
        document.getElementById("email-error").style.display = "block";
        errorDiv.style.display = "block";
    }

    //put password handlers here after adding password field to the html
    if(password.length < 10 || password.length > 20){
        document.getElementById("password-char-error").style.display = "block";
        errorDiv.style.display = "block";
    }

    if(!/[a-z]/.test(password)){
        document.getElementById("password-lowercase-error").style.display = "block";
        errorDiv.style.display = "block";
    }

    if(!/[A-Z]/.test(password)){
        document.getElementById("password-uppercase-error").style.display = "block";
        errorDiv.style.display = "block";
    }

    if(!/[0-9]/.test(password)){
        document.getElementById("password-digit-error").style.display = "block";
        errorDiv.style.display = "block";
    }

    if(passwordConfirm !== password){
        document.getElementById("password-confirmation-error").style.display = "block";
        errorDiv.style.display = "block";
    }

    
    if(organization.length <= 0){
        document.getElementById("organization-error").style.display = "block";
        errorDiv.style.display = "block";
    }

    if(country.length <= 0){
        document.getElementById("country-error").style.display = "block";
        errorDiv.style.display = "block";
    }

    //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    if(phone.length < 1 || !/^[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(phone)){
        document.getElementById("phone-error").style.display = "block";
        errorDiv.style.display = "block";
    }


    radioButtons();


    //discount input
    if(discountInput == discountCode){
        switch(participantType){
            case "Author":
                totalPrice = 400 - (400 * 0.50);
                break;
            case "Participant":
                totalPrice = 300 - (300 * 0.50);
                break;
            case "Student":
                totalPrice = 100 - (100 * 0.50);
                break;
        }

        document.getElementById("price").innerHTML = "Total: $" + totalPrice;
    }else{
        switch(participantType){
            case "Author":
                totalPrice = 400;
                break;
            case "Participant":
                totalPrice = 300;
                break;
            case "Student":
                totalPrice = 100;
                break;
        }
        document.getElementById("price").innerHTML = "Total: $" + totalPrice;
    }

    console.log(fullName + "\n" + eMail + "\n" + organization + "\n" + country + "\n" + phone);
    //errorDiv.style.display = "none";
    //alert(fullName);
}

//function for radio buttons
function radioButtons(){
    //let participantType = "";
    for(i = 0; i < registrationType.length; i++){
        if(registrationType[i].checked){
            participantType = registrationType[i].value; 
            console.log("type: " + participantType);
        }
    }
}

function handleRadio(regRadio){
    let regularPrice;
    let regType = regRadio.value;
    // console.log(regType); //regRadio.value
    switch(regType){
        case "Author":
            regularPrice = 400;
            break;
        case "Participant":
            regularPrice = 300;
            break;
        case "Student":
            regularPrice = 100;
            break;
    }
    document.getElementById("price").innerHTML = "Total: $" + regularPrice;
}
