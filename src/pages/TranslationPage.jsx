function TranslationPage() {
	return (
		<section className='bg-slate-900 '>
			<div className='container mx-auto pt-6 md:pt-12 xl:pt-20   max-w-5xl text-center text-md xl:text-xl'>
				<div className='w-11/12 md:w-5/6 lg:4/6 xl:w-full mx-auto'>
					<textarea
						readOnly
						className='text-md xl:text-xl w-full block rounded-t-2xl read resize-none text-slate-900  bg-slate-300  h-64'
					/>
					<div className='bg-customCyan py-2 font-semibold text-center px-5 rounded-b-2xl'>
						Translation
					</div>
				</div>
				<div className='sm:flex  container mx-auto max-w-5xl overflow-visible -mt-4 z-20 justify-center bg-slate-800  w-11/12 md:w-5/6 lg:4/6 xl:w-full  rounded-2xl shadow-xl shadow-slate-900  translate-y-1/2 border-b-4 md:border-b-8 border-slate-300 py-8 sm:py-14 '>
					<label htmlFor='username' className='sr-only'>
						What do you want to translate?
					</label>
					<input
						placeholder='Type here...'
						className='  text-center  py-3 xl:py-4 bg-slate-300 rounded-md sm:rounded-r-none w-11/12 lg:w-64  sm:w-auto   text-slate-900'
						type='text'
						id='username'
					/>
					<button
						onClick={() => console.log('clicked')}
						className='bg-customCyan mt-3 sm:mt-0 rounded-md sm:rounded-l-none  font-semibold  py-3 px-6 sm:px-8'>
						Translate
					</button>
				</div>
			</div>
		</section>
	);
}

export default TranslationPage;
