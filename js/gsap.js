gsap.set('.animate-x', { xPercent: -50 });

gsap.set('.animate--x', { xPercent: 50 });

gsap.to('.animate-x', {
	xPercent: 0,
	opacity: 1,
	duration: 1,
});

gsap.to('.animate--x', {
	scrollTrigger: {
		trigger: '.animate--x',
		start: 'top 100%',
		scrub: true,
		markers: true,
	},
	xPercent: 0,
	opacity: 1,
	duration: 1,
});
