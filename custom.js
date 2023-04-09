const navEl = document.querySelector('.navbar');
window.addEventListener('scroll', ()=>{
    navEl.classList.toggle('navbar-scrolled', window.scrollY > 65 );
});
