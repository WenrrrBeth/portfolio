$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.nav').addClass("sticky");
        }else{
            $('.nav').removeClass("sticky");
        }
    })
})

const navshow = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');
    const navlinks = document.querySelectorAll('.menu li');
    // const line = document.querySelector('.line::after');
    burger.addEventListener('click', () => {
        if(nav.classList.contains('hide')){
            nav.classList.add('show');
            nav.classList.remove('hide');
        }else{
            nav.classList.add('hide');
            nav.classList.remove('show');
        }
        // document.getElementsByClassName("menu").style.display = "flex";
        burger.classList.toggle('toggle');
    })
    nav.addEventListener('click', () => {
        if(nav.classList.contains('hide')){
            nav.classList.add('show');
            nav.classList.remove('hide');
        }else{
            nav.classList.add('hide');
            nav.classList.remove('show');
        }
        burger.classList.toggle('toggle');
        // document.getElementsByClassName("menu").style.display = "flex";
    })
    
    navlinks.forEach((link, index) => {
        link.style.animation = `fade 0.5s ease forward ${index/5}s`;
    })

}

navshow();

