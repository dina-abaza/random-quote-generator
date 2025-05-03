let api_url="http://api.quotable.io/random";
let quote=document.getElementById("quote");
let author=document.getElementById("author");


async function getquote(url) {
    let response= await fetch(url);
    let data= await response.json();
    console.log(data);
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}
getquote(api_url);

function tweet(){
    window.open(" https://twitter.com/intent/tweet?text=ss&url=url" , "tweet window","width=600,height=300");
}