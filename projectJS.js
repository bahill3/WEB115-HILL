// Need: Event Listener for the form button
//       Function to execute when called in event listener
//       Function, mentioned above, that opens a new window with meal plan
//       Form validation - proper email
document.getElementById("mpButton").addEventListener("click", mealPlan);

function mealPlan() {
    // Variables from user input
    clientName = document.getElementById("name").value;
    clientEmail = document.getElementById("email").value;
    clientGoal = document.querySelector("#goals").value;

    // Validation loop
    // The regular expression below does not work with validation as intended (written 11-27-23)
    emailRegEx = /^[a-zA-Z0-9._%+-] + @[a-zA-Z0-9.-] + \.[a-zA-Z]{2,}$/; // This regular expression was written using the help of ChatGPT
    if (clientEmail !== emailRegEx) {
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