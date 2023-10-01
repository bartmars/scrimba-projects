import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js"

const firebaseAppSettings = {
    databaseURL: "https://todos-a000e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todos-a000e"
}

const app = initializeApp(firebaseAppSettings)
const database = getDatabase(app)
const databaseTableInDB = ref(database, "todos")

const addButton = document.getElementById("add-button")
const inputField = document.getElementById("input-field")
const todosList = document.getElementById("todos-list")

addButton.addEventListener("click", () => {
    let inputValue = inputField.value

    push(databaseTableInDB, inputValue)
    clearInputField()
})

onValue(databaseTableInDB, (snapshot) => {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())

        clearTodosList()
    
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            addItemToList(currentItem)
        }
    }
    else {
        todosList.innerHTML = "No items here"
    }
})

function addItemToList(item) {
    let itemID = item[0]
    let itemValue = item[1]

    let newItem = document.createElement("li")
    newItem.textContent = itemValue

    newItem.addEventListener("click", () => {
        let referenceOfItemInDB = ref(database, `todos/${itemID}`)
        
        remove(referenceOfItemInDB)
    })

    todosList.append(newItem)
}

function clearTodosList() {
    todosList.innerHTML = ""
}

function clearInputField() {
    inputField.value = ""
}