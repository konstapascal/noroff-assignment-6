export function removeChildNodes(element) {
	while (element.hasChildNodes()) {
		element.removeChild(element.lastChild);
	}
}

export function displayTranslationSigns(translation, element) {
	for (const letter of translation) {
		const img = new Image();

		img.style.display = 'inline';
		img.style.height = '75px';
		img.src = letter === ' ' ? 'signs/space.png' : `signs/${letter}.png`;

		element.appendChild(img);
	}
}
