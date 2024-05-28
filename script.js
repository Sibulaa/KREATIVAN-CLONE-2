document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const sideNav = document.querySelector('.side-nav');
    const dropdowns = document.querySelectorAll('.side-nav .dropdown > a');

    menuIcon.addEventListener('click', () => {
        sideNav.classList.toggle('active');
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.parentElement.classList.toggle('active');
        });
    });
});
