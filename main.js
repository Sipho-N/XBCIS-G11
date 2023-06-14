const endings = [
  'AFICA',
  'EUROPE',
  'ASIA',
  'SOUTH AMERICA',
  'NORTH AMERICA'
  
];

const textElement = document.getElementById('typewriter-text');
const cursorElement = document.getElementById('typewriter-cursor');

let endingIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < endings[endingIndex].length) {
    textElement.textContent += endings[endingIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 50);
  } else {
    // Randomly choose the next ending
    endingIndex = Math.floor(Math.random() * endings.length);
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    textElement.textContent = endings[endingIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 30);
  } else {
    setTimeout(type, 1000);
  }
}

type();
