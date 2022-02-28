import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';

import { deleteTranslations, getTranslations } from '../api/translations';
import TranslationSummary from '../components/TranslationSummary';
import { useUser } from '../context/UserContext';

function ProfilePage() {
	const [translations, setTranslations] = useState(null);
	const { username } = useUser();
	const navigate = useNavigate();

	useEffect(() => {
		// Redirect to / if not logged in
		if (!username) navigate('/');
	}, [username, navigate]);

	useEffect(() => {
		let isMounted = true;

		// Only run logic if the component is mounted
		(async () => {
			const _translations = await getTranslations(username);
			const _translationsLastTen = _translations.slice(-10);

			if (isMounted) {
				if (_translations.length > 10) return setTranslations([..._translationsLastTen]);
				return setTranslations([..._translations]);
			}
		})();

		return () => {
			isMounted = false;
		};
	}, [username]);

	async function onDeleteAllClick() {
		// Delete translations from database
		const _newUser = await deleteTranslations(username, translations);

		const _translations = _newUser.translations;
		const _translationsLastTen = _translations.slice(-10);

		// Update local state with remaining translations
		if (_translations.length > 10) return setTranslations([..._translationsLastTen]);
		return setTranslations([..._translations]);
	}

	return (
		<section className='bg-slate-900 '>
			<div className='container py-20  mx-auto max-w-5xl  text-center'>
				<h1 className='text-5xl font-bold'>Profile Page</h1>
				<div className='mt-14'>
					{translations === null && <PulseLoader color='#2384B4' />}
					{translations !== null && translations.length === 0 && (
						<div className='text-2xl bg-customCyan py-6 rounded-md'>
							No translations to display
						</div>
					)}
					{translations !== null &&
						translations.length !== 0 &&
						translations.map((translation, idx) => (
							<TranslationSummary translation={translation} idx={idx} key={idx} />
						))}
				</div>
				{translations !== null && translations.length !== 0 && (
					<button
						onClick={onDeleteAllClick}
						className='text-lg xl:text-xl bg-red-500 mt-14 rounded-md  hover:cursor-pointer font-semibold  py-3 px-6  sm:px-8'>
						Delete All
					</button>
				)}
			</div>
		</section>
	);
}

export default ProfilePage;
