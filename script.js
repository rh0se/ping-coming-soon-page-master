const emailInput = document.getElementById("email-input");
const notifyButton = document.getElementById("notify-btn");
const notifyForm = document.getElementById("notify-form");
const errorMessage = document.getElementById("error-message");

const checkEmail = () => {
    const emailRegex = /^[a-z][\w\d]+[@][a-z]+[.][a-z]{2,4}$/;
    if (emailInput.value === '') {
        errorMessage.style.color = "red";
        errorMessage.textContent = "Whoops! It looks like you forgot to add your email";
        emailInput.style.border = "1px solid red";
        notifyButton.style.marginBottom = "11px";
    } else if (!emailRegex.test(emailInput.value)) {
        errorMessage.textContent = "Please provide a valid email address";
        errorMessage.style.color = "red";
        emailInput.style.border = "1px solid red";
        notifyButton.style.marginBottom = "11px";
    } else {
        errorMessage.textContent = "You successfully subscribe";
        errorMessage.style.color = "green";
        emailInput.style.border = "1px solid green";
    }
}

notifyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    checkEmail();
})

emailInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkEmail();
      e.preventDefault();
    };
})