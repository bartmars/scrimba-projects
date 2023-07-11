let html = ''

export function renderMovieHtml(movie) {
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
                        <p class="small-text-400">#</p>
                    </div>
                </div>
                <p class="plot smaller-text-400">${Plot}</p>
            </div>
        </div>`            
}