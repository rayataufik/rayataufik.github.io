const Content = document.getElementById("content");
const Author = document.getElementById("author");
fetch("https://api.quotable.io/random?tags=technology")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    Content.innerText = data.content;
    Author.innerText = data.author;
  });
