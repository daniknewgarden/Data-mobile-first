let body = document.body,
    menuBtn = document.querySelector('.menu-button'),
    BtnLine = document.querySelectorAll('.line'),
    links = document.querySelector('.menu-links'),
    link = document.querySelectorAll('.burger-link');

menuBtn.addEventListener('click', function () {
    for (let i = 0; i < BtnLine.length; i++) {
        BtnLine[i].classList.toggle('open');
    }
    links.classList.toggle('show');
    body.classList.toggle('not-overflow');
});

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function () {
        links.classList.remove('show');
    });
}