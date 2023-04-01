const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsEl = document.getElementById("posts")
const likeEl = document.getElementsByName("like0")

let userLikes = 0

function renderPost(int) {
    return `<article>
        <div class="flex-container">
            <img src="${posts[int].avatar}" alt="A avatar of the user that posted the image" class="avatar-img">
            <div>
                <p id="name${int}" class="name">${posts[int].name}</p>
                <p id="location${int}" class="location">${posts[int].location}</p>
            </div>
        </div>
        <img id="post-img${int}" src="${posts[int].post}" alt="A picture that the user posted" class="post-img">
        <div class="icons-div">
            <img id="like${int}" src="images/icon-heart.png" alt="A heart icon to like the posted image" class="icon-img">
            <img id="comment${int}" src="images/icon-comment.png" alt="A text balloon to comment on the posted image" class="icon-img">
            <img id="dm${int}" src="images/icon-dm.png" alt="A paper plane to direct message the user" class="icon-img">
        </div>
        <p id="likes${int}" class="likes">${posts[int].likes} likes</p>
        <p id="comment${int}"><span id="username" class="username">${posts[int].username}</span> ${posts[int].comment}</p>
    </article>`
}

function render(posts) {
    for (let i = 0; i < posts.length; i++) {
        postsEl.innerHTML += renderPost(i)
    }
}

render(posts)

