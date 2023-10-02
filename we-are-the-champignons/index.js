import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js"
import { getDatabase, ref, onValue, push, remove } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js"

const firebaseAppSettings = {
    databaseURL: "https://realtime-database-a6c82-default-rtdb.europe-west1.firebasedatabase.app/",
    profileId: "realtime-database-a6c82"
}

const app = initializeApp(firebaseAppSettings)
const database = getDatabase(app)
const referenceTableInDB = ref(database, "we-are-the-champions")

const inputEndorsementText = document.getElementById("input-endorsement-text")
const addButton = document.getElementById("add-button")
const endorsementList = document.getElementById("endorsements-list")

addButton.addEventListener("click", () => {
    let inputEndorsementTextValue = inputEndorsementText.value
    push(referenceTableInDB, inputEndorsementTextValue)
    clearInput()
})

inputEndorsementText.addEventListener("click", () => {
    /* textareas with placeholder text, behave differently than input fields.
       This mimics the same behavior. */
    clearInput()
})

onValue(referenceTableInDB, (snapshot) => {
    if (snapshot.exists()) {
        const itemsArray = Object.entries(snapshot.val())

        clearEndorsementList()
    
        const itemsArrayHtml = itemsArray.map(item => {
            addItemToList(item)
        })
    }
    else {
        endorsementList.textContent = "No endorsements... yet!"
    }

})

function clearInput() {
    inputEndorsementText.value = ""
}

function clearEndorsementList() {
    endorsementList.innerHTML = ""
}

function addItemToList(item) {
    /* This is working! */
    // let newItem = document.createElement("div")
    // newItem.classList = "endorsement"
    // newItem.textContent = item[1]

    /* Trying to get this to work */
    let newItem = document.createElement("div")
    newItem.classList = "endorsement"
    newItem.innerHTML = `
    <p class="to-person">${item[0]}</p>
    ${item[1]}
    <div class="from-person-details">
        <p class="from-person">${item[0]}</p>
        <p class="from-person">🖤 ${item[0]}</p>
    </div>`


    newItem.addEventListener("dblclick", () => {
        /* Not required, but nice to have */
        let referenceItemInTable = ref(database, `we-are-the-champions/${item[0]}`)
        remove(referenceItemInTable)
    })

    endorsementList.append(newItem)
}