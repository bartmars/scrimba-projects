import { requestMovie } from "./js/requestMovie.js"

const resultsEl = document.getElementById('results')
const removeBtn = document.getElementById('remove-btn')
let html = ''

function renderMovieHtml(movie) {
    const { imdbID, imdbRating, Poster, Title, Runtime, Genre, Plot } = movie
    html += `
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
                        <button id="delete-${imdbID}" class="add-to-watchlist-btn" type="button">
                            <i class="bi bi-dash-circle-fill" data-del="${imdbID}"> Watchlist</i>
                        </button>
                    </div>
                </div>
                <p class="plot smaller-text-400">${Plot}</p>
            </div>
        </div>`
    resultsEl.style.background = 'none'
    resultsEl.style.height = 'auto'
    resultsEl.innerHTML = html           
}

document.addEventListener('DOMContentLoaded', () => {
    const movieArray = JSON.parse(localStorage.getItem('movies'))
    console.log('movieArray', movieArray)

    if (movieArray) {
        movieArray.forEach(movie => {
            renderMovieHtml(movie)
        })
    } else {
        resultsEl.style.background = 'none'
        resultsEl.style.textAlign = 'center'
        resultsEl.innerHTML = `
            <p class="error-text-700">Your watchlist is looking a little empty...</p>
            <a href="index.js"><i class="bi bi-plus-circle-fill"> Let's add some movies!</i></a>`
    }

})

document.addEventListener('click', () => {
    let watchlistArray = JSON.parse(localStorage.getItem('movies'))
    watchlistArray = watchlistArray.filter(movie => movie.id !== e.target.dataset.del)
    movieResults.innerHTML = ''
    watchlistArray.forEach(movie => {
        renderMovieHtml(movie)
    })
    localStorage.setItem('movies', JSON.stringify('movies', watchlistArray))
})