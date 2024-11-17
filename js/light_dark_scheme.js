const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

let theme = localStorage.getItem('theme') || 'dark-theme';
body.classList.add(theme);

themeToggleButton.textContent = theme === 'light-theme' ? 'Switch to Dark Theme' : 'Switch to Light Theme';

themeToggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
        themeToggleButton.textContent = 'Switch to Light Theme';
        localStorage.setItem('theme', 'dark-theme');
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        themeToggleButton.textContent = 'Switch to Dark Theme';
        localStorage.setItem('theme', 'light-theme');
    }
});

