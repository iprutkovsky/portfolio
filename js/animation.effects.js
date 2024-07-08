; (function () {
	'use strict';
	
	let toggle = () => {
		$('#tglBtn').on('change', function () {
			let sf = $('.skills-field'),
				cnt = $('.container');

			if ($(this).is(':checked')) {
				sf.css('text-indent', '-400%');
				cnt.css('display', 'block');
				cnt.css('z-index', '99');
				screenSaver();
			}
			else {
				clearTimeout(screenSaver());
				cnt.css('display', 'none');
				cnt.css('z-index', '-99');
				sf.css('text-indent', '0%');
			}
		})
	}

	// skills screen saver
	let screenSaver = () =>
		$(document).ready(() => {
			let s = 1000;
			let arr = [
				'AWS', 'Angular 16', 'C#',
				'CSS3', 'GC', 'GitHub',
				'HTML5', 'JDBC', 'JQuery',
				'Java', 'Javascript', 'MySQL',
				'NoSQL', 'Node.js', 'OracleSQL',
				'PostgreSQL', 'RxJS', 'S3',
				'SASS', 'SCSS', 'SQL',
				'TypeScript', 'Wordpress'
			];
			setTimeout(() => {
				let container = document.querySelector('.container');
				container.innerHTML = '';
				arr.map(v => {
					let blocks = document.createElement('div');
					$(blocks).addClass('blk');
					blocks.innerHTML = v;
					container.appendChild(blocks);
				});

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
	let contentWayPoint = () => {
		$('.animate-box').waypoint(function (direction) {
			if (direction == 'down' && !$(this.element).hasClass('animated')) {
				$(this.element).addClass('item-animate');
				setTimeout(() => {
					$('body .animate-box.item-animate').each(function (v) {
						let e = $(this);
						let animatedEffect = {
							'fadeInLeft': 'fadeInLeft animated',
							'fadeInRight': 'fadeInRight animated',
							'fadeInDown': 'fadeInDown animated',
							'fadeInUp': 'fadeInUp animated'
						};

						setTimeout(() => {
							e.addClass(animatedEffect[e.data('animate-effect')]);
							e.removeClass('item-animate');
						}, v * 180, 'easeInOutExpo');
					});
				}, 100);
			}
		}, { offset: '85%' });
	};

	$(() => {
		contentWayPoint();
		toggle();
	});
}());