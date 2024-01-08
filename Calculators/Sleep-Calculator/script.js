
// eventlistener for submit button
const button = document.querySelector('.btn')
button.addEventListener('click', function () {
    // take user age input and check error
    const age = document.getElementById('age-input').value
    ageErrorHandler(age)

    // take user dropdown option and check error
    const dropdown = getUserActivityLevel()
    const dropdownError = dropdownErrorHandler(dropdown)
    // if(!dropdownError) {
    //     const sleepDuration = calculateSleepDuration(age, dropdown)
    //     displaySleepDuration(sleepDuration)
    // }
    
})

const displaySleepDuration = (sleepDuration) =>{
    const contentBox = document.querySelector('.content-box')

    var displayDiv = document.createElement('div')
    displayDiv.className = 'content'

    displayDiv.textContent = `You need ${sleepDuration} hrs of sleep.`

    contentBox.appendChild(displayDiv)
}


// get the user selected activity level from dropdown
const getUserActivityLevel = () =>{
    const dropdown = document.getElementById('dropdown').value
    return dropdown
}

const ageErrorHandler = (age) =>{
    const errorContainer = document.querySelector('.error-container');
    var existingError = document.querySelector('.error-box');

    if(age > 100 || age < 0){
        if(!existingError){
             // console.log("fahshfksad")
            var errorDiv = document.createElement("div")
            errorDiv.className = "error-box"

            // Set the error message as the content of the div
            errorDiv.textContent = "Age should be between 1 and 100"
        
            // Append the div to the body or any other container element
            errorContainer.appendChild(errorDiv)
        }
       
    }
    else{
        var existingError = document.querySelector('.error-box');
  
        if (existingError) {
            // Remove the existing error message if it exists
            existingError.remove();
        }
    }
}

const dropdownErrorHandler = (dropdownOption) =>{
    const optionContainer = document.querySelector('.option-container')
    var existingError = document.querySelector('.option-error-box');

    if(dropdownOption === 'Select an option'){
        if(!existingError){
            var errorDiv = document.createElement("div")
            errorDiv.className = "option-error-box"

            // Set the error message as the content of the div
            errorDiv.textContent = "You need to select atleast one option."
        
            // Append the div to the body or any other container element
            optionContainer.appendChild(errorDiv)

            return 1
         }
    }
        
    else{
        var existingError = document.querySelector('.option-error-box');
  
        if (existingError) {
            // Remove the existing error message if it exists
            existingError.remove();
        }
        return 0
    }
}



function calculateSleepDuration(age, activityLevel) {
    // Sleep duration table (in hours) based on age and activity level
    const sleepTable = {
        "1-3": [12, 11, 10, 10, 10, 9],
        "4-6": [13, 11, 10, 9, 9, 9],
        "7-12": [12, 11, 9, 9, 9, 8],
        "13-18": [10, 9, 8, 8, 8, 8],
        "19-25": [9, 8, 7, 7, 7, 6],
        "26-64": [9, 8, 8, 7, 7, 6],
        "65+": [8, 8, 7, 7, 7, 6]
    }

    // Get the corresponding sleep duration based on age group
    const ageGroup = getAgeGroup(age)
    const sleepDuration = sleepTable[ageGroup][getActivityLevelIndex(activityLevel)]
    return sleepDuration;
}

function getAgeGroup(age) {
    if (age >= 1 && age <= 3) return "1-3";
    if (age >= 4 && age <= 6) return "4-6";
    if (age >= 7 && age <= 12) return "7-12";
    if (age >= 13 && age <= 18) return "13-18";
    if (age >= 19 && age <= 25) return "19-25";
    if (age >= 26 && age <= 64) return "26-64";
    if (age >= 65 && age <= 100) return "65+";
    return null; // Handle cases where age is outside the specified ranges
}

function getActivityLevelIndex(activityLevel) {
    const activityLevels = ["Sedentary: little or no exercise", "Exercise 1-3 times/week", "Exercise 4-5 times/week", "Daily exercise", "Intense exercise 6-7 times/week", "Very intense exercise daily, or physical job"];
    return activityLevels.indexOf(activityLevel);
}
