const movieResults = document.getElementById('movie-results')
let movieArray = []
let movieArrayHtml = ''
let watchlistArray = []
let html = ''

document.addEventListener('DOMContentLoaded', () => {
    const watchlistItems = localStorage.getItem('movies')
    console.log(watchlistItems)
    if (!watchlistItems) {
        document.getElementById('watchlist').innerHTML = `
            <h2 class="error-text-700">Your watchlist is looking a little empty</h2>
            <p>
                <img src="images/icon-1.png" alt="Display of a black circle with a white add-sign">
                Let's add some movies!
            </p>
        `
    }
    watchlistItems.forEach(item => {
        requestMovie(item)
    })
})

document.addEventListener('click', async e => {
    if (e.target.dataset.del) {
        let watchlistItems = JSON.parse(localStorage.getItem('movies'))
        watchlistItems = watchlistArray.filter(item => {
            return item !== e.target.dataset.del
        })
        watchlistArray = watchlistItems
        localStorage.setItem('movies', JSON.stringify(watchlistItems))
    }
})

async function requestMovie(item) {
    const innerResponse = await fetch(`http://www.omdbapi.com/?i=${item}&apikey=ead28c58&t`)
    return innerData = await innerResponse.json()
}

function renderMovieHtml(movie) {
    const { imdbID, imdbRating, Poster, Title, Runtime, Genre, Plot } = movie
    return html = `
        <div class="item">
            <img src="${Poster}" alt=${Title}>
            <div>
                <div class="item-header">
                    <h2>${Title}</h2>
                    <p class="small-text-400">⭐️ ${imdbRating}</p>
                </div>
                <div class="item-details">
                    <p class="small-text-400">${Runtime}</p>
                    <p class="small-text-400">${Genre}</p>
                    <div class="item-watchlist">
                        <button id="add-to-watchlist-btn" class="add-to-watchlist-btn" data-add="${imdbID}" type="button">Add</button>
                        <button id="del-from-watchlist-btn" class="add-to-watchlist-btn" data-del="${imdbID}" type="button">Del</button>
                        <p class="small-text-400">#</p>
                    </div>
                </div>
                <p class="plot smaller-text-400">${Plot}</p>
            </div>
        </div>`            
}

