new fullpage('#fullpage', {
	autoScrolling: true,
});

//section 1 slider
var swiper = new Swiper('.mySwiper1', {
	speed: 1000,
	spaceBetween: 30,
	effect: 'fade',
	loop: true,
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
	loop: true,
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
	loop: true,
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

const viewportWidth = window.innerWidth;

if (viewportWidth < 576) {
	var swiper = new Swiper('.mySwiper7', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
} else {
	var swiper = new Swiper('.mySwiper7', {
		slidesPerView: 3,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}

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

//Section 2 text and logo changing
const s2Slide = document.querySelectorAll('.s2-flex');

const s2Options_1 = {
	threshold: 1,
	rootMargin: '0px',
};

const s2OnScroll_1 = new IntersectionObserver(function (entries, s2OnScroll_1) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			s2OnScroll_1.unobserve(entry.target);

			let slideIndex = 0;
			showSlides();

			function showSlides() {
				let i;
				let slides = document.getElementsByClassName('description');
				for (i = 0; i < slides.length; i++) {
					slides[i].style.display = 'none';
				}
				slideIndex++;
				if (slideIndex > slides.length) {
					slideIndex = 1;
				}
				slides[slideIndex - 1].style.display = 'block';
				setTimeout(showSlides, 2000);
			}

			let logoIndex = 0;
			showLogo();

			function showLogo() {
				let i;
				let slides = document.getElementsByClassName('benefit-logo');
				for (i = 0; i < slides.length; i++) {
					slides[i].classList.remove('logo-active');
				}
				logoIndex++;
				if (logoIndex > slides.length) {
					logoIndex = 1;
				}
				slides[logoIndex - 1].classList.add('logo-active');
				setTimeout(showLogo, 2000);
			}
		}
	});
}, s2Options_1);

s2Slide.forEach((s2) => {
	s2OnScroll_1.observe(s2);
});

//Section 3 progress bar
const s3Text = document.querySelectorAll('.animate-x');

const s3Options_1 = {
	threshold: 1,
	rootMargin: '0px',
};

const s3OnScroll_1 = new IntersectionObserver(function (entries, s3OnScroll_1) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('fl');
			s3OnScroll_1.unobserve(entry.target);
		}
	});
}, s3Options_1);

s3Text.forEach((animate) => {
	s3OnScroll_1.observe(animate);
});

//Progress bar 1
const progress_1 = document.querySelectorAll('.pw-1');

const widthOptions_1 = {
	threshold: 1,
	rootMargin: '0px',
};

const widthOnScroll_1 = new IntersectionObserver(function (
	entries,
	widthOnScroll_1
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('pw-4');
			widthOnScroll_1.unobserve(entry.target);
		}
	});
},
widthOptions_1);

progress_1.forEach((bar_1) => {
	widthOnScroll_1.observe(bar_1);
});

//Progress bar 2
const progress_2 = document.querySelectorAll('.pw-2');

const width_2Options = {
	threshold: 1,
	rootMargin: '0px',
};

const width_2OnScroll = new IntersectionObserver(function (
	entries,
	width_2OnScroll
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('pw-60');
			width_2OnScroll.unobserve(entry.target);
		}
	});
},
width_2Options);

progress_2.forEach((bar_2) => {
	width_2OnScroll.observe(bar_2);
});

// Section 6 testimonial
const scale = document.querySelectorAll('.scale-0');

const scaleOptions = {
	threshold: 1,
	rootMargin: '0px',
};

const scaleScroll = new IntersectionObserver(function (entries, scaleScroll) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('scale');
			scaleScroll.unobserve(entry.target);
		}
	});
}, scaleOptions);

scale.forEach((scaled) => {
	scaleScroll.observe(scaled);
});

const fromBottom = document.querySelectorAll('.bottom');

const fbOptions = {
	threshold: 1,
	rootMargin: '0px',
};

const fbScroll = new IntersectionObserver(function (entries, fbScroll) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('fb');
			fbScroll.unobserve(entry.target);
		}
	});
}, fbOptions);

fromBottom.forEach((fb) => {
	fbScroll.observe(fb);
});
