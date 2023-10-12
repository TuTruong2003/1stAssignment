/******************************************
 * Name:Anh Tu Truong
 * ID:300372032    CSIS3380-002
 * Project1:Display Random Quotes
*****************************************/

/*** 
 * `quotes` array 
 * Build the array of quote objects to store the quotes
***/
let quotes = [
   { quote:"More smiling, less worrying. More compassion, less judgment. More blessed, less stressed. More love, less hate.",
    source:"Roy T. Bennett"
   },

   { quote:"Act as if what you do makes a difference. It does.",
    source:"William James"
   },

   { quote:"Life is like riding a bicycle. To keep your balance, you must keep moving.",
    source:"Albert Einstein"
   },

   { quote:"Happiness is not by chance, but by choice.",
    source:"Jim Rohn"
   },

   { quote:"If I cannot do great things, I can do small things in a great way.d",
    source:"Martin Luther King, Jr"
   },

   { quote:"The bad news is time flies. The good news is you're the pilot.",
    source:"Michael Altshuler"
   },

   { quote:"Be yourself; everyone else is already taken.",
    source:"Oscar Wilde"
   },

   { quote:"You cannot change what you are, only what you do.",
    source:"Philip Pullman"
   },

   { quote:"One's destination is never a place, but a new way of seeing things.",
    source:"Henry Miller"
   },

   { quote:"No one is useless in this world who lightens the burdens of another.",
    source:"Charles Dickens"
   },

   { quote:"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    source:"Dr. Seuss",
    citation:"Oh, The Places You'll Go!",
    year:"1990"
    },

   { quote:"For me, becoming isn't about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn't end",
    source:"Michelle Obama",
    citation:"Becoming",
    year:"2018"
    },

   { quote:"For there is always light. If only we’re brave enough to see it. If only we’re brave enough to be it.",
    source:"Amanda Gorman",
    citation:"The Hill We Climb",
    year:"2021"
    },

   { quote:"We must all face the choice between what is right and what is easy.",
    source:"J.K. Rowling",
    citation:"Harry Potter and the Goblet of Fire",
    year:"2000"
    },
   
   { quote:"Nothing that is worthwhile is ever easy.",
    source:"Nicholas Sparks",
    citation:"Message in a Bottle",
    year:"1997"
    },
]

/***
 * `getRandomQuote` function
 * create a random number and use that random number to
return a random quote object from the quotes array
***/

function getRandomQuote(){
    const randomNumber = Math.floor(Math.random()*quotes.length)
    
    return quotes[randomNumber];
}

/***
 * `printQuote` function
***/
function printQuote() {
    let randomQuote = getRandomQuote();//Create a variable that calls the getRandomQuote()

    let string=
    `<p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}`;
        
    if(randomQuote.hasOwnProperty("citation"))//Use an if statement to check of the citation property exists
    string += `<span class="citation">${randomQuote.citation}</span>`;

    if(randomQuote.hasOwnProperty("year"))//Use an if statement to check of the year property exists
    string += `<span class="year">${randomQuote.year}</span>`;

    string += `</p>`;

    document.getElementById('quote-box').innerHTML= string ;
}

/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.
***/
document.getElementById('load-quote').addEventListener("click",printQuote)//So when the button is clicked, it needs to get a random quote object from the quotes array.
