document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const menulink = document.getElementById('links');

    hamburger.addEventListener('click', function() {
        menu.classList.toggle('show-menu');
        hamburger.children[0].classList.toggle('rotate1');
        hamburger.children[1].classList.toggle('rotate2');
        hamburger.children[2].classList.toggle('rotate3');
    });
});
