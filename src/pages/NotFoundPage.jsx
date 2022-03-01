import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';

function NotFoundPage() {
	const navigate = useNavigate();

	useEffect(() => setTimeout(() => navigate('/'), 2000), [navigate]);

	return (
		<section className='bg-slate-900 '>
			<div className='container  mx-auto max-w-5xl relative flex justify-center items-stretch text-center '>
				<div className='flex items-center overflow-hidden w-full justify-center relative flex-wrap xl:justify-between pt-6 md:pt-12 xl:pt-20 pb-24 md:pb-32 xl:pb-44'>
					<img src='./Logo.png' className='w-80' alt='' />
					<div className='absolute xl:static w-full xl:w-auto text-center xl:text-right z-10 py-10 px-4'>
						<div className='absolute inset-0 bg-slate-800 opacity-90  xl:opacity-0 -z-10'></div>
						<h2 className='text-6xl md:text-7xl font-semibold text-customCyan '>404</h2>
						<h2 className='text-4xl md:text-5xl  mt-4'>Page Not Found</h2>
						<p className='text-3xl md:text-4xl text-slate-300  italic mt-6 '>
							Redirecting...
						</p>
						<div className='mt-10'>
							<PulseLoader color='#2384B4' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default NotFoundPage;
