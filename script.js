// Play music
function playMusic() {
  document.getElementById('audio').play();
  createHearts();
}

// Pause music
function pauseMusic() {
  document.getElementById('audio').pause();
}

// Edit love letter
function editLetter() {
  const content = document.getElementById('letterContent');
  const text = prompt('Edit your love letter:', content.innerText);
  if (text) {
    const lines = text.split('\n');
    content.innerHTML = lines.map(line => '<p>' + line + '</p>').join('');
    localStorage.setItem('letter', content.innerHTML);
  }
}

// Create floating hearts animation
function createHearts() {
  const hearts = ['💕', '💖', '💗', '💓', '💝', '💘'];
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.position = 'fixed';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.bottom = '-50px';
      heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
      heart.style.pointerEvents = 'none';
      heart.style.zIndex = '1000';
      heart.style.animation = 'floatUp 4s ease-out forwards';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 4000);
    }, i * 300);
  }
}

// Load saved letter on page load
window.onload = function() {
  const savedLetter = localStorage.getItem('letter');
  if (savedLetter) {
    document.getElementById('letterContent').innerHTML = savedLetter;
  }
};
