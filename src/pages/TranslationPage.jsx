import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TranslationForm from '../components/TranslationForm';
import { useUser } from '../context/UserContext';

function TranslationPage() {
	const translationArea = useRef(null);
	const { username } = useUser();
	const navigate = useNavigate();

	useEffect(() => {
		// Redirect to / if not logged in
		if (!username) navigate('/');
	}, [username, navigate]);

	return (
		<section className='bg-slate-900 '>
			<div className='container mx-auto pt-6 md:pt-12 xl:pt-20   max-w-5xl text-center text-md xl:text-xl'>
				<div className='w-11/12 md:w-5/6 lg:4/6 xl:w-full mx-auto'>
					<div
						readOnly
						ref={translationArea}
						className='text-md xl:text-xl w-full text-left block rounded-t-2xl p-4  text-slate-900  bg-slate-300 h-72 overflow-auto'></div>
					<div className='bg-customCyan py-2 font-semibold text-center px-5 rounded-b-2xl'>
						Translation
					</div>
				</div>
				<TranslationForm translationArea={translationArea} />
			</div>
		</section>
	);
}

export default TranslationPage;
