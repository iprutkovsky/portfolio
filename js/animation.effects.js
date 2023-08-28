; (function () {

	'use strict';

	let toggle = () => {
		$('#tglBtn').on('change', function () {
			let sf = $('.skills-field'),
				cnt = $('.container');

			if ($(this).is(':checked')) {
				sf.css('text-indent', '-350%');
				cnt.css('display', 'block');
				screenSaver();
			}
			else {
				clearTimeout(screenSaver());
				cnt.css('display', 'none');
				sf.css('text-indent', '0%');
			}
		})
	}

	// skills screen saver
	let screenSaver = () =>
		$(document).ready(function () {
			let s = 1000;
			let arr = ['Java', 'JDBC', 'Servlets', 'Spring', 'SQL', 'MySQL', 'OracleSQL', 'PostgreSQL',
				'Angular 8', 'Angular 10', 'Angular 14', 'TypeScript', 'React', 'HTML5', 'CSS3',
				'Javascript', 'RxJS', 'JQuery', 'Node.js', 'Jenkins', 'GitHub',
				'AWS', 'S3', 'GC', 'Wordpress'];
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
						translateX: () => anime.random(-550, 550),
						translateY: () => anime.random(-115, 115),
						scale: () => anime.random(.5, 3),
						easing: 'linear',
						duration: 9 * s,
						delay: anime.stagger(9),
						complete: animeShuffle
					});
				animeShuffle();
			}, s);
		});

	// Containers fading script
	let contentWayPoint = function () {
		let i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction == 'down' && !$(this.element).hasClass('animated')) {
				++i;
				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (v) {
						let e = $(this);
						setTimeout(function () {
							switch (e.data('animate-effect')) {
								case 'fadeInLeft':
									e.addClass('fadeInLeft animated');
									break;
								case 'fadeInRight':
									e.addClass('fadeInRight animated');
									break;
								case 'fadeInUp':
									e.addClass('fadeInUp animated');
									break;
								default:
									e.addClass('fadeInDown animated');
							}
							e.removeClass('item-animate');
						}, v * 180, 'easeInOutExpo');
					});
				}, 100);
			}

		}, { offset: '85%' });
	};

	$(function () {
		contentWayPoint();
		toggle();
	});

}());