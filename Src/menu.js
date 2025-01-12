
const navbarToggle = document.getElementById('navbar-toggle');
const navbarList = document.querySelector('.navbar_list');


navbarToggle.addEventListener('click', () => {
    
    navbarList.classList.toggle('active');

    
    navbarToggle.classList.toggle('active');
});