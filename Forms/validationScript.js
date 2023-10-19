    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message

let userValue = document.getElementById("inputField").value;

let userForm = document.getElementById("myForm");
let subButton = userForm.lastChild;

subButton.addEventListener("click", alphNumValidation);

function alphNumValidation() {
  let userText = userValue;
  let isValid = /^[a-zA-Z0-9]*$/.test(userText);
  if (isValid = true) {
    window.alert("Your form has been submitted!");
  } else if (isValid = false) {
    document.getElementById("inputField").setCustomValidity("Input must be letters and numbers only");
    userText = "";
  }
}