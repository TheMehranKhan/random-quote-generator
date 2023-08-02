const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "The best way to predict the future is to create it. - Peter Drucker"
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

const randomQuote = getRandomQuote();
console.log(randomQuote);
