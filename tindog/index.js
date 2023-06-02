// Remember to import the data and Dog class!
import dogsData from './data.js'
import Dog from './Dog.js'

// Not needed, just yet -> nice to use once project is done
// const dogsArray = dogsData.map((item) => item.name)

function getNewDog() {
    const nextDogData = dogsData.shift()
    return nextDogData ? new Dog(nextDogData) : {}
}

function isVisible(elementId, state) {
    if (state === 'enabled') {
        document.getElementById(elementId).style.display = 'display'
    }
    else if (state === 'disabled') {
        document.getElementById(elementId).style.display = 'none'
    }
    else {
        document.getElementById(elementId).style.display = 'none'
    }
}

function isLiked() {
    isVisible('badge-like', 'enabled')
}

function render() {
    document.getElementById('featured-dog').innerHTML = dog.getDogHtml()
}

let dog = getNewDog()

render()