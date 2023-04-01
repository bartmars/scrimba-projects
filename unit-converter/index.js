const convertIp = document.getElementById("convert-ip")
const convertBtn = document.getElementById("convert-btn")
let lengthP = document.getElementById("length-p")
let volumeP = document.getElementById("volume-p")
let massP = document.getElementById("mass-p")

convertBtn.addEventListener("click", function() {
    reset()
    let number = convertIp.value
    /*
    1 meter = 3.281 feet, 1 liter = 0.264 gallon, 1 kilogram = 2.204 pound
    */
    let lengthToFeet = multiply(number, 3.281)
    let lengthToMeter = divide(number, 3.281)    
    let volumeToGallons = multiply(number, 0.264)
    let volumeToLiters = divide(number, 0.264)
    let massToPounds = multiply(number, 2.204)
    let massToKilograms = divide(number, 2.204)

    lengthP.textContent = `${number} meters = ${lengthToFeet.toFixed(3)} feet | ${number} feet = ${lengthToMeter.toFixed(3)} meters`
    volumeP.textContent = `${number} liters = ${volumeToGallons.toFixed(3)} gallons | ${number} gallons = ${volumeToLiters.toFixed(3)} liters`
    massP.textContent = `${number} kilos = ${massToPounds.toFixed(3)} pounds | ${number} pounds = ${massToKilograms.toFixed(3)} kilos`
})

function reset() {
    number = 0
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}