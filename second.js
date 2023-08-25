// function for getting id
function idFinder(idName) {
  const name = document.getElementById(idName);
  return name;
}

// generating ids

const pinDisplay = idFinder("pin-display");
const generateButton = idFinder("generate-btn");
const inputDisplay = idFinder("pin-input-display");
const button = Array.from(document.getElementsByClassName("button"));
const submitButton = idFinder("submit");
const tryLeft = idFinder("try-left");
const failMessage = idFinder("fail");
const successMessage = idFinder("success");

// notification message hide and submit button deactivating

document.addEventListener("DOMContentLoaded",function() {
  failMessage.style.display = "none";
  successMessage.style.display = "none";
  submitButton.disabled = true;
  submitButton.style.backgroundColor = "gray";
});

// generation of pin

const randomNumber = Math.floor(Math.random()* 9000) + 1000; 

generateButton.addEventListener('click', () => {
    pinDisplay.value = randomNumber;
    submitButton.disabled = false;
  submitButton.style.backgroundColor = "blue";
})

// activating keypad button

button.map((button) =>{
    button.addEventListener('click', (e)=>{
        switch(e.target.innerText){
            case 'C':
                inputDisplay.value = '';
                break;
            case '<':
                inputDisplay.value = inputDisplay.value.slice(0, -1);
                break;
            default:
                inputDisplay.value += e.target.innerText;
        }
    })
})

// activating submit button
let pinTry = 3;
submitButton.addEventListener('click', () => {
    if(inputDisplay.value === ''){
        alert('Please provide 4 digit number');
    }else{
        if(pinDisplay.value == inputDisplay.value){
            successMessage.style.display = 'block';
        }
        else{
            failMessage.style.display = 'block';
            pinTry--;
            tryLeft.innerText = pinTry;
            inputDisplay.value = '';
            if(tryLeft.innerText == 0){
                submitButton.disabled = true;
  submitButton.style.backgroundColor = "gray";
            }


        }
    }
})