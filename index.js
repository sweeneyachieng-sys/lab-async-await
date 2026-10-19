// function fetchPosts() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((posts) => {
//       displayPosts(posts);
//     });
// }

// fetchPosts()
const ul = document.querySelector("#post-list")

function displayPosts(posts){


posts.forEach((post) => {
    
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    console.log(post.title)
     h1.textContent = post.title;


    const p = document.createElement("p");

     p.textContent = post.body;
  
    li.append(h1);
    li.append(p);

    ul.append(li);
});
}

// // function fetchPosts() {
// //   fetch("https://jsonplaceholder.typicode.com/posts")
// //     .then((response) => response.json())
// //     .then((posts) => {
// //       displayPosts(posts);
// //     });
// //     fetch();
    
// // }

// // fetchPosts()
async function fetchPosts(){

    
const response =  await fetch ("https://jsonplaceholder.typicode.com/posts");

if(!response.ok){
    console.log("An error occured.....")
}


const post =  await response.json();


displayPosts(post);

}

fetchPosts();

// // Write your code here!


// async function getPosts (){
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = response.json()
//     console.log("====", response)


//     if (!response.status === 200){
//         return new Error("Data not loaded")
//     }
//     return data
// }



// function displayPosts(){

//     const data = getPosts()

//     console.log("Dataaa", data,json())

// }

// displayPosts()

