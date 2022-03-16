 //I gathered entire contact form, the email input and the span element
//which I will use to print the error message to.

const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

//Here I'm grabbing the field for the full name and it's sibling span with the class of error.

const fullName = document.getElementById("fullName");
const nameError = document.querySelector("#fullName + span.error");

//Here I'm grabbing the field for the message box along with its sibling span.
const message = document.getElementById("addMessage");
const messageError = document.querySelector("#addMessage + span.error");

//Name Field Completion Validation
fullName.addEventListener("input", function (e) {
    if(fullName.validity.valid){
        nameError.textContent = " ";
        nameError.class = "error";
}else {
        showError();
    }
});

//I added an event listener to the email input field and in case 
//Email Field Validation
email.addEventListener("input", function (e) {
//the form is showing an error message for the email when it is in fact valid,

    if (email.validity.valid){

//I will remove the error message by setting the span with the class error to 
        emailError.textContent = " ";
        emailError.className = "error";


}else {

    //an empty string. Otherwise, if the email is invalid, it will show an error.
        showError();
    }
});

message.addEventListener("input", function (e){

    if(message.validity.valid){
        messageError.textContent = " ";
        messageError.className = "error";
    }else {
        showError();
    }
    
    
    
});

//Here I added an event listener to the form that says
form.addEventListener("submit", function (e) {
// if the email address  or full name field is not valid
    if (!email.validity.valid || !fullName.validity.valid || !message.validity.valid){
//show an error
        showError();
//and prevent the form from being submitted.
        e.preventDefault();
    }
});

//Here the error function is declared.
function showError() {
    
    //if the full name field is empty, print the specified error.
    if (fullName.validity.valueMissing) {
       
        nameError.textContent = "This field cannot be blank."
         //if the email field is empty 

    };
    
    if(email.validity.valueMissing) {

        //show the specified error below.
        emailError.textContent = "This field cannot be blank";

        //Otherwise if the input in the email field does not match the expected format (x@y)
    } else if(email.validity.typeMismatch) {

//show the error specified below:
        emailError.textContent = "Email is not in proper format.";
    };

    if (message.validity.valueMissing) {
        messageError.textContent = "This field cannot be blank";
    };
    

//This is setting the class names for styling purposes.
    emailError.className = "error active";
    nameError.className = "error active";
    messageError.className = "error active";
};





