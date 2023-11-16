const headerBtn = document.querySelector('.burger-btn');
const headerMenu = document.querySelector('.nav');
const menuBtn = document.createElement('button');
const menuCopy = document.createElement('p');
const body = document.querySelector('#body');

headerBtn.addEventListener('click', () => {
    headerMenu.classList.toggle('open');
    headerBtn.classList.toggle('menu-open');
    body.classList.toggle('lock');

    if (headerMenu.classList.contains('open')) {
        headerMenu.appendChild(menuBtn);
        menuBtn.classList.add('bell-btn');
        menuBtn.textContent = 'Заказать звонок';
        headerMenu.appendChild(menuCopy);
        menuCopy.classList.add('menu-copy');
        menuCopy.textContent = 'Политика конфиденциальности © спец-транс, 2023';
    } else {
        menuBtn.remove();
        menuCopy.remove();
    }
});

