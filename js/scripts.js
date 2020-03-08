let menuBtn = document.querySelector('.menu-button'),
    links = document.querySelector('.menu-links'),
    link = document.querySelectorAll('.burger-link');

menuBtn.addEventListener('click', function () {
    links.classList.toggle('active');
});

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function () {
        links.classList.add('hide');
    });
}