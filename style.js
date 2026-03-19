const root = document.documentElement;

window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100 + "%";
  const y = (e.clientY / window.innerHeight) * 100 + "%";

  root.style.setProperty("--pointer-x", x);
  root.style.setProperty("--pointer-y", y);
});

// ── Typewriter ──
const words = [
  "Keeping the code clean",
  "Solving problems properly",
  "Shipping without the drama",
  "Building things that just work",
];

const el = document.getElementById("tw-text");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    charIndex++;
    el.textContent = currentWord.slice(0, charIndex);

    if (charIndex === currentWord.length) {
      setTimeout(() => {
        isDeleting = true;
        typeWriter();
      }, 1800);
      return;
    }
  } else {
    charIndex--;
    el.textContent = currentWord.slice(0, charIndex);

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeWriter, isDeleting ? 40 : 60);
}
typeWriter();
