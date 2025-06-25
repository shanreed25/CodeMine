//1. Toggle a class on the <body> element (or a container element) when the button is clicked.
// const toggleButton = document.getElementById('dark-mode-toggle');
// const body = document.body;

// toggleButton.addEventListener('click', () => {
//   body.classList.toggle('dark-mode');
// });

// 2.Persisting User Preference: remembers the user's preferred mode across page reloads

const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved preference on page load
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Save preference to localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});
