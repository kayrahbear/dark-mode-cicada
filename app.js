let darkModeState = false;

const darkToggle = document.querySelector('#darkToggle');

// MediaQueryList object
const useDark = window.matchMedia('(prefers-color-scheme: dark)');

// Toggles the "dark" class
function toggleDarkMode(state) {
  document.body.classList.toggle('dark', state);
  darkModeState = state;
}

// Sets localStorage state
function setDarkModeLocalStorage(state) {
  localStorage.setItem("dark-mode", state);
}

// Initial setting
let darkModeFromLocalStorage = localStorage.getItem('dark-mode') == 'true';
toggleDarkMode(localStorage.getItem('dark-mode') == 'true');
darkToggle.checked = darkModeFromLocalStorage;

// Listen for changes in the OS settings.
useDark.addEventListener('change', (evt) => toggleDarkMode(evt.matches));

// Toggles the "dark" class on click and sets localStorage state
darkToggle.addEventListener('change', () => {
  darkModeState = !darkModeState;

  toggleDarkMode(darkModeState);
  setDarkModeLocalStorage(darkModeState);
});
