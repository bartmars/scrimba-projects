const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')
const movieResults = document.getElementById('movie-results')

let searchTerm = ''
let html = ''
let movieArrayHtml = ''
let movieArray = []


searchInput.addEventListener('change', (e) => {
    searchTerm = searchInput.value
    // searchInput.value = ""
    return searchTerm
})

searchBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    getMovie(searchTerm)
})

async function getMovie(movieTitle) {
    const movieResponse = await fetch(`http://www.omdbapi.com/?s=${movieTitle}&apikey=ead28c58&t`)
    const data = await movieResponse.json()
    // console.log(data.Search[0])

    for (let i = 0; i < data.Search.length; i++) {
        const imdbIdResponse = await fetch(`http://www.omdbapi.com/?i=${data.Search[i].imdbID}&apikey=ead28c58&t`)
        const imdbIdData = await imdbIdResponse.json()
        // console.log(imdbIdData)
        movieArray.push(imdbIdData)
        // console.log(movieArray)
        movieArray.forEach(item => {
            movieArrayHtml = (getMovieListHtml(item))
            console.log(movieArrayHtml)
        });
        movieResults.innerHTML += movieArrayHtml
    }
}

function getMovieListHtml(movie) {
    const { Poster, Title, imdbRating, Runtime, Genre, Plot } = movie
    movieResults.style.background = 'none'
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
                        <button id="add-to-watchlist-btn" class="add-to-watchlist-btn">
                            <img src="images/icon-1.png" alt="add to watchlist button">
                        </button>
                        <p class="small-text-400">Watchlist</p>
                    </div>
                </div>
                <p class="plot smaller-text-400">${Plot}</p>
            </div>
        </div>`
}