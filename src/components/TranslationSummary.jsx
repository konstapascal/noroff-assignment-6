import React, { useState } from 'react';
import getSignSrc from '../utils/getSignSrc';

function TranslationSummary({ translation }) {
	const [translationSigns] = useState(translation.split(''));

	return (
		<div className='mt-8 first:mt-0 mx-4 xl:mx-0 bg-slate-800 border-b-4 md:border-b-8 border-slate-300 rounded-2xl shadow-xl py-8 px-4'>
			<div>
				{translationSigns.map((letter, idx) => (
					<img
						className='inline w-[50px]'
						src={getSignSrc(letter)}
						key={`${idx}-${letter}`}
						alt=''
					/>
				))}
			</div>
			<p className='text-xl mt-4 text-slate-400'>{translation}</p>
		</div>
	);
}

export default TranslationSummary;
