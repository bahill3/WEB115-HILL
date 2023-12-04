// Below are the links to the meal plans used for this project
// Link: https://www.eatingwell.com/article/8021744/meal-plan-to-gain-more-muscle/
// Link: https://www.eatingwell.com/article/290676/7-day-flat-belly-meal-plan/
// This is the event listener and function for the meal plan button
document.getElementById("mpButton").addEventListener("click", mealPlan); // Event listener for the "Create Meal Plan" button

function mealPlan() { // Validates email and creates meal plan when meal plan button is clicked
    // Variables from user input
    clientName = document.getElementById("name").value;
    clientEmail = document.getElementById("email").value;
    clientGoalList = document.getElementsByName("meal_plan");
    for (let i = 0; i < clientGoalList.length; i ++) {
        if (clientGoalList[i].checked) {
            clientGoal = clientGoalList[i];
        }
    }
    // Validation loop
    emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // This regular expression was written using the help of ChatGPT
    if (!emailRegEx.test(clientEmail)) { // This method tests whether a string fits within the outline of the regular expression
                                         // The if condition is if the string being tested does NOT match the regular expression
        window.alert("Must provide a valid email.");
    } else {
        // Create table and customize for different meal plan choices
        myText = ("<html>\n<head>\n<title>Meal Plan</title>\n<style>button { margin-right: 10px; }\n")
        myText += ("table { border-collapse: collapse;\nwidth: 100%; }")
        myText += ("td, th { border: 1px solid #dddddd;\npadding: 8px;\ntext-align: left; }</style>")
        myText += ("</head>\n<body>\n");
        myText += ("<table>\n<tr>\n<th></th>\n<th>Monday</th>\n<th>Tuesday</th>\n");
        myText += ("<th>Wednesday</th>\n<th>Thursday</th>\n<th>Friday</th>\n");
        myText += ("<th>Saturday</th>\n<th>Sunday</th>\n</tr>\n");
        // If, then statement changes the meal plan based on user input
        // Use this to set variables and then include variables in singular iteration of code for window
        if (clientGoal == clientGoalList[0]) {
            // Meal Plan for losing body fat
            breakfast = ("<td>Feta & Peppers Omelet</td>\n");
            am_snack = ("<td>Banana w/ Peanut Butter</td>\n");
            lunch = ("<td>Whole Wheat Veggie Wrap</td>\n");
            pm_snack = ("<td>Cup of Air-Popped Popcorn</td>\n");
            dinner = ("<td>Chickpea Pasta with Lemon Pesto</td>\n");
        } else if (clientGoal == clientGoalList[1]) {
            // Meal Plan for gaining muscle
            breakfast = ("<td>Chocolate and Peanut Butter Protein Shake</td>\n");
            am_snack = ("<td>Greek Yogurt w/ Strawberries</td>\n");
            lunch = ("<td>Turkey BLT Wrap</td>\n");
            pm_snack = ("<td>Edamame</td>\n");
            dinner = ("<td>Creamy Chicken Noodle Casserole</td>\n");
        }
        myText += ("<tr>\n<td>Breakfast</td>\n");
        myText += breakfast.repeat(7); // adds the same text 7 times
        myText += ("</tr>\n<tr>\n<td>AM Snack</td>\n");
        myText += am_snack.repeat(7);
        myText += ("</tr>\n<tr>\n<td>Lunch</td>\n");
        myText += lunch.repeat(7);
        myText += ("</tr>\n<tr>\n<td>PM Snack</td>\n");
        myText += pm_snack.repeat(7);
        myText += ("</tr>\n<tr>\n<td>Dinner</td>\n");
        myText += dinner.repeat(7);
        myText += ("</tr>\n</table>\n");
        myText += ("<br><br>");
        myText += ("<button type='button' id='clearButton'>Clear</button>");
        myText += ("<button type='button' id='printButton'>Print</button>");
        myText += ("<button type='button' id='downloadButton'>Download</button>");
        myText += ("</body>\n</html>");

        flyWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
        flyWindow.document.write(myText);

        // Event Listener and function for Clear button
        flyWindow.document.getElementById("clearButton").addEventListener("click", clearPlan);

        function clearPlan() {
            flyWindow.close();
    
            clientName = document.getElementById("name");
            clientEmail = document.getElementById("email");
            clientGoal = document.getElementsByName("meal_plan");

            clientName.value = "";
            clientEmail.value = "";
            for (let i = 0; i < clientGoal.length; i ++) {
                clientGoal[i].checked = false;
            }
        }

        // Event Listener and function for Print button
        flyWindow.document.getElementById("printButton").addEventListener("click", printPlan);

        function printPlan() {
            flyWindow.print();
        }

        // Event Listener and function for Download Button - help from chatGPT for creating the downloadPlan button
        flyWindow.document.getElementById("downloadButton").addEventListener("click", downloadPlan);

        function downloadPlan() {
            var htmlContent = flyWindow.document.documentElement.outerHTML;
            var blob = new Blob([htmlContent], { type: 'text/html' });
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = "meal_plan.html";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

// Event listener and function for clear button on main page
document.getElementById("clButton").addEventListener("click", clearForm);

function clearForm() {
    clientName = document.getElementById("name");
    clientEmail = document.getElementById("email");
    clientGoal = document.getElementsByName("meal_plan");

    clientName.value = "";
    clientEmail.value = "";
    for (let i = 0; i < clientGoal.length; i ++) {
        clientGoal[i].checked = false;
    }
}