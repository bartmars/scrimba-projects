const movieResults = document.getElementById('movie-results')
let movieArray = []
let movieArrayHtml = ''
let watchlistArray = []
let html = ''

document.addEventListener('click', async e => {
    /*
        - Grab search-input.value and use it for outerResponse to get imdbID
        - Grab outerData and use it for innerData fetch, for length of returned response
        - Push innerData to movieArray for rendering of HTML divs
        - For every item, render HTML layout div with function 'renderMovieHtml()' and place in 'movieArrayHtml'
        - Remove background image before showing movie list
        - Render movie list
     */
    if (e.target.id === 'search-btn') {
        e.preventDefault()

        let searchTerm = document.getElementById('search-input').value
        // console.log('searchterm: ', searchTerm)

        try {
            const outerResponse = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=ead28c58&t`)
            const outerData = await outerResponse.json()
            console.log('outerData:', outerData)

            // if (Response.error) {
            //     throw new Error(`No movie found! ${response.status}`)
            // }

            for (let i = 0; i < outerData.Search.length; i++)  {
                const innerResponse = await fetch(`http://www.omdbapi.com/?i=${outerData.Search[i].imdbID}&apikey=ead28c58&t`)
                const innerData = await innerResponse.json()
                // console.log('innerData: ', innerData)
        
                movieArray.push(innerData)
            }
            // console.log('movieArray: ', movieArray)
        
            movieArray.forEach(item => {
                movieArrayHtml += renderMovieHtml(item)
            })
            // console.log('movieArrayHtml: ', movieArrayHtml)
            movieResults.style.background = 'none'
            document.getElementById('movie-results').innerHTML = movieArrayHtml  

        } catch (e) {
            console.error(e);
        } finally {
            errorFindingMovieHtml()
        }
    }
    else if (e.target.dataset.add) {
        /*
            - When adding to watchlist button is clicked, push it to 'watchlistArray' and store imdbID in existing localStorage,
              otherwise create it
         */

        // console.log('Returned movie: ', e.target.dataset.add)
        watchlistArray.push(e.target.dataset.add)
        localStorage.setItem('movies', JSON.stringify(watchlistArray))
    }
    else if (e.target.dataset.del) {
        let watchlistItems = JSON.parse(localStorage.getItem('movies'))
        watchlistItems = watchlistArray.filter(item => {
            return item !== e.target.dataset.del
        })
        watchlistArray = watchlistItems
        localStorage.setItem('movies', JSON.stringify(watchlistItems))
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const watchlistItems = JSON.parse(localStorage.getItem('movies'))
    if (!watchlistItems) {
        return document.getElementById('movie-results').innerHTML = `
            <h2 class="error-text-700">No watchlist found.</h2>
        `
    }
    watchlistItems.forEach(item => {
        renderMovieHtml(item)
    })
    
})

async function requestMovie(item) {
    const innerResponse = await fetch(`http://www.omdbapi.com/?i=${item}&apikey=ead28c58&t`)
    return innerData = await innerResponse.json()
}

function renderMovieHtml(movie) {
    const { imdbID, imdbRating, Poster, Title, Runtime, Genre, Plot } = movie
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
                        <button id="add-to-watchlist-btn" class="add-to-watchlist-btn" data-add="${imdbID}" type="button">Add</button>
                        <button id="del-from-watchlist-btn" class="add-to-watchlist-btn" data-del="${imdbID}" type="button">Del</button>
                        <p class="small-text-400">#</p>
                    </div>
                </div>
                <p class="plot smaller-text-400">${Plot}</p>
            </div>
        </div>`            
}

function errorFindingMovieHtml() {
    return html = `
        <h2 class="error-text-700">Unable to find what you're looking for. Please try another search.</h2>
    `
}

function errorFindingMovieHtml() {
    return html = `
        <h2 class="error-text-700">Unable to find what you're looking for. Please try another search.</h2>
    `
}


