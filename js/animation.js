//Section 3
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
			s3OnScroll_1.unobserve(entry.target);
			entry.target.classList.add('fl');
		}
	});
}, s3Options_1);

s3Text.forEach((animate_x) => {
	s3OnScroll_1.observe(animate_x);
});

// Section 4
const s4Text = document.querySelectorAll('.animate--x');

const s4Options_1 = {
	threshold: 1,
	rootMargin: '0px',
};

const s4OnScroll_1 = new IntersectionObserver(function (entries, s4OnScroll_1) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('fr');
			s4OnScroll_1.unobserve(entry.target);
		}
	});
}, s4Options_1);

s4Text.forEach((animate__x) => {
	s4OnScroll_1.observe(animate__x);
});

const s4Opacity = document.querySelectorAll('.absolute-1');

const s4OpacityOptions_1 = {
	threshold: 1,
	rootMargin: '0px',
};

const s4OpacityOnScroll_1 = new IntersectionObserver(function (
	entries,
	s4OpacityOnScroll_1
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('op-0');
			s4OpacityOnScroll_1.unobserve(entry.target);
		}
	});
},
s4OpacityOptions_1);

s4Opacity.forEach((s4Opacity_1) => {
	s4OpacityOnScroll_1.observe(s4Opacity_1);
});

const s4Opacity_2 = document.querySelectorAll('.absolute-2');

const s4OpacityOptions_2 = {
	threshold: 1,
	rootMargin: '0px',
};

const s4OpacityOnScroll_2 = new IntersectionObserver(function (
	entries,
	s4OpacityOnScroll_2
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('op-0');
			s4OpacityOnScroll_2.unobserve(entry.target);
		}
	});
},
s4OpacityOptions_2);

s4Opacity_2.forEach((s4Opacity_2) => {
	s4OpacityOnScroll_2.observe(s4Opacity_2);
});

//Section 5

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
