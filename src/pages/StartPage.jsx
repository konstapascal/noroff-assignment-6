function StartPage() {
	return (
		<section className='bg-slate-900 '>
			<div className='container mx-auto max-w-5xl relative flex justify-center items-stretch text-center '>
				<div className='flex items-center w-full justify-center relative flex-wrap xl:justify-between pt-6 md:pt-12 xl:pt-20 pb-24 md:pb-32 xl:pb-44'>
					<img src='./Logo.png' className='w-80 sm:w-96' alt='' />
					<div className='absolute xl:static w-full xl:w-auto z-10 py-10 px-4'>
						<div className='absolute inset-0 bg-slate-800 opacity-90 xl:opacity-0 -z-10'></div>
						<h1 className='text-5xl md:text-6xl font-semibold'>Lost in Translation</h1>
						<p className='text-3xl md:text-4xl text-slate-300 text-right italic mt-2 '>
							Get started
						</p>
					</div>
				</div>
				<div className='flex justify-center bg-slate-800 absolute bottom-0 w-11/12 md:w-5/6 lg:w-full  rounded-2xl shadow-xl shadow-slate-900  translate-y-1/2 border-b-4 md:border-b-8 border-slate-300 py-8 sm:py-14 '>
					<label htmlFor='username' className='sr-only'>
						What's your name?
					</label>
					<div className='sm:flex text-md xl:text-xl '>
						<input
							placeholder="What's your name?"
							className='  text-center  py-3 xl:py-4 bg-slate-100 rounded-md sm:rounded-r-none w-11/12 lg:w-64  sm:w-auto   text-slate-900'
							type='text'
							id='username'
						/>
						<button className='bg-slate-900 mt-3 sm:mt-0 rounded-md sm:rounded-l-none  font-semibold  py-3 px-6 sm:px-8'>
							Login
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default StartPage;
