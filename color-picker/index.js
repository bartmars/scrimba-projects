const schemeNames = [
    'monochrome',
    'monochrome-dark',
    'monochrome-light',
    'analogic',
    'complement',
    'analogic-complement',
    'triad',
    'quad'
]

let hexValue = 'F55A5A'
let schemeValue = 'monochrome'

document.getElementById('color-picker').addEventListener('change', (e) => {
    hexValue = document.getElementById('color-picker').value.substring(1)
})

document.getElementById('select-scheme').addEventListener('change', (e) => {
    schemeValue = document.getElementById('select-scheme').value
})

document.addEventListener('click', (e) => {
    for (let i = 0; i < 5; i++) {
        if (e.target.id === `color-${i}`) {
            copyToClipboard(document.getElementById(`label-${i}`).textContent)
        }        
    }
})

document.getElementById('get-scheme-btn').addEventListener('click', (e) => {
    e.preventDefault()
    getColorScheme(hexValue, schemeValue)
})

function getColorScheme(hex, mode) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}`)
    .then(response => response.json())
    .then(data => updateColors(data))
}

function updateColors(data) {
    for (let i = 0; i < 5; i++) {            
        document.getElementById(`color-${i}`).style.backgroundColor = data.colors[i].hex.value
        document.getElementById(`label-${i}`).textContent = data.colors[i].hex.value
    }
}

function copyToClipboard(color) {
    navigator.clipboard.writeText(color)
}

function getColorSchemesSelectorHtml() {
    let html = ``
    schemeNames.forEach((item) => {
        html += `   <option>${item}</option>`
    })
    return html
}

function getColorSchemeHtml() {
    let html = ``
    for (let i = 0; i < 5; i++) {
        html += `
            <div class="color-layout">
                <div id="color-${i}" class="color"></div>
                <p id="label-${i}"></p>
            </div>`        
    }
    return html
}

function render() {
    document.getElementById('select-scheme').innerHTML = getColorSchemesSelectorHtml()
    document.getElementById('color-scheme').innerHTML = getColorSchemeHtml()
}

render()
