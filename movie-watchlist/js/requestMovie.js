import { renderMovieHtml } from './renderMovieHtml.js'

/*
- Grab outerData and use it for innerData fetch, for every item (.length) of returned response
- Push innerData to movieArray for rendering of HTML divs
- For every item, render HTML layout div with function 'renderMovieHtml()' and place in 'movieArrayHtml'
- Remove background image before showing movie list
- Render movie list
*/

const movieResults = document.getElementById('movie-results')
let movieArray = []
let movieArrayHtml = ''

export async function requestMovie(item) {
    try {
        const outerResponse = await fetch(`http://www.omdbapi.com/?s=${item}&apikey=ead28c58&t`)
        const outerData = await outerResponse.json()

        for (let i = 0; i < outerData.Search.length; i++)  {
            const innerResponse = await fetch(`http://www.omdbapi.com/?i=${outerData.Search[i].imdbID}&apikey=ead28c58&t`)
            const innerData = await innerResponse.json()    
            movieArray.push(innerData)
        }
    
        movieArray.forEach(movie => {
            movieArrayHtml += renderMovieHtml(movie)
        })
        movieResults.style.background = 'none'
        movieResults.style.height = 'auto'
        movieResults.innerHTML = movieArrayHtml  
    }
    catch(error) {
        movieResults.style.background = 'none'
        movieResults.style.height = 'auto'
        movieResults.style.textAlign = 'center'
        movieResults.innerHTML = `
            <p class="error-text-700">Unable to find what you are looking for. Please try another search.</p>
        `
        if (document.getElementById('search-input')) {
            document.getElementById('search-input').value = ''
        }
    }
}