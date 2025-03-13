const container = document.getElementById("container");

function createHTML(post){
    return `<div>
        <h2 class="title">${post.title}</h2>
        <p>${post.body}</p>
    </div>`
}

function renderPosts(container, posts){
posts.forEach(post =>{
    container.innerHTML += createHTML(post);
});
}

async function getPosts(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const posts = await response.json();
        console.log(posts);
        renderPosts(container, posts);
    }catch(error) {
console.log(error);
    }
}

getPosts()



