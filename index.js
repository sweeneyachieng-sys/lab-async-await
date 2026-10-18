function displayPosts(posts){
    const ul = document.querySelector("#post-list")
posts.forEach((post) => {
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    
    h1.textContent = post.title;
    p.textContent = post.body;

  
    li.appendChild(h1);
    li.appendChild(p);

    ul.appendChild(li);
});
}

async function fetchPosts(){
    
const response = await fetch ("https://jsonplaceholder.typicode.com");

const post = await response.json();

displayPosts(post);

}

fetchPosts();

// Write your code here!
