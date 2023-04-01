const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", ];
const specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let passwordOne = "" 
let passwordTwo = ""
let passwordSize = 0

let isNumbersCharsEnabled = true
let isSpecialCharsEnabled = true

let numbersCharsBtn = document.getElementById("numbers-chars-btn")
let specialCharsBtn = document.getElementById("special-chars-btn")
let passwordOneEl = document.getElementById("password-one-el")
let passwordTwoEl = document.getElementById("password-two-el")
let numberOfChars = document.getElementById("number-of-chars")
let msgPasswordOneSaved = document.getElementById("password-one-saved")
let msgPasswordTwoSaved = document.getElementById("password-two-saved")

function toggleNumberCharsCharacters() {
    if (isNumbersCharsEnabled) {
        isNumbersCharsEnabled = false
        numbersCharsBtn.textContent = "Off"
        numbersCharsBtn.className = "accent-btn special-off-btn"
    } else {
        isNumbersCharsEnabled = true
        numbersCharsBtn.textContent = "On"
        numbersCharsBtn.className = "accent-btn special-on-btn"
    }
}

function toggleSpecialCharsCharacters() {
    if (isSpecialCharsEnabled) {
        isSpecialCharsEnabled = false
        specialCharsBtn.textContent = "Off"
        specialCharsBtn.className = "accent-btn special-off-btn"
    } else {
        isSpecialCharsEnabled = true
        specialCharsBtn.textContent = "On"
        specialCharsBtn.className = "accent-btn special-on-btn"
    }
}

function generatePasswords() {
    resetPasswords()
    if (numberOfChars.value === 0) {
        passwordSize = 15
    } else {
        passwordSize = numberOfChars.value
    }
    passwordOne = generatePassword()
    passwordTwo = generatePassword() 
    passwordOneEl.textContent = passwordOne
    passwordTwoEl.textContent = passwordTwo
}

function resetPasswords() {
    passwordOne = "" 
    passwordTwo = ""
    passwordOneEl.textContent = ""
    passwordTwoEl.textContent = ""
}

function generatePassword() {
    let password = ""
    
    if (isNumbersCharsEnabled && isSpecialCharsEnabled) {
        let charsWithNumbersAndSpecialChars = characters.concat(specialCharacters).concat(numberCharacters)
        for (let i = 0; i < passwordSize; i++) {
            let randomIndex = Math.floor(Math.random() * charsWithNumbersAndSpecialChars.length)
            password += charsWithNumbersAndSpecialChars[randomIndex]
        }
        return password
    } else if (isNumbersCharsEnabled) {
        let charsWithNumbers = characters.concat(numberCharacters)
        for (let i = 0; i < passwordSize; i++) {
            let randomIndex = Math.floor(Math.random() * charsWithNumbers.length)
            password += charsWithNumbers[randomIndex]
        }
        return password
    } else if (isSpecialCharsEnabled) {
        let charsWithSpecialChars = characters.concat(specialCharacters)
        for (let i = 0; i < passwordSize; i++) {
            let randomIndex = Math.floor(Math.random() * charsWithSpecialChars.length)
            password += charsWithSpecialChars[randomIndex]
        }
        return password
    } else {
        for (let i = 0; i < passwordSize; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length)
            password += characters[randomIndex]
        }
        return password
    }
}

function copyToClipboard(i) {
    if (i === 1) {
        navigator.clipboard.writeText(passwordOneEl.textContent);
        msgPasswordOneSaved.textContent = "Saved to clipboard!"
    } else {
        navigator.clipboard.writeText(passwordTwoEl.textContent.textContent);
        msgPasswordTwoSaved.textContent = "Saved to clipboard!"
    }
}   