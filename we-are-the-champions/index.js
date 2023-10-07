import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js"
import { getDatabase, ref, onValue, push, remove } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js"

const firebaseAppSettings = {
    databaseURL: "https://realtime-database-a6c82-default-rtdb.europe-west1.firebasedatabase.app/",
    profileId: "realtime-database-a6c82"
}

const app = initializeApp(firebaseAppSettings)
const database = getDatabase(app)
const referenceTableInDB = ref(database, "we-are-the-champions")

const inputMessage = document.getElementById("input-message")
const inputTo = document.getElementById("input-to")
const inputFrom = document.getElementById("input-from")
const addButton = document.getElementById("add-button")
const endorsementList = document.getElementById("message-list")

addButton.addEventListener("click", () => {
    // let inputMessageValue = inputMessage.value
    let inputObject = {
        "to": inputTo.value,
        "from": inputFrom.value,
        "message": inputMessage.value,
        "stars": 0
    } 
    push(referenceTableInDB, inputObject)
    clearInput()
})

inputMessage.addEventListener("click", () => {
    /* textareas with placeholder text, behave differently than input fields.
       This mimics the same behavior. */
    clearInput()
})

onValue(referenceTableInDB, (snapshot) => {
    if (snapshot.exists()) {
        const itemsArray = Object.entries(snapshot.val())

        clearEndorsementList()
    
        const itemsArrayHtml = itemsArray.toReversed().map(item => {
            addItemToMessageList(item)
        })
    }
    else {
        endorsementList.textContent = "No endorsements... yet!"
    }

})

function clearInput() {
    inputMessage.value = ""
    inputTo.value = ""
    inputFrom.value = ""
}

function clearEndorsementList() {
    endorsementList.innerHTML = ""
}

function addItemToMessageList(item) {
    /* This is working! */
    // let newItem = document.createElement("div")
    // newItem.classList = "endorsement"
    // newItem.textContent = item[1]

    console.log(item)

    /* Trying to get this to work, works!! */
    const {to, from, message, stars} = item[1] 
    let newItem = document.createElement("div")
    newItem.classList = "endorsement"
    newItem.innerHTML = `
    <p class="to-person">To ${to}</p>
    ${message}
    <div class="from-person-details">
        <p class="from-person">From ${from}</p>
        <p class="from-person">🖤 ${stars}</p>
    </div>`

    newItem.addEventListener("dblclick", () => {
        /* Not required, but nice to have */
        let referenceItemInTable = ref(database, `we-are-the-champions/${item[0]}`)
        remove(referenceItemInTable)
    })

    endorsementList.append(newItem)
}