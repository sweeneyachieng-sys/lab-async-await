function fetchPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      displayPosts(posts);
    });
}

function displayPosts(posts){
    const ul = document.querySelector("#post-list")
posts.forEach((post) => {
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    const p = document.createElement("p");

    p.textContent = post.body;
  
    li.append(h1);
    li.append(p);

    ul.appendChild(li);
});
}

fetchPosts()
// async function fetchPosts(){
    
// const response = await fetch ("https://jsonplaceholder.typicode.com");

// const post = await response.json();

// displayPosts(post);

// }

// fetchPosts();

// Write your code here!
