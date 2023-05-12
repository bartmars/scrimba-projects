document.addEventListener('click', function(e) {
    if (e.target.id === 'view-more-btn') {
        handleVisibility('enabled', 'article-04')
        handleVisibility('enabled', 'article-05')
        handleVisibility('enabled', 'article-06')
        handleVisibility('disabled', 'view-more-btn')
    }
})

function handleVisibility(state, elementId) {
    if (state === 'enabled') {
        document.getElementById(elementId).style.display = 'block'
    }
    else if (state === 'disabled') {
        document.getElementById(elementId).style.display = 'none'
    }
}