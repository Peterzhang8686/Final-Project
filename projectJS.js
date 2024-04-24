document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("mealPlanForm");
    const mealList = document.getElementById("mealList");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        form.submit();
    });
});

function addMeal() {
    var mealInput = document.getElementById("mealInput").value;
    var weekday = document.getElementById("weekday").value;
    var meal = document.getElementById("meal").value;
    var mealList = document.getElementById("mealList");
    var listItem = document.createElement("div");
    listItem.textContent = weekday + " " + meal + ": " + mealInput;
    mealList.appendChild(listItem);
    document.getElementById("mealPlaceHolder").style.display = "none";
}


function generateMealPlan() {
    // Check if email is valid
    var email = document.getElementById("email").value;
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Get user input for meal plan
    var name = document.getElementById("name").value;
    var goal = document.getElementById("goal").value;
    var mealListContent = document.getElementById("mealList").innerHTML;

    // Generate the meal plan HTML
    var mealPlanHTML = `
        <h2>Weekly Meal Plan</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Goal for the Week:</strong> ${goal}</p>
        <p><strong>Meal Plan:</strong></p>
        ${mealListContent}
    `;

    // Open a new window and write the meal plan HTML
    var mealPlanWindow = window.open("", "_blank");
    mealPlanWindow.document.write(mealPlanHTML);
}

function clearMealPlan() {
    // Clear all input fields
    document.getElementById("mealPlanForm").reset();
    document.getElementById("mealList").reset();
}

function validateEmail(email) {
    // Simple email validation regex
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

