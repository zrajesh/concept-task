// const holders
const form = document.getElementById("form");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const url = document.getElementById("url");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.querySelector(".message");

let isValid = false;
let passwordMatch = false;

function isPasswordMatch() {
    if (password1El.value === password2El.value) {
        passwordMatch = true;
        password1El.style.borderColor = "green";
        password2El.style.borderColor = "green";
    } else {
        passwordMatch = false;
        message.textContent = "Make sure passwords matched";
        message.style.color = "red";
        password1El.style.borderColor = "red";
        password2El.style.borderColor = "red";
        return;
    }
}

function validateForm() {
    // Using constraint api
    isValid = form.checkValidity();
    // Message for an error
    if (isValid == false) {
        message.textContent = "Please fill all the fields.";
        message.style.color = "red";
        return;
    }
    // Check to see if password match
    isPasswordMatch();

    if (isValid && passwordMatch) {
        message.textContent = "All set to go!";
        message.style.color = "green";
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        webiste: form.website.value,
        password: form.password.value
    };
    console.log(user);
}

function processFormData(event) {
    event.preventDefault();
    // Validate form
    validateForm();
    // Submit data if valid
    if (isValid && passwordMatch) {
        storeFormData();
    }
}

// Event Listener
form.addEventListener("submit", processFormData)
