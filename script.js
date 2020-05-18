const quotes = [
    {
        name: '–Michael Jordan',
        quote: `I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.`,
    },
    {
        name: '–Amelia Earhart',
        quote: `The most difficult thing is the decision to act, the rest is merely tenacity`,
    },
    {
        name: `–W. Clement Stone`,
        quote: `Definiteness of purpose is the starting point of all achievement.`,
    },
    {
        name: `–Kevin Kruse`,
        quote: `Life isn't about getting and having, it's about giving and being.`,
    },
    {
        name: `–John Lennon`,
        quote: ` Life is what happens to you while you’re busy making other plans.`,
    },
    {
        name: `–Mark Twain`,
        quote: `Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.`,
    },
    {
        name: `–Charles Swindoll`,
        quote: `Life is 10% what happens to me and 90% of how I react to it. `,
    },
    {
        name: `–Alice Walker`,
        quote: `The most common way people give up their power is by thinking they don’t have any.`,
    },
    {
        name: `–Buddha`,
        quote: `The mind is everything. What you think you become`,
    },
    {
        name: `–Chinese Proverb`,
        quote: `The best time to plant a tree was 20 years ago. The second best time is now.`,
    },
    {
        name: `–Steve Jobs`,
        quote: `Your time is limited, so don’t waste it living someone else’s life.`,
    },
];

const quoteBtn = document.getElementById('quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    quoteAuthor.textContent = quotes[random].name;
});
