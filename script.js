(function () {
	// Either 6 or 8 for now!
	const segmentCount = 8;
	const wrapper = document.querySelector('#kaleidoscope');
	let images = createSegments(segmentCount, wrapper);

	// Generate the segments and image wrappers with js
	// Could be done on the BE if that's your thing
	function createSegments(count, wrapper) {
		let images = [];

		for(let i = 0; i < count; i++) {
			const element = document.createElement('div');
			element.classList.add('kaleidoscope__segment');

			const image = document.createElement('div');
			image.classList.add('kaleidoscope__image');

			element.appendChild(image);
			images.push(image);
			wrapper.appendChild(element);
		}

		return images;
	}

	// Update background position on mouse move
	function handleMouseMove(e) {
		const nx = e.pageX;
		const ny = -e.pageY;

		images.forEach(image => {
			image.style.backgroundPosition = [nx + "px", ny + "px"].join(' ');
		});
	}

	// Do not do the animation for people who do not want it
	if(window.matchMedia("(prefers-reduced-motion: no-preference)")) {
		wrapper.addEventListener("mousemove", handleMouseMove);
	}
})();
