import { renderMovieHtml } from './renderMovieHtml.js'

const movieResults = document.getElementById('movie-results')
let movieArray = []
let movieArrayHtml = ''

export async function requestMovie(item) {
    try {
        const outerResponse = await fetch(`http://www.omdbapi.com/?s=${item}&apikey=ead28c58&t`)
        const outerData = await outerResponse.json()
        // console.log('outerData: ', outerData)

        for (let i = 0; i < outerData.Search.length; i++)  {
            const innerResponse = await fetch(`http://www.omdbapi.com/?i=${outerData.Search[i].imdbID}&apikey=ead28c58&t`)
            const innerData = await innerResponse.json()
            // console.log('innerData: ', innerData)
    
            movieArray.push(innerData)
        }
        // console.log('movieArray: ', movieArray)
    
        movieArray.forEach(movie => {
            movieArrayHtml += renderMovieHtml(movie)
        })
        // console.log('movieArrayHtml: ', movieArrayHtml)
        movieResults.style.background = 'none'
        movieResults.style.height = 'auto'
        document.getElementById('movie-results').innerHTML = movieArrayHtml  
    }
    catch(error) {
        movieResults.style.background = 'none'
        movieResults.style.height = 'auto'
        document.getElementById('movie-results').style.textAlign = 'center'
        document.getElementById('movie-results').innerHTML = `
            <p class="error-text-700">Unable to find what you are looking for. Please try another search.</p>
        `
        document.getElementById('search-input').value = ''
    }
}