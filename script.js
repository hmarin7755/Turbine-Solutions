window.addEventListener('scroll', ()=>{
    let nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0 );
});


let changeIcon = function(icon){
    icon.classList.toggle('fa-x')
}