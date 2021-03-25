$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll
        this.scrollY > 20 ? $('.navbar').addClass("sticky") : $('.navbar').removeClass("sticky");

        // scroll-up button show/hide        
        let e = $('html')[0];
        this.scrollY > 500 ? $('.scroll-up-btn').addClass("show") : $('.scroll-up-btn').removeClass("show");
        document.querySelector('#progress-bar-output').innerHTML = parseInt(`${e.scrollTop / (e.scrollHeight - e.clientHeight) * 100}%`);
    });

    // slide-up
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar 
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation 
    var typed = new Typed(".typing", {
        strings: ["Freelancer", "Network Engineer", "Software Developer"],
        typeSpeed: 140,
        backSpeed: 80,
        loop: true
    });

    // owl carousel 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });


    $(".fullname").on("input", function () {
        let validateName = name => /[A-Za-z]{3,}/.test(name);
        const name = $(".fullname");
        name.text("");

        !validateName(name.val()) ? name.css("color", "rgb(173, 56, 56)") : name.css("color", "rgb(51, 51, 51)");
    });

    $(".email-input").on("input", function () {
        let validateEmail = email => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        const email = $(".email-input");
        email.text("");

        !validateEmail(email.val()) ? email.css("color", "rgb(173, 56, 56)") : email.css("color", "rgb(51, 51, 51)");
    });
});