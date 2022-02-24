function TranslationPage() {
	return (
		<section className='bg-slate-900 '>
			<div className='container py-20  mx-auto max-w-5xl text-md xl:text-xl sm:flex justify-center items-stretch text-center '>
				<label htmlFor='translate' className='sr-only'>
					What do you want to translate?
				</label>
				<input
					placeholder='Type here..'
					className='  text-center  py-3 xl:py-4 bg-slate-300 rounded-md sm:rounded-r-none w-11/12 lg:w-64  sm:w-auto   text-slate-900'
					type='text'
					id='translate'
				/>
				<button
					onClick={() => console.log('clicked')}
					className='bg-slate-800 mt-3 sm:mt-0 rounded-md sm:rounded-l-none  font-semibold  py-3 px-6 sm:px-8'>
					Translate
				</button>
			</div>
			<div className='bg-slate-800 pt-20'>
				<div className=' container  mx-auto shadow-xl shadow-slate-900 max-w-5xl text-center text-md xl:text-xl'>
					<textarea
						readOnly
						className=' w-11/12 lg:w-full rounded-t-2xl read resize-none text-slate-900  bg-slate-300  h-56'
					/>
					<div
						className='bg-slate-900 border-b-4 md:border-b-8 border-slate-300 rounded-b-2xl py-4 font-semibold
					'>
						Translation
					</div>
				</div>
			</div>
		</section>
	);
}

export default TranslationPage;
