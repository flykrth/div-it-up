# 3-typing-game

### 🚀 Challenges

Added the following functionalities to the typing-game

- Disable the input event listener on completion, and re-enable it when the button is clicked and the textbox when the player completes the quote.
```javascript
let gameEnded = false;

document.getElementById('start').addEventListener('click', () => {
    .
    .
    gameEnded = false;
    typedValueElement.disabled = false;
    .
    .
});

typedValueElement.addEventListener('input', () => {
    if (gameEnded) return;
    .
    .
    isCompleted = true;
    typedValueElement.disabled = true;
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    messageElement.innerText = message;
});
```
<br>

- Display a modal dialog box with the success message
```html
<div id="successModal" style="display: none; position: fixed; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);">
    <div style="background: rgb(23, 36, 44); margin: 20% auto; padding: 20px; width: 50%; text-align: center; border-radius: 10px;">
        <span id="closeModal" style="float: right; font-size: 20px; cursor: pointer;">&times;</span>
        <p id="modalMessage"></p>
    </div>
</div>
```
```javascript
const modal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');
const modalMessage = document.getElementById('modalMessage');

typedValueElement.addEventListener('input', () => {
    .
    .
    .
    modalMessage.innerText = message;
    modal.style.display = 'block';
    .
    .
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
```

<br>

- Store high scores using localStorage
```javascript
let highScore = localStorage.getItem('highScore') || null;
function updateHighScore(newScore) {
    if (!highScore || newScore < highScore) {
        highScore = newScore;
        localStorage.setItem('highScore', highScore);
    }
}

typedValueElement.addEventListener('input', () => {
    .
    .
    .
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    updateHighScore(elapsedTime/1000);
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.\nYour high score: ${highScore} seconds`;
    .
    .
});
```

### Assignment
For the assignment, I decided to create a canvas where you could paint with the keyboard. The letters have been mapped to corresponding colours which will result in painting the 20x20 grid canvas completely. To implement this, I initially created a temporary container for the game to be played and got its ID from ```document.getElementId()```. Using that, I created the grid within a ```for``` loop. And with the help of ```document.addEventListener()```, the website could listen to the keyboard inputs and perform the ```paintColor()``` function according to its respective colors. The function uses ```grid[index].style.backgroundColor``` to fill the pixel with the desired paint.