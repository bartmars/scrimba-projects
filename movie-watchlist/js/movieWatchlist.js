import { renderMovieHtml } from "./renderMovieHtml.js"

const movieResults = document.getElementById('movie-results')

export function addMovieToWatchList(movie) {
    if (localStorage.getItem('movies')) {
        const watchlistArray = JSON.parse(localStorage.getItem('movies'))
        watchlistArray.push(movie)
        localStorage.setItem('movies', JSON.stringify(watchlistArray))
    } else {
        const watchlistArray = []
        watchlistArray.push(movie)
        localStorage.setItem('movies', JSON.stringify(watchlistArray))
    }
}

export function deleteMovieFromWatchlist(movie) {
    // let watchlistItems = JSON.parse(localStorage.getItem('movies'))
    // watchlistArray.push(movie)

    // watchlistItems = watchlistArray.filter(movie => {
    //     return movie !== watchlistArray[0]
    // })
    // watchlistArray = watchlistItems
    // localStorage.setItem('movies', JSON.stringify(watchlistItems))

    let watchlistArray = JSON.parse(localStorage.getItem('movies'))
    watchlistArray = watchlistArray.filter(item => item.id !== movie)
    movieResults.innerHTML = ''
    watchlistArray.forEach(movie => {
        renderMovieHtml(movie)
    })
    localStorage.setItem('movies', JSON.stringify('movies', watchlistArray))

}