document.addEventListener("DOMContentLoaded", function () {
  const postText = document.getElementById("post-text");
  const postButton = document.getElementById("post-button");
  const postContainer = document.getElementById("post-container");

  postButton.addEventListener("click", function () {
      const text = postText.value.trim();
      if (text !== "") {
          createPost(text);
          postText.value = "";
      }
  });

  function createPost(text) {
      const post = document.createElement("div");
      post.className = "post";
      post.innerHTML = text;

      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Eliminar";
      deleteButton.className = "delete-button";

      deleteButton.addEventListener("click", function () {
          postContainer.removeChild(post);
      });

      post.appendChild(deleteButton);
      postContainer.appendChild(post);
  }
});