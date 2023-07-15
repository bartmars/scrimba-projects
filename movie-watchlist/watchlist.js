import { renderMovieHtml } from "./js/renderMovieHtml.js"
import { requestMovie } from "./js/requestMovie.js"
import { addMovieToWatchList, deleteMovieFromWatchlist } from "./js/movieWatchlist.js"

const movieResults = document.getElementById('movie-results')
let movieArrayHtml = ''

document.addEventListener('DOMContentLoaded', () => {
    const movieWatchList = JSON.parse(localStorage.getItem('movies'))
    console.log('localStorage:', movieWatchList)

    movieWatchList.forEach(movie => {
        movieArray += requestMovie(movie.imdbID)
    })
    console.log('HTML:', movieArrayHtml)
    movieResults.innerHTML = movieArrayHtml
})

