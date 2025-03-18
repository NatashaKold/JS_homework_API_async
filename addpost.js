function displayPost(post){
const postContainer = document.createElement('div');
postContainer.innerHTML = `<h2 class="title">${post.title}</h2>
                            <p>${post.body}</p>`

postContainer.classList.add('postContainer');
document.getElementById('inputPost').append(postContainer);

}

function addPost(){
    const newPost={
        title: document.getElementById('postTitleInput').value,
            body: document.getElementById('postBodyInput').value,
    }
    displayPost(newPost);

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(
            newPost
        ),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => {console.log(json);
    })
    .catch(error=>console.log(error))
    
}