import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { addTranslation } from '../api/translations';
import { useUser } from '../context/UserContext';
import getSignSrc from '../utils/getSignSrc';
import removeChildNodes from '../utils/removeChildNodes';

function TranslationForm({ translationArea }) {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const [translationInput, setTranslationInput] = useState('');
	const { username } = useUser();

	function onTranslateClick(data) {
		const translation = data.translation.toLowerCase().trim();

		// Clear previous translation
		removeChildNodes(translationArea.current);

		// Display new translation, save to database
		for (const letter of translation) {
			const img = new Image();

			img.src = getSignSrc(letter);
			img.style.width = '75px';
			img.style.display = 'inline';

			translationArea.current.appendChild(img);
		}

		addTranslation(username, translation);

		// Reset input
		setTranslationInput('');
	}

	return (
		<form
			onSubmit={handleSubmit(onTranslateClick)}
			className='sm:flex  container mx-auto max-w-5xl overflow-visible -mt-4 z-20 justify-center bg-slate-800  w-11/12 md:w-5/6 lg:4/6 xl:w-full  rounded-2xl shadow-xl shadow-slate-900  translate-y-1/2 border-b-4 md:border-b-8 border-slate-300 py-8 sm:py-14 '>
			<label htmlFor='translation' className='sr-only'>
				What do you want to translate?
			</label>
			<input
				value={translationInput}
				onInput={e => setTranslationInput(e.target.value)}
				placeholder='Type here...'
				className='  text-center py-3 xl:py-4 bg-slate-300 rounded-md sm:rounded-r-none w-11/12 lg:w-64  sm:w-auto   text-slate-900'
				type='text'
				id='translation'
				{...register('translation', {
					required: true,
					minLength: 4,
					maxLength: 40,
					pattern: /^[a-zA-Z\s]*$/
				})}
			/>
			<input
				type='submit'
				value='Translate'
				className='bg-customCyan  hover:cursor-pointer mt-3 sm:mt-0 rounded-md sm:rounded-l-none  font-semibold  py-3 px-6 sm:px-8'
			/>

			{errors.translation?.type === 'required' && console.error('Translation cannot be empty!')}
			{errors.translation?.type === 'minLength' &&
				console.error('Translation must be atleast 4 characters long!')}
			{errors.translation?.type === 'maxLength' &&
				console.error('Translation must be maximum 40 characters long!')}
			{errors.translation?.type === 'pattern' &&
				console.error('Translation must contain letters and spaces only!')}
		</form>
	);
}

export default TranslationForm;
