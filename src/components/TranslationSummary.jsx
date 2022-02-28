import React, { useState } from 'react';
import getSignSrc from '../utils/getSignSrc';

function TranslationSummary({ translation }) {
	const [translationSigns] = useState(translation.split(''));

	return (
		<div className='mt-8 first:mt-0 mx-4 xl:mx-0 bg-slate-800 border-b-4 md:border-b-8 border-slate-300 rounded-2xl shadow-xl py-8 px-4'>
			<div>
				<h2 className='text-2xl font-semibold mb-2'>Translation Signs</h2>
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
			</div>
			<div>
				<h2 className='text-2xl font-semibold mt-4 '>Translation</h2>
				<p className='text-xl text-slate-400'>{translation}</p>
			</div>
		</div>
	);
}

export default TranslationSummary;
