; (function () {

	'use strict';
	// -=Animations=-
	// Jump to top
	let jumpUp = function () {
		let rct = document.querySelector('#jumpToTop'),
			cld = document.querySelector('#target_cloud'),
			pgb = document.querySelector('.progress-bar'),
			pct = document.querySelector('#progress-bar-output');
		window.onscroll = function () {
			if ($('html')[0].scrollTop > 20) {
				rct.style.display = 'block';
				cld.style.display = 'block';
				pgb.style.display = 'block';
				pct.style.display = 'block';
			}
			else {
				rct.style.display = 'none';
				cld.style.display = 'none';
				pgb.style.display = 'none';
				pct.style.display = 'none';
			}
		};
	}

	// Indicator of scrolling
	let scrollIndicator = function () {
		window.addEventListener('scroll', function () {
			let e = $('html')[0];
			document.querySelector('#scrBar').style.height = `${e.scrollTop / (e.scrollHeight - e.clientHeight) * 100}%`;
			document.querySelector('#jumpToTop').style.top = `${8 + e.scrollTop / (e.scrollHeight - e.clientHeight) * 82}%`;			
			document.querySelector('#progress-bar-output').innerHTML = parseInt(document.querySelector('#scrBar').style.height);
			document.querySelector('#progress-bar-output').style.top = `${8 + e.scrollTop / (e.scrollHeight - e.clientHeight) * 82}%`;
		});
	}

	// Containers fading
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
		scrollIndicator();
		contentWayPoint();
		jumpUp();
	});

}());