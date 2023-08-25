// 1. hiding the message using js.
// 2. On clicking generate pin button a four digit random number should be displayed in the upper display field
// 3. keypad button should be used to type the four digit pin to the display field
// 4. on clicking submit button if the pin match it will display positive message and if not matched display negative message
// 5. a person can click maximum 3 times the submit button after that the button will be inactive.

// notification message hidden at the loading of the page

let notifyElements = document.querySelectorAll(".notify");

document.addEventListener("DOMContentLoaded", function () {
  notifyElements.forEach(function (notify) {
    notify.style.display = "none";
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "gray";
  });
});

// random number generation

const generateButton = document.getElementById("generate-btn");

let pinDisplay = document.getElementById("pin-display");

generateButton.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 9000) + 1000;
  pinDisplay.value = randomNumber;
  submitButton.disabled = false;
  submitButton.style.backgroundColor = "blue";
});



// activating keypad
const button = Array.from(document.querySelectorAll(".button"));

const inputDisplay = document.getElementById("pin-input-display");

button.map((button) =>
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        inputDisplay.value = " ";
        break;
      case "<":
        inputDisplay.value = inputDisplay.value.slice(0, -1);
        break;
      default:
        inputDisplay.value += button.innerText;
    }
  })
);

// activating submit button

const submitButton = document.getElementById("submit");

const failMessage = document.getElementById("fail");
const successMessage = document.getElementById("success");

const tryLeft = document.getElementById("try-left");

let remainingAttempts = 3;

submitButton.addEventListener("click", () => {
  if (inputDisplay.value == ''){
    alert('Please provide a valid pin')
  }else{
    if (pinDisplay.value == inputDisplay.value) {
        successMessage.style.display = "block";
      } else {
        failMessage.style.display = "block";
        remainingAttempts--;
    
        tryLeft.textContent = remainingAttempts; // Update the remaining attempts
    
        if (remainingAttempts === 0) {
          tryLeft.textContent = "0";
          submitButton.disabled = true;
          submitButton.style.backgroundColor = "gray";
          // Disable the submit button after max attempts
        }
      }
  }
});
