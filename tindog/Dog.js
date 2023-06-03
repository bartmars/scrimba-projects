class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    setMatchStatus(hasBeenLikedBool, hasBeenSwipedBool) {
        this.hasBeenLiked = hasBeenLikedBool
        this.hasBeenSwiped = hasBeenSwipedBool
    }

    getDogHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        return `
            <div class="like-or-not">
                <img id="badge-like" class="badge hidden" src="images/badge-like.png" alt="A badge that says like">
                <img id="badge-nope" class="badge hidden" src="images/badge-nope.png" alt="A badge that says nope">
            </div>
            <div id="featured-dog" class="featured-dog">
                <img class="dog-photo" src="${avatar}" alt="A picture of the dog">
                <div>
                    <h1 class="featured-title">${name}, ${age}</h1>
                    <p class="featured-subtitle">${bio}</p>
                </div>
            </div>
            <div class="buttons">
                <button id="nope-btn" class="btn nope-btn" type="button"></button>
                <button id="like-btn" class="btn like-btn" type="button"></button>
            </div>`
    }
}

export default Dog