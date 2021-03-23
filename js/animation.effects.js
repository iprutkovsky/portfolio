; (function () {

	'use strict';
	
	let toggle = () => {
		$('max-width button').on('click', function () {
			let sf = document.querySelector('.skill-field'),
				cnt = document.querySelector('.container');
            let n = 'none',
                b = 'block';
			if (sf.style.display == b) {
				sf.style.display = n;
				// cnt.style.display = b;
				// screenSaver();
			}
			else {
				// clearTimeout(screenSaver());
				// cnt.style.display = n;
				sf.style.display = b;
			}
		})
	}

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