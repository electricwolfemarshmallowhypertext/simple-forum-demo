let posts = JSON.parse(localStorage.getItem("forumPosts")) || [];

function savePosts() {
  localStorage.setItem("forumPosts", JSON.stringify(posts));
}

function renderPosts() {
  const postsBox = document.getElementById("posts");
  postsBox.innerHTML = "";

  if (posts.length === 0) {
    postsBox.innerHTML = "<p>No posts yet.</p>";
    return;
  }

  posts.forEach((post, index) => {
    const postElement = document.createElement("div");
    postElement.className = "post";

    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p class="meta">By ${post.username} | ${post.date}</p>
      <p>${post.message}</p>
      <button class="delete-btn" onclick="deletePost(${index})">Delete</button>
    `;

    postsBox.appendChild(postElement);
  });
}

function addPost() {
  const username = document.getElementById("username").value.trim();
  const title = document.getElementById("title").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!username || !title || !message) {
    alert("Fill all fields");
    return;
  }

  const post = {
    username: username,
    title: title,
    message: message,
    date: new Date().toLocaleString()
  };

  posts.unshift(post);
  savePosts();
  renderPosts();

  document.getElementById("title").value = "";
  document.getElementById("message").value = "";
}

function deletePost(index) {
  posts.splice(index, 1);
  savePosts();
  renderPosts();
}

renderPosts();
