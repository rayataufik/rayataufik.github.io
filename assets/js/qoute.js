const Content = document.getElementById("content");
const Author = document.getElementById("author");
fetch("https://quoteslate.vercel.app/api/quotes/random?tags=knowledge")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    Content.innerText = data.quote;
    Author.innerText = data.author;
  });
