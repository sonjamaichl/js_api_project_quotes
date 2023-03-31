function generateRandomQuote() {
    let quoteContainer = document.getElementById('random-quote-container');
    quoteContainer.innerHTML = '';
    let randomNum = Math.floor(Math.random()*quotes.length);
    //console.log(randomNum);
    let randomQuote = document.createElement('blockquote');
    randomQuote.innerHTML = quotes[randomNum].h;
    randomQuote.id = 'randomQuote';
    quoteContainer.appendChild(randomQuote);
}

    
for (let i = 0; i < quotes.length; i++) {
    let newRow = document.createElement('tr');
    document.getElementById('quotes-list').appendChild(newRow);
    let quote = document.createElement('td');
    quote.innerText = quotes[i].q;
    newRow.appendChild(quote);
    let author = document.createElement('td');
    author.innerText = quotes[i].a;
    newRow.appendChild(author);
}

//newRow.innerHTML = quotes[i].q;
    //console.log(newRow.innerText);