// This is the event listener and function for the meal plan button
document.getElementById("mpButton").addEventListener("click", mealPlan); // Event listener for the "Create Meal Plan" button

function mealPlan() { // Validates email and creates meal plan when meal plan button is clicked
    // Variables from user input
    clientName = document.getElementById("name").value;
    clientEmail = document.getElementById("email").value;
    clientGoal = document.querySelector("#goals").value;

    // Validation loop
    emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // This regular expression was written using the help of ChatGPT
    if (!emailRegEx.test(clientEmail)) { // This method tests whether a string fits within the outline of the regular expression
                                         // The if condition is if the string being tested does NOT match the regular expression
        window.alert("Must provide a valid email.");
    } else {
        myText = ("<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body>\n");
        myText += ("<p>Hello " + clientName + "! This is your customized meal plan.</p>\n");
        // Need to add more lines with actual meal plan
        myText += ("</body>\n</html>");

        flyWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
        flyWindow.document.write(myText);
    }
}
// This is the event listener and function for the clear button
document.getElementById("clearButton").addEventListener("click", clearForm);

function clearForm() {
    clientName = document.getElementById("name");
    clientEmail = document.getElementById("email");
    clientGoal = document.querySelector("#goals");

    clientName.value = "";
    clientEmail.value = "";
    clientGoal.value = "";
}
// This is the event listener and function for the print button - Put this on the popup window with the meal plan

// This is the event listener and function for the download button - Put this on the popup window with the meal plan