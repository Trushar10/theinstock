new fullpage('#fullpage', {
	autoScrolling: true,
});

//section 1 slider
var swiper = new Swiper('.mySwiper1', {
	speed: 1000,
	spaceBetween: 30,
	effect: 'fade',
	centeredSlides: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

//section 5 slider
var swiper = new Swiper('.mySwiper5', {
	speed: 1000,
	spaceBetween: 30,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	centeredSlides: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

//section 6 slider
var swiper = new Swiper('.mySwiper6', {
	speed: 1000,
	spaceBetween: 30,
	effect: 'fade',
	centeredSlides: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

var swiper = new Swiper('.mySwiper7', {
	slidesPerView: 3,
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

//Counter
const faders = document.querySelectorAll('.counter');

const appearOptions = {
	threshold: 1,
	rootMargin: '0px',
};

const appearOnScroll = new IntersectionObserver(function (
	entries,
	appearOnScroll
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('appear');
			appearOnScroll.unobserve(entry.target);

			// counter up
			const counterClass = document.querySelectorAll('.number');
			const speed = 200;

			counterClass.forEach((counter) => {
				const animate = () => {
					const value = +counter.getAttribute('data-target');
					const data = +counter.innerText;

					const time = value / speed;
					if (data < value) {
						counter.innerText = Math.ceil(data + time);
						setTimeout(animate, 1);
					} else {
						counter.innerText = value;
					}
				};

				animate();
			});
		}
	});
},
appearOptions);

faders.forEach((fader) => {
	appearOnScroll.observe(fader);
});
