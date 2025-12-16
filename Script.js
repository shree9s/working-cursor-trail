// Select the board element
const board = document.querySelector('.board');
const TRAIL_LIFETIME = 2000; // 2 seconds in milliseconds

// Listen for mouse movement on the board
board.addEventListener('mousemove', (e) => {
    // Create a new trail element (a div)
    const trail = document.createElement('div');
    trail.className = 'trail';

    // Position the trail element relative to the board
    // clientX/Y gives coordinates relative to the viewport
    // board.getBoundingClientRect() gives the board's position
    const boardRect = board.getBoundingClientRect();
    trail.style.left = (e.clientX - boardRect.left - 5) + 'px'; // -5 to center the 10x10 div
    trail.style.top = (e.clientY - boardRect.top - 5) + 'px';

    // Append the trail element to the board
    board.appendChild(trail);

    // Remove the trail element after the specified lifetime (2 seconds)
    setTimeout(() => {
        trail.remove();
    }, TRAIL_LIFETIME);
});
