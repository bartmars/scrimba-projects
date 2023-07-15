import { requestMovie } from "./js/requestMovie.js"
import { addMovieToWatchList, deleteMovieFromWatchlist } from "./js/movieWatchlist.js"

document.addEventListener('click', async e => {
    if (e.target.id === 'search-btn') {
        e.preventDefault()
        let searchTerm = document.getElementById('search-input').value
        requestMovie(searchTerm)
    }
    else if (e.target.dataset.add) {
        addMovieToWatchList(e.target.dataset.add)
    }
    else if (e.target.dataset.del) {
        deleteMovieFromWatchlist(e.target.dataset.del)
    }
})

