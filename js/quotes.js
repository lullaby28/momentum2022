const quotes = [
    {
        quote: "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
        author: "Marilyn Monroe",
    },
    {
        quote: "Life is a long lesson in humility.",
        author: "James M. Barrie",
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
    },
    {
        quote: "Love the life you live. Live the life you love.",
        author: "Bob Marley",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        author: "Dr. Seuss",
    },
    {
        quote: "Life is made of ever so many partings welded together.",
        author: "Charles Dickens",
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.",
        author: "Steve Jobs",
    },
    {
        quote: "Life is trying things to see if they work.",
        author: "Ray Bradbury",
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison",
    },
];

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;