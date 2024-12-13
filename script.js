// Select the cycle and the leaf container
const cycle = document.querySelector('.cycle');
const leafContainer = document.getElementById('leaf-container');

// Function to create and animate falling leaves
function createFallingLeaf() {
    const leaf = document.createElement('img');
    leaf.src = 'transparent_leaf.png'; // Replace with your leaf image path
    leaf.classList.add('leaf');
    leafContainer.appendChild(leaf);

    // Randomize the starting position
    const startX = Math.random() * window.innerWidth;
    leaf.style.left = `${startX}px`;

    // Randomize the fall duration
    const fallDuration = Math.random() * 3 + 3;

    // Apply fall and drift animations
    leaf.style.animation = `fall ${fallDuration}s linear, drift ${fallDuration}s linear`;

    // Remove leaf after animation ends
    setTimeout(() => {
        leaf.remove();
    }, fallDuration * 1000);
}

// Function to continuously generate falling leaves
function generateLeaves() {
    setInterval(createFallingLeaf, 1000);
}

// Start leaf generation
generateLeaves();
