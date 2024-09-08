const searchBtn = document.querySelector('.search-btn');
const search = document.querySelector('.search');
const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav');

// При клике добавляем класс active, чтобы поле плавно открылось
searchBtn.onclick = function () {
    // Проверяем, открыт ли инпут
    if (search.classList.contains('active')) {
        // Если инпут уже открыт, меняем тип кнопки на submit
        search.classList.remove('active');
        searchBtn.setAttribute('type', 'button');
    } else {
        // Если инпут закрыт, открываем его и меняем тип кнопки на submit
        search.classList.add('active');
        searchBtn.setAttribute('type', 'submit');
        search.focus(); // Фокус на поле после открытия
    }
}

// Убираем класс active, если поле теряет фокус и остается пустым
search.addEventListener('blur', () => {
    if (search.value === "") {
        search.classList.remove('active');
        searchBtn.setAttribute('type', 'button'); // Меняем тип обратно на button
    }
});

navBtn.onclick = function () {
    nav.classList.toggle('nav--mobile');
    navBtn.classList.toggle('nav-btn--open');
    document.body.classList.toggle('no-scroll');
}