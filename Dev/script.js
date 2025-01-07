// script.js
document.addEventListener("DOMContentLoaded", function() {
    const modeToggleButton = document.getElementById('mode-toggle');

    // Vérifier le mode actuel stocké dans localStorage ou utiliser le mode sombre par défaut
    let currentMode = localStorage.getItem('mode') || 'dark';
    setMode(currentMode);

    modeToggleButton.addEventListener('click', function() {
        // Toggle entre 'dark' et 'light'
        currentMode = currentMode === 'dark' ? 'light' : 'dark';
        setMode(currentMode);
        localStorage.setItem('mode', currentMode);
    });

    function setMode(mode) {
        if (mode === 'light') {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            modeToggleButton.textContent = "Mode Sombre";
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            modeToggleButton.textContent = "Mode Clair";
        }
    }
});
