$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll
        this.scrollY > 20 ? $('.navbar').addClass("sticky") : $('.navbar').removeClass("sticky");

        // scroll-up button show/hide        
        let e = $('html')[0];
        this.scrollY > 500 ? $('.scroll-up-btn').addClass("show") : $('.scroll-up-btn').removeClass("show");
        document.querySelector('#progress-bar-output').innerHTML = parseInt(`${e.scrollTop / (e.scrollHeight - e.clientHeight) * 100}%`);
    });

    // skills screen saver
    let screenSaver = () =>
        $(document).ready(function () {
            let s = 1000;
            let arr = ['Java', 'JDBC', 'Servlets', 'Spring', 'SQL', 'MYSQL', 'OracleSQL',
                'Angular 8', 'Angular 9', 'Angular 10', 'TypeScript', 'Angular JS', 'HTML5', 'CSS3',
                'Javascript', 'RxJS', 'JQuery', 'Node.js', 'Jenkins', 'GitHub',
                'GitLab', 'AWS', 'S3', 'GC', 'Wordpress'];
            setTimeout(function () {
                let container = document.querySelector('.container');
                container.innerHTML = '';
                arr.map(v => {
                    let blocks = document.createElement('div');
                    $(blocks).addClass('blk');
                    blocks.innerHTML = v;
                    container.appendChild(blocks);
                })

                let animeShuffle = () =>
                    anime({
                        targets: '.blk',
                        translateX: () => anime.random(-320, 320),
                        translateY: () => anime.random(-230, 230),
                        scale: () => anime.random(.5, 3),
                        easing: 'linear',
                        duration: 9 * s,
                        delay: anime.stagger(9),
                        complete: animeShuffle
                    });
                animeShuffle();
            }, s);
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
});