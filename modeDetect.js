const isDarkMode = window.matchMedia && window.matchMedia('percent-color-scheme: dark').matches;
if (isDarkMode){
    document.body.classList.add('dark-mode');
} else{
    document.body.classList.remove('dark-mode');
}