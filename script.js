let currentScene = 1;

function goToNextScene() {
    document.getElementById(`scene${currentScene}`).style.display = 'none';
    currentScene++;
    if (currentScene > 4) currentScene = 1;
    document.getElementById(`scene${currentScene}`).style.display = 'block';
}

function animateCharacter() {
    const character = document.querySelector('.character');
    character.style.animation = 'characterAnimation 1s ease';
    setTimeout(() => {
        character.style.animation = '';
    }, 1000);
}

