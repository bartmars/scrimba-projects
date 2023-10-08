import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js"
import { getDatabase, ref, onValue, push, set, increment } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js"

const firebaseAppSettings = {
    databaseURL: "https://realtime-database-a6c82-default-rtdb.europe-west1.firebasedatabase.app/",
    profileId: "realtime-database-a6c82"
}
const app = initializeApp(firebaseAppSettings)
const database = getDatabase(app)
const referenceTableInDB = ref(database, "we-are-the-champions")

let isLiked = false

const inputMessage = document.getElementById("input-message")
const inputTo = document.getElementById("input-to")
const inputFrom = document.getElementById("input-from")
const addButton = document.getElementById("add-button")
const messageList = document.getElementById("message-list")

addButton.addEventListener("click", () => {
    let inputObject = {
        "to": inputTo.value,
        "from": inputFrom.value,
        "message": inputMessage.value,
        "stars": 0,
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

        clearMessageList()
    
        const itemsArrayHtml = itemsArray.toReversed().map(item => {
            addItemToMessageList(item)
        })
    }
    else {
        messageList.textContent = "No endorsements... yet!"
    }

})

function clearInput() {
    inputMessage.value = ""
    inputTo.value = ""
    inputFrom.value = ""
}

function clearMessageList() {
    messageList.innerHTML = ""
}

function addItemToMessageList(item) {
    const {to, from, message, stars} = item[1] 
    let newItem = document.createElement("div")
    newItem.classList = "endorsement"
    newItem.innerHTML = `
    <p class="to-person">To ${to}</p>
    ${message}
    <div class="from-person-details">
        <p class="from-person">From ${from}</p>
        <p class="from-person" id="stars">🖤 ${stars}</p>
    </div>`

    newItem.addEventListener("click", () => {
        if (isLiked) {
            set(ref(database, `we-are-the-champions/${item[0]}`), {
                to: item[1].to,
                from: item[1].from,
                message: item[1].message,
                stars: increment(-1)
            })
            isLiked = false
        }
        else {
            set(ref(database, `we-are-the-champions/${item[0]}`), {
                to: item[1].to,
                from: item[1].from,
                message: item[1].message,
                stars: increment(1)
            })
            isLiked = true
        }
    })
    messageList.append(newItem)
}


