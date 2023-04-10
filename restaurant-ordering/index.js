import { menuArray } from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

const cartArray = []
let cartTotal = 0

document.addEventListener('click', function(e) {
    if (e.target.dataset.addItem) {
        handleAddToCart(e.target.dataset.addItem)
    }
})

function handleAddToCart(btnAddItemId) {    
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

    render()
}

function handleRemoveFromCart () {

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
                    <p id="item-info-${item.id}" class="item-description">${item.ingredients}<p>
                    <p id="item-price-${item.id}" class="item-price">$${item.price}</p>
                </div>
                <button id="item-btn-${item.id}" class="item-btn" data-add-item="${item.id}">+</button>
            </div>
        </div>`
    })
    return menuHtml
}

function getCartHtml() {
    let cartArrayHtml = ``

    cartArray.forEach(function(item) {    
        cartArrayHtml += `
            <div class="item-inner">
                <p id="item-name-${item.id}" class="item-name">${item.name}</p>
                <p id="item-price-${item.id}" class="item-price">$${item.price}</p>
            </div>
        </div>`
    })
    return cartArrayHtml
}

function getCartTotalHtml() {
    let cartTotalHtml = ``

    cartArray.forEach(function() {
        cartTotalHtml = `
        <div>
            <p>Total price: $${cartTotal}</p>
        </div>`
    })
    return cartTotalHtml
}

function render() {
    document.getElementById('menu-items').innerHTML = getMenuHtml()
    document.getElementById('card-items').innerHTML = getCartHtml()
    document.getElementById('card-total').innerHTML = getCartTotalHtml()
}

render()