import React, { useRef } from 'react';

function TranslationForm({ translationArea }) {
	const translationInput = useRef(null);

	function onTranslateClick(event) {
		event.preventDefault();

		const areaEl = translationArea.current;
		const inputEl = translationInput.current;

		// Clear previous translation
		while (areaEl.hasChildNodes()) {
			areaEl.removeChild(areaEl.lastChild);
		}

		// Display new translation
		for (const letter of inputEl.value) {
			const img = new Image();

			img.style.display = 'inline';
			img.style.height = '75px';
			img.src = letter === ' ' ? 'signs/space.png' : `signs/${letter}.png`;

			areaEl.appendChild(img);
		}

		inputEl.focus();
	}
	return (
		<form className='sm:flex  container mx-auto max-w-5xl overflow-visible -mt-4 z-20 justify-center bg-slate-800  w-11/12 md:w-5/6 lg:4/6 xl:w-full  rounded-2xl shadow-xl shadow-slate-900  translate-y-1/2 border-b-4 md:border-b-8 border-slate-300 py-8 sm:py-14 '>
			<label htmlFor='translation' className='sr-only'>
				What do you want to translate?
			</label>
			<input
				ref={translationInput}
				placeholder='Type here...'
				className='  text-center  py-3 xl:py-4 bg-slate-300 rounded-md sm:rounded-r-none w-11/12 lg:w-64  sm:w-auto   text-slate-900'
				type='text'
				id='translation'
			/>
			<button
				onClick={onTranslateClick}
				className='bg-customCyan mt-3 sm:mt-0 rounded-md sm:rounded-l-none  font-semibold  py-3 px-6 sm:px-8'>
				Translate
			</button>
		</form>
	);
}

export default TranslationForm;
