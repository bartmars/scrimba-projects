import { menuArray } from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

const cartArray = []
let isCartEmpty = true
let cartTotal = 0

document.addEventListener('click', function(e) {
    if (e.target.dataset.addItem) {
        handleAddToCart(e.target.dataset.addItem)
    }
    else if (e.target.dataset.removeItem) {
        console.log(e.target.dataset.removeItem)
        handleRemoveFromCart(e.target.dataset.removeItem)
    }
})

function handleAddToCart(btnAddItemId) {
    /*

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
        Description.
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

function toggleCartVisibility () {
    if (isCartEmpty) {
        document.getElementById('card-items').classList.toggle('hidden')
        isCartEmpty = false
    } else {
        if (cartArray.length === 0) {
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
    let cartTotalHtml = ``

    cartArray.forEach(function(item) {    
        cartArrayHtml += `
            <div class="cart-item">
                <p id="item-name-${item.id}" class="item-name">
                    ${item.name} 
                    <button id="btn-remove-${item.uuid}" class="text-gray btn-remove" data-remove-item="${item.uuid}">remove</button>
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
        <button class="btn-purchase">Complete order</button>
    </div>
    `

    return cartHtml
}

function render() {
    document.getElementById('menu-items').innerHTML = getMenuHtml()
    document.getElementById('card-items').innerHTML = getCartHtml()
    // document.getElementById('card-total').innerHTML = getCartTotalHtml()
}

render()