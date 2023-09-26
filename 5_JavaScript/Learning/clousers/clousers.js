async function fetchPosts() {
  // Write logic here
  try {
    const featch = await fetch("https://jsonplaceholder.typicode.com/posts");
     response.json();
    console.log(logDetails);
    for (let i = 0; i <= 10; i++) {
      console.log("title: ${post.title}"), console.log("body: ${post.body}");
    }
  } catch (error) {
    console.log("found error in:", error);
  }
}

fetchPosts();



fetch("https://jsonplaceholder.typicode.com/posts")
.then((res)=> res.json())
.then((json)=> console.log(json))