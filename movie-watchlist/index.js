const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')
const movieResults = document.getElementById('movie-results')

let searchTerm = ''
let html

searchInput.addEventListener('change', (e) => {
    searchTerm = searchInput.value
    return searchTerm
})

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    getMovie(searchTerm)
})

function getMovie(movieTitle) {
    fetch(`http://www.omdbapi.com/?t=${movieTitle}&plot=full&apikey=ead28c58&t`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            movieResults.style.background = 'none'
            getMovieListHtml(data.Poster, data.Title, data.imdbRating, data.Runtime, data.Genre, data.Plot)
            renderHtml()
    })
}

function getMovieListHtml(poster, title, rating, runtime, genre, plot) {
    return html = `
        <div class="item">
            <img src="${poster}">
            <div>
                <div class="item-header">
                    <h2>${title}</h2>
                    <p class="small-text-400">⭐️ ${rating}</p>
                </div>
                <div class="item-details">
                    <p class="small-text-400">${runtime}</p>
                    <p class="small-text-400">${genre}</p>
                    <div class="item-watchlist">
                        <button id="add-to-watchlist-btn" class="add-to-watchlist-btn">
                            <img src="images/icon-1.png" alt="add to watchlist button">
                        </button>
                        <p class="small-text-400">Watchlist</p>
                    </div>
                </div>
                <p class="plot smaller-text-400">${plot.slice(0, 125) + `<span>... Read More</span>`}</p>
            </div>
        </div>`
}

function renderHtml() {
    movieResults.innerHTML = html
}