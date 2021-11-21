$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('scroll-up-btn').addClass("show");
        }
        else{
            $('scroll-up-btn').removeClass("show");
        }
    });

    //slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    // typing text animation script
var typed = new Typed(".typing", {
    strings: ["Technophile...","Web Developer...", "Believer...","Pluviophile...","Learner...",  "Dreamer...", ],
    typeSpeed: 150,
    backSpeed: 80,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Technophile...","Web Developer...", "Believer...", "Learner...",  "Dreamer...", ],
    typeSpeed: 150,
    backSpeed: 80,
    loop: true
});
//toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggle("active");
    $('.menu-btn i').toggle("active");
});
});
 



