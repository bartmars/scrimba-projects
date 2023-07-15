let watchlistArray = []

export function addMovieToWatchList(movie) {
    watchlistArray.push(movie)
    localStorage.setItem('movies', JSON.stringify(watchlistArray))
}

export function deleteMovieFromWatchlist(movie) {
    let watchlistItems = JSON.parse(localStorage.getItem('movies'))
    watchlistArray.push(movie)

    watchlistItems = watchlistArray.filter(movie => {
        return movie !== watchlistArray[0]
    })
    watchlistArray = watchlistItems
    localStorage.setItem('movies', JSON.stringify(watchlistItems))

}