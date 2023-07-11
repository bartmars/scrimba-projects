import { requestMovie } from "./js/requestMovie.js"
import { addMovieToWatchList, deleteMovieFromWatchlist } from "./js/movieWatchlist.js"

// const movieResults = document.getElementById('movie-results')
// let movieArray = []
// let movieArrayHtml = ''
let watchlistArray = []
// let html = ''

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
        // console.log('searchterm: ', item)
        requestMovie(searchTerm)
    }
    else if (e.target.dataset.add) {
        /*
            - When adding to watchlist button is clicked, push it to 'watchlistArray' and store imdbID in existing localStorage,
              otherwise create it
         */

        // console.log('Returned movie: ', e.target.dataset.add)
        // watchlistArray.push(e.target.dataset.add)
        // localStorage.setItem('movies', JSON.stringify(watchlistArray))
        addMovieToWatchList(e.target.dataset.add)
    }
    else if (e.target.dataset.del) {
        // let watchlistItems = JSON.parse(localStorage.getItem('movies'))
        // watchlistItems = watchlistArray.filter(item => {
        //     return item !== e.target.dataset.del
        // })
        // watchlistArray = watchlistItems
        // localStorage.setItem('movies', JSON.stringify(watchlistItems))
        deleteMovieFromWatchlist(e.target.dataset.del)
    }
})

// async function requestMovie(item) {
//         try {
//             const outerResponse = await fetch(`http://www.omdbapi.com/?s=${item}&apikey=ead28c58&t`)
//             const outerData = await outerResponse.json()
//             // console.log('outerData: ', outerData)

//             for (let i = 0; i < outerData.Search.length; i++)  {
//                 const innerResponse = await fetch(`http://www.omdbapi.com/?i=${outerData.Search[i].imdbID}&apikey=ead28c58&t`)
//                 const innerData = await innerResponse.json()
//                 // console.log('innerData: ', innerData)
        
//                 movieArray.push(innerData)
//             }
//             // console.log('movieArray: ', movieArray)
        
//             movieArray.forEach(item => {
//                 movieArrayHtml += renderMovieHtml(item)
//             })
//             // console.log('movieArrayHtml: ', movieArrayHtml)
//             movieResults.style.background = 'none'
//             movieResults.style.height = 'auto'
//             document.getElementById('movie-results').innerHTML = movieArrayHtml  
//         }
//         catch(error) {
//             movieResults.style.background = 'none'
//             movieResults.style.height = 'auto'
//             document.getElementById('movie-results').style.textAlign = 'center'
//             document.getElementById('movie-results').innerHTML = `
//                 <p class="error-text-700">Unable to find what you are looking for. Please try another search.</p>
//             `
//             document.getElementById('search-input').value = ''
//         }
// }

// function renderMovieHtml(movie) {
//     const { imdbID, imdbRating, Poster, Title, Runtime, Genre, Plot } = movie
//     return html = `
//         <div class="item">
//             <img src="${Poster}" alt=${Title}>
//             <div>
//                 <div class="item-header">
//                     <h2>${Title}</h2>
//                     <p class="small-text-400">⭐️ ${imdbRating}</p>
//                 </div>
//                 <div class="item-details">
//                     <p class="small-text-400">${Runtime}</p>
//                     <p class="small-text-400">${Genre}</p>
//                     <div class="item-watchlist">
//                         <button id="add-to-watchlist-btn" class="add-to-watchlist-btn" data-add="${imdbID}" type="button">Add</button>
//                         <p class="small-text-400">#</p>
//                     </div>
//                 </div>
//                 <p class="plot smaller-text-400">${Plot}</p>
//             </div>
//         </div>`            
// }


