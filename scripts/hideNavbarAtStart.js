var cabecera = document.getElementsByTagName("header")[0];

function hideNavbar(){
    cabecera.style.visibility = 'hidden';
    cabecera.style.display = 'none';
}

function showNavbar(){
    cabecera.style.visibility = 'visible';
    cabecera.style.display = 'block';
    cabecera.classList.add("fade-in");
}

document.getElementsByTagName('body')[0].onload = () => {
    hideNavbar();
};

window.onscroll = () => {
    (window.scrollY >= 100) ? showNavbar() : hideNavbar() ;
};