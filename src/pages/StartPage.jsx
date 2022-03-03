import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import UserForm from '../components/UserForm';
import { useUser } from '../context/UserContext';
import { storageRead } from '../utils/storage';

function StartPage() {
	const { username, login } = useUser();
	const navigate = useNavigate();

	// Side effects
	useEffect(() => {
		// If user is logged in, do not allow him on / without logging out
		if (username) navigate('/translation');

		// If username is stored in storage, log in that user
		const sessionUsername = storageRead('userInfo');
		if (sessionUsername) login(sessionUsername);
	}, [navigate, username, login]);

	return (
		<section className='bg-slate-900 '>
			<div className='container  mx-auto max-w-5xl relative flex justify-center items-stretch text-center '>
				<div className='flex items-center overflow-hidden w-full justify-center relative flex-wrap xl:justify-between pt-6 md:pt-12 xl:pt-20 pb-24 md:pb-32 xl:pb-44'>
					<img src='./Logo.png' className='w-80' alt='' />
					<div className='absolute xl:static w-full xl:w-auto z-10 py-10 px-4'>
						<div className='absolute inset-0 bg-slate-800 opacity-90  xl:opacity-0 -z-10'></div>
						<h1 className='text-5xl md:text-6xl font-bold  '>Lost in Translation</h1>
						<p className='text-3xl md:text-4xl text-slate-300 text-center xl:text-right italic mt-2 '>
							Get started
						</p>
					</div>
				</div>
				<UserForm />
			</div>
		</section>
	);
}

export default StartPage;
