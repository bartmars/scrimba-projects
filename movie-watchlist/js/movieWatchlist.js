let watchlistArray = []

export function addMovieToWatchList(movie) {
    watchlistArray.push(movie)
    localStorage.setItem('movies', JSON.stringify(watchlistArray))
}

export function deleteMovieFromWatchlist(movie) {
    let watchlistItems = JSON.parse(localStorage.getItem('movies'))
    watchlistItems = watchlistArray.filter(movie => {
        return movie !== e.target.dataset.del
    })
    watchlistArray = watchlistItems
    localStorage.setItem('movies', JSON.stringify(watchlistItems))
}