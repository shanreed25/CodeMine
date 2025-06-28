//1. Toggle a class on the <body> element (or a container element) when the button is clicked.
// 2.Persisting User Preference: remembers the user's preferred mode across page reloads

const body = document.body;

const checkInput = document.getElementById('checkbox');
const slider = document.getElementById('mode-icon');
// const body = document.body;

// Check for saved preference on page load
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  slider.innerHTML = '<i class="fa-solid fa-moon"></i>';//MOON
}

checkInput.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Save preference to localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
    slider.innerHTML = '<i class="fa-solid fa-moon"></i>';//MOON
  } else {
    localStorage.setItem('darkMode', 'disabled');
    slider.innerHTML = '<i class="fa-solid fa-sun"></i>';//SUN
  }
});



