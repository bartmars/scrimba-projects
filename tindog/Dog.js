class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    getDogHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLinked } = this
        return `
            <img id="badge-like" class="badge hidden" src="images/badge-like.png" alt="A badge that says like">
            <img id="badge-nope" class="badge hidden" src="images/badge-nope.png" alt="A badge that says nope">
            <img class="dog-photo" src="${avatar}" alt="A picture of the dog">
            <div>
                <h1 class="featured-title">${name}, ${age}</h1>
                <p class="featured-subtitle">${bio}</p>
            </div>`
    }
}

export default Dog