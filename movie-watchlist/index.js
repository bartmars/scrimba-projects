const resultsEl = document.getElementById('results')
let html = ''

async function getMovie(movie) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${movie}&apikey=ead28c58&t`)
        const data = await response.json()
        data.Search.forEach(movie => {
            getMovieDetails(movie.imdbID)
        })
    } catch (error) {
        renderError()
    }
}

async function getMovieDetails(imdbID) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=ead28c58&t`)
        const data = await response.json()
        renderMovieHtml(data)
    } catch (error) {
        renderError()
    }
}

function renderError() {
    resultsEl.style.background = 'none'
    resultsEl.style.textAlign = 'center'
    resultsEl.innerHTML = `
        <p class="error-text-700">Unable to find what you are looking for. Please try another search.</p>`
}

function renderMovieHtml(movie) {
    const { imdbID, imdbRating, Year, Poster, Title, Runtime, Genre, Plot } = movie
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
                        <button id="add-watchlist${imdbID}" class="watchlist-btn"                                
                            data-id=${imdbID} 
                            data-poster=${Poster}
                            data-title=${Title}
                            data-year=${Year}
                            data-ratings=${imdbRating}
                            data-runtime=${Runtime}
                            data-genre=${Genre}
                            data-plot=${Plot}
                        >
                            <span>
                                <i class="bi bi-plus-circle-fill"> Watchlist</i>
                            </span>
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

document.addEventListener('click', async e => {
    if (e.target.id === 'search-btn') {
        e.preventDefault()
        let searchTerm = document.getElementById('search-input').value
        // requestMovie(searchTerm)

        getMovie(searchTerm)
    }
})

resultsEl.addEventListener('click', (e) => {
    const movie = e.currentTarget.dataset;
    const button = document.querySelectorAll("[add]")
    console.log(button)

    if (localStorage.getItem('movies')) {
        const watchList = JSON.parse(localStorage.getItem('movies'))
        watchList.push(movie)
        localStorage.setItem('movies', JSON.stringify(watchList))
    } else {
        const watchList = [];
        watchList.push(movie)
        localStorage.setItem('movies', JSON.stringify(watchList))
    }        


})