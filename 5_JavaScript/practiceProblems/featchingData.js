async function fetchPosts() {
    // Write logic here
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json();
    for (let i = 1; i <= 10; i++) {
       const post= posts[i];
        console.log(`Title:${post.title}`),
        console.log(`body: ${post.body}`);
    }
    } catch (error) {
    console.log("found error in:", error);
    }
}

fetchPosts();