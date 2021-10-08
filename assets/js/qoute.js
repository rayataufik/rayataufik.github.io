const Quote = document.getElementById("quote");
const Author = document.getElementById("author");
fetch("http://quotes.stormconsultancy.co.uk/random.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    Quote.innerText = data.quote;
    Author.innerText = `${data.author}`;
  });
