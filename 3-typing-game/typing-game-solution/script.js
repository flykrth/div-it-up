// all of our quotes
const quotes = [
    "You are what you believe in.",
    "Change is the law of the universe.",
    "You have the right to perform your duties but you are not entitled to the fruits of your actions.",
    "It is better to live your own destiny imperfectly than to live an imitation of somebody else's life with perfection.",
    "Happiness is a state of mind and has nothing to do with the external world.",
    "There is neither this world nor the world beyond nor happiness for the one who doubts.",
    "No one who does good work will ever come to a bad end, either here or in the world to come.",
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
let gameEnded = false;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
// modal elements
const modal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');
const modalMessage = document.getElementById('modalMessage');

document.getElementById('start').addEventListener('click', () => {
    // get a quote
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    // Put the quote into an array of words
    words = quote.split(' ');
    // reset the word index for tracking
    wordIndex = 0;
    gameEnded = false;
    typedValueElement.disabled = false;
    // UI updates
    // Create an array of span elements so we can set a class
    const spanWords = words.map(function(word) { return `<span>${word} </span>`});
    // Convert into string and set as innerHTML on quote display
    quoteElement.innerHTML = spanWords.join('');
    // Highlight the first word
    quoteElement.childNodes[0].className = 'highlight';
    // Clear any prior messages
    messageElement.innerText = '';
  
    // Setup the textbox
    // Clear the textbox
    typedValueElement.value = '';
    // set focus
    typedValueElement.focus();
    // set the event handler
  
    // Start the timer
    startTime = new Date().getTime();
  });

// typing functionality
typedValueElement.addEventListener('input', () => {
    if (gameEnded) return;
    // Get the current word
    const currentWord = words[wordIndex];
    // get the current value
    const typedValue = typedValueElement.value;
  
    if (typedValue === currentWord && wordIndex === words.length - 1) {
        isCompleted = true;
        typedValueElement.disabled = true;
        // end of sentence
        // Display success
        const elapsedTime = new Date().getTime() - startTime;
        const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
        modalMessage.innerText = message;
        modal.style.display = 'block';
    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
      // end of word
      // clear the typedValueElement for the new word
      typedValueElement.value = '';
      // move to the next word
      wordIndex++;
      // reset the class name for all elements in quote
      for (const wordElement of quoteElement.childNodes) {
        wordElement.className = '';
      }
      // highlight the new word
      quoteElement.childNodes[wordIndex].className = 'highlight';
    } else if (currentWord.startsWith(typedValue)) {
      // currently correct
      // highlight the next word
      typedValueElement.className = '';
    } else {
      // error state
      typedValueElement.className = 'error';
    }
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});