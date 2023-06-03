// Remember to import the data and Dog class!
import dogsData from './data.js'
import Dog from './Dog.js'

const dogsArray = dogsData
let dogsLikedArray = []
let dogToContact = ''
let isWaiting = false

document.addEventListener('click', function(e) {
    if (e.target.id === 'nope-btn') {
        isDisliked()
    }
    else if (e.target.id === 'like-btn') {
        isLiked()
    }
})

function isVisible(elementId, state) {
    if (state === 'enabled') {
        document.getElementById(elementId).classList.toggle('hidden')
    }
    else if (state === 'disabled') {
        document.getElementById(elementId).style.display = 'none'
    }
    else {
        document.getElementById(elementId).style.display = 'none'
    }
}

function getNewDog(data) {
    const nextDogData = data.shift()
    return nextDogData ? new Dog(nextDogData) : {}
}

function isDisliked() {
    if (!isWaiting) {
        isVisible('badge-nope', 'enabled')
        getNextProfile(false, true)
    }      
}

function isLiked() {
    isVisible('badge-like', 'enabled')
    dog.setMatchStatus(true, true)
    getNextProfile(true, true)
}

function getNextProfile(hasBeenLikedBool, hasBeenSwipedBool) {
    if (hasBeenLikedBool && hasBeenSwipedBool) {
        dogsLikedArray.push(dog.name)
        console.log(dogsLikedArray)
    }
    if (dogsArray.length) {
        console.log(dogsArray.length)
        isWaiting = true
        dog.setMatchStatus(hasBeenLikedBool, hasBeenSwipedBool)
        if (dogsArray.length > 0) {
            setTimeout(() => {
                dog = getNewDog(dogsArray)
                render()
                isWaiting = false
            }, 1500)
        }
    }
    else {
        dogsLikedArray.forEach((dog) => {
            dogToContact += `${dog} `
        })
        document.getElementById('main').innerHTML = `
            <div class="centered-text">
                <h1>No more dogs in your area 🐶</h1>
                <p>But you could try to contact:</p>
                <p>${dogToContact}</p>
            </div>`
    } 
}

function render() {
    document.getElementById('main').innerHTML = dog.getDogHtml()
}

let dog = getNewDog(dogsArray)

render()