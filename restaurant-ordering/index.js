import { menuArray } from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

const cartArray = []
let isCartEmpty = true
let isModalActive = false
let cartTotal = 0

document.addEventListener('click', function(e) {
    if (e.target.dataset.addItem) {
        handleAddToCart(e.target.dataset.addItem)
    }
    else if (e.target.dataset.removeItem) {
        handleRemoveFromCart(e.target.dataset.removeItem)
    }
    else if (e.target.id === 'btn-checkout') {
        handleActivateModal()
    }
    else if (e.target.id === 'btn-close') {
        handleDeactivateModal()
    }
})

function handleAddToCart(btnAddItemId) {
    /*
        Function to add item to cart and calculate total price of cart.
    */
    const itemObj = menuArray.filter(function(item) {
        return item.id == btnAddItemId
    })[0]

    cartArray.push({
        uuid: `${uuidv4()}`,
        id: `${itemObj.id}`,
        name: `${itemObj.name}`,
        price: `${itemObj.price}`,
    })

    cartTotal += itemObj.price

    toggleCartVisibility()

    render()
}

function handleRemoveFromCart (btnRemoveItemId) {
    /*
        Function for matching uuid (created via handleAddToCart) 
        and removing items from cart. Also it will decrement 
        'cartTotal' variable with item price. 
    */
    const itemObj = cartArray.filter(function(item) {
        return item.uuid == btnRemoveItemId
    })[0]

    cartArray.pop(btnRemoveItemId)
    cartTotal -= itemObj.price

    render()
}

function handleActivateModal() {
    document.getElementById('modal').style.display = "block"
    
    render()
}

function handleDeactivateModal() {
    document.getElementById('modal').style.display = "none"
    
    render()
}

function toggleCartVisibility() {
    if (isCartEmpty) {
        document.getElementById('card-items').classList.toggle('hidden')
        isCartEmpty = false
    } 
    else {
        if (cartArray.length === 0) {
            document.getElementById('card-items').classList.toggle('hidden')
            isCartEmpty = true
        }
    }
}


function getMenuHtml() {
    let menuHtml = ``

    menuArray.forEach(function(item) {
        menuHtml += `
        <div class="item-outer">
            <div class="item-inner">
                <div id="item-emoji-${item.id}" class="item-emoji">${item.emoji}</div>
                <div>
                    <p id="item-name-${item.id}" class="item-name">${item.name}</p>
                    <p id="item-info-${item.id}" class="text-gray">${item.ingredients}<p>
                    <p id="item-price-${item.id}" class="item-price">$${item.price}</p>
                </div>
                <button id="item-btn-${item.id}" class="btn-item" data-add-item="${item.id}">+</button>
            </div>
        </div>`
    })
    return menuHtml
}

function getCartHtml() {
    let cartHtml = ``
    let cartArrayHtml = ``

    cartArray.forEach(function(item) {    
        cartArrayHtml += `
            <div class="cart-item">
                <p id="item-name-${item.id}" class="item-name">
                    ${item.name} 
                    <button id="btn-remove-${item.uuid}" class="text-gray btn-text-only" data-remove-item="${item.uuid}">remove</button>
                </p>
                <p id="item-price-${item.id}" class="item-price">$${item.price}</p>
            </div>
        </div>`
    })

    cartHtml += `
    <div>
        <h3>Your order</h3>
    </div>
    <div>
        <p>${cartArray.length} item(s) in cart</p>
        ${cartArrayHtml}
    </div>
    <div class="card-checkout">
        <p>Total price:</p>
        <p>$${cartTotal}</p>
    </div>
    <div>
        <button id="btn-checkout" class="btn-purchase">Complete order</button>
    </div>`

    return cartHtml
}

function getModalHtml() {
    let modalHtml = ``

    modalHtml = `
        <div class="modal-inner">
            <div class="align-right">
                <button id="btn-close" class="btn-text-only">X Close</button>
            </div>
            <h2>Enter card details</h2>
            <form>
                <input id="name" placeholder="Enter your name" required>
                <input id="card-number" placeholder="Enter card number" maxlength="16" required>
                <input id="card-ccv" placeholder="Enter CVV" maxlength="4" required>
                <button id="btn-purchase" class="btn-purchase" type="submit">Pay</button>
            </form>
        </div>`
    return modalHtml
}

function render() {
    document.getElementById('menu-items').innerHTML = getMenuHtml()
    document.getElementById('card-items').innerHTML = getCartHtml()
    document.getElementById('modal').innerHTML = getModalHtml()
}

render()