const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

let theme = localStorage.getItem('theme') || 'dark-theme';
body.classList.add(theme);

themeToggleButton.textContent = theme === 'light-theme' ? 'Dark Theme' : 'light theme';

themeToggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
        themeToggleButton.textContent = 'light theme';
        localStorage.setItem('theme', 'dark-theme');
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        themeToggleButton.textContent = 'dark theme';
        localStorage.setItem('theme', 'light-theme');
    }
});

