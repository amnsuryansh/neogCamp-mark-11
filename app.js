

const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkNumberButton = document.querySelector('#check-number');
const outputBox = document.querySelector('#output-box');

function compareValues(sum ,luckyNumber) {
    if (sum % luckyNumber === 0) {
        outputBox.innerText = "Birthday is lucky";
    } else {
        outputBox.innerText = "Your birthday is not lucky";
    }
}

function checkNumberIsLucky() {
    const bdate = dateOfBirth.value;
    const sum = calculateSum(bdate);
    if (sum && bdate) {
        compareValues(sum, luckyNumber.value);
    }
    else {
        outputBox.innerText = "please enter both the fields";
    }
}

function calculateSum(bdate) {
    bdate = bdate.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < bdate.length; i++) {
        sum = sum + Number(bdate.charAt(i));
    }
    return sum;
}

checkNumberButton.addEventListener("click",
    checkNumberIsLucky);

