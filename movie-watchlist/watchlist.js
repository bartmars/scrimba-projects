const resultsEl = document.getElementById('results')
let html = ''
let movieArray = []
let movieArrayHtml = ''

function renderMovieHtml(movie) {
    const { id, ratings, year, poster, title, runtime, genre, plot } = movie
    return html = `
        <div class="item">
            <img src="${poster}" alt=${title}>
            <div>
                <div class="item-header">
                    <h2>${title}</h2>
                    <p class="small-text-400">⭐️ ${ratings}</p>
                </div>
                <div class="item-details">
                    <p class="small-text-400">${runtime}</p>
                    <p class="small-text-400">${genre}</p>
                    <div class="item-watchlist">
                        <button id="add-watchlist${id}" class="watchlist-btn">
                            <span>
                                <i class="bi bi-dash-circle-fill"
                                    data-id=${id} 
                                    data-poster=${poster}
                                    data-title=${title}
                                    data-year=${year}
                                    data-ratings=${ratings}
                                    data-runtime=${runtime}
                                    data-genre=${genre}
                                    data-plot=${plot}
                                > 
                                    Watchlist
                                </i>
                            </span>
                        </button>
                    </div>
                </div>
                <p class="plot smaller-text-400">${plot}</p>
            </div>
        </div>`       
}

document.addEventListener('DOMContentLoaded', () => {
    movieArray = JSON.parse(localStorage.getItem('movies'))
    console.log('movieArray', movieArray)

    if (movieArray) {
        movieArray.forEach(movie => {
            movieArrayHtml += renderMovieHtml(movie)
        })
        resultsEl.style.background = 'none'
        resultsEl.style.height = 'auto'
        resultsEl.innerHTML = movieArrayHtml
    } else {
        resultsEl.style.background = 'none'
        resultsEl.style.textAlign = 'center'
        resultsEl.innerHTML = `
            <p class="error-text-700">Your watchlist is looking a little empty...</p>
            <a href="index.js"><i class="bi bi-plus-circle-fill"> Let's add some movies!</i></a>`
    }
})

resultsEl.addEventListener('click', (e) => {
    let watchlistArrayHtml = ''

    let watchlistArray = JSON.parse(localStorage.getItem('movies'))
    watchlistArray = watchlistArray.filter(movie => movie.id !== e.target.dataset.id)
    resultsEl.innerHTML = ''
    watchlistArray.forEach(movie => {
        watchlistArrayHtml += renderMovieHtml(movie)
    })
    console.log('watchlistArrayHtml', watchlistArrayHtml)
    resultsEl.innerHTML = watchlistArrayHtml
    localStorage.setItem('movies', JSON.stringify(watchlistArray))
})