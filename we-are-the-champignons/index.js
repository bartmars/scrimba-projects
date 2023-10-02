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

onValue(referenceTableInDB, (snapshot) => {
    const itemsArray = Object.entries(snapshot.val())

    clearEndorsementList()

    const itemsArrayHtml = itemsArray.map(item => {
        addItemToList(item)
    })
})

function clearInput() {
    inputEndorsementText.textContent = ""
}

function clearEndorsementList() {
    endorsementList.innerHTML = ""
}

function addItemToList(item) {
    let newItem = document.createElement("div")
    newItem.classList = "endorsement"
    newItem.textContent = item[1]

    newItem.addEventListener("click", () => {
        let referenceItemInTable = ref(database, `we-are-the-champions/${item[0]}`)
        remove(referenceItemInTable)
    })

    endorsementList.append(newItem)
}