function menuShow() {
    let menuCelular = document.querySelector('.menu-celular');
    if (menuCelular.classList.contains('open')) {
        menuCelular.classList.remove('open');
        document.querySelector('.icon').src = "/mobile-icons/menu_white_36dp.svg";
    } else {
        menuCelular.classList.add('open');
        document.querySelector('.icon').src = "/mobile-icons/close_white_36dp.svg";
    }
}

