window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    // var scrollPositionDisplay = document.getElementById('scroll-position');
    // scrollPositionDisplay.textContent = 'Scroll Position: ' + scrollPosition + 'px';

    var scrollHeader = document.getElementById('scroll-header');

    if (scrollPosition > 100) {
        scrollHeader.style.transform = 'translateY(0)';
    } else {
        scrollHeader.style.transform = 'translateY(-100%)';
    }
});