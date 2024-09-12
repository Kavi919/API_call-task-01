document.getElementById('fetch-btn').addEventListener('click', Posts);

function Posts() {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';  // Clear existing posts

    // Fetch data from the placeholder API
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                // Create a div for each post
                const postDiv = document.createElement('div');
                postDiv.classList.add('post');

                // Add title and body
                postDiv.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;

                // Append the post to the container
                postsContainer.appendChild(postDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
            postsContainer.innerHTML = '<p>Failed to load posts.</p>';
        });
}
