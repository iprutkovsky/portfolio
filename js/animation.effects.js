; (function () {

	'use strict';

	let toggle = () => {
		$('.max-width a').on('click', function () {
			let sf = document.querySelector('.skill-field'),
				cnt = document.querySelector('.container');
			let n = 'none',
				b = 'block';
			if (sf.style.display == b) {
				sf.style.display = n;
				cnt.style.display = b;
				screenSaver();
			}
			else {
				clearTimeout(screenSaver());
				cnt.style.display = n;
				sf.style.display = b;
			}
		})
	}

	// skills screen saver
	// let screenSaver = () =>
	// 	$(document).ready(function () {
	// 		let s = 1000;
	// 		let arr = ['Java', 'JDBC', 'Servlets', 'Spring', 'SQL', 'MYSQL', 'OracleSQL',
	// 			'Angular 8', 'Angular 9', 'Angular 10', 'TypeScript', 'Angular JS', 'HTML5', 'CSS3',
	// 			'Javascript', 'RxJS', 'JQuery', 'Node.js', 'Jenkins', 'GitHub',
	// 			'GitLab', 'AWS', 'S3', 'GC', 'Wordpress'];
	// 		setTimeout(function () {
	// 			let container = document.querySelector('.container');
	// 			container.innerHTML = '';
	// 			arr.map(v => {
	// 				let blocks = document.createElement('div');
	// 				$(blocks).addClass('blk');
	// 				blocks.innerHTML = v;
	// 				container.appendChild(blocks);
	// 			})

	// 			let animeShuffle = () =>
	// 				anime({
	// 					targets: '.blk',
	// 					translateX: () => anime.random(-550, 550),
	// 					translateY: () => anime.random(-100, 100),
	// 					scale: () => anime.random(.5, 3),
	// 					easing: 'linear',
	// 					duration: 9 * s,
	// 					delay: anime.stagger(9),
	// 					complete: animeShuffle
	// 				});
	// 			animeShuffle();
	// 		}, s);
	// 	});

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