/* Light and dark mode */
document.addEventListener("DOMContentLoaded", function() {
    const modeToggleButton = document.getElementById('mode-toggle');
    let currentMode = localStorage.getItem('mode') || 'dark';
    setMode(currentMode);

    modeToggleButton.addEventListener('click', function() {
        currentMode = currentMode === 'dark' ? 'light' : 'dark';
        setMode(currentMode);
        localStorage.setItem('mode', currentMode);
    });

    function setMode(mode) {
        if (mode === 'light') {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            modeToggleButton.textContent = "Dark";
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            modeToggleButton.textContent = "Light";
        }
    }
});