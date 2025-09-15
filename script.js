// Year auto update
document.getElementById('year').textContent = new Date().getFullYear();

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');

  if (document.body.classList.contains('light-theme')) {
    themeToggle.textContent = "🌞 Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
});

// Editable About Section
const editBtn = document.getElementById('edit-btn');
const aboutText = document.getElementById('about-text');
let isEditingAbout = false;

editBtn.addEventListener('click', () => {
  if (!isEditingAbout) {
    aboutText.contentEditable = "true";
    aboutText.focus();
    editBtn.textContent = "💾 Save";
    isEditingAbout = true;
  } else {
    aboutText.contentEditable = "false";
    editBtn.textContent = "✏️ Edit";
    isEditingAbout = false;
  }
});

// Editable Hero Section
const editHeroBtn = document.getElementById('edit-hero');
const heroContent = document.getElementById('hero-content');
let isEditingHero = false;

editHeroBtn.addEventListener('click', () => {
  if (!isEditingHero) {
    heroContent.contentEditable = "true";
    heroContent.focus();
    editHeroBtn.textContent = "💾 Save";
    isEditingHero = true;
  } else {
    heroContent.contentEditable = "false";
    editHeroBtn.textContent = "✏️ Edit Hero";
    isEditingHero = false;
  }
});
