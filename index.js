const input = document.getElementById("input-value");
const convertBtn = document.getElementById("convert-btn");
const lengthPart = document.getElementById("length-part");
const volumePart = document.getElementById("volume-part");
const massPart = document.getElementById("mass-part");
const error = document.getElementById("error-msg");

convertBtn.addEventListener("click", convert)

function convert(){
    const value = input.value;
    if(!isNaN(value)){
        error.textContent = "";
        input.classList.remove("red-border");
        lengthPart.textContent = `${value} meters = ${(value*3.281).toFixed(3)} feets | ${value} feets = ${(value/3.281).toFixed(3)} meters`;
        volumePart.textContent = `${value} liters = ${(value*0.264).toFixed(3)} gallons | ${value} gallons = ${(value/0.264).toFixed(3)} liters`;
        massPart.textContent = `${value} kilograms = ${(value*2.204).toFixed(3)} pounds | ${value} pounds = ${(value/2.204).toFixed(3)} kilograms`;
    }else{
        input.classList.add("red-border");
        error.textContent = `The input is not a number, Please try again!`;
        lengthPart.textContent = "";
        volumePart.textContent = "";
        massPart.textContent = "";
    }
}
