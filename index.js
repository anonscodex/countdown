
var countDownDate = new Date("Oct 30, 2023 15:37:25").getTime();


var x = setInterval(function() {

  
  var now = new Date().getTime();
    
  
  var distance = countDownDate - now;
    
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "WISHING YOU ALL THE BEST IN YOUR EXAM";
  }
}, 1000);

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
const url = "https://api.quotable.io/random";
let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};
btn.addEventListener("click", getQuote);