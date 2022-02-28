import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTranslations } from '../api/translations';

import TranslationSummary from '../components/TranslationSummary';
import { useUser } from '../context/UserContext';

function ProfilePage() {
	const [translations, setTranslations] = useState([]);
	const { username } = useUser();
	const navigate = useNavigate();

	useEffect(() => {
		// Redirect to / if not logged in
		if (!username) navigate('/');
	}, [username, navigate]);

	useEffect(() => {
		(async () => {
			const _translations = await getTranslations(username);
			setTranslations([..._translations]);
		})();
	}, [username]);

	return (
		<section className='bg-slate-900 '>
			<div className='container py-20  mx-auto max-w-5xl  text-center'>
				{translations.length === 0 && <p>Loading...</p>}
				{/* {translations.length >} */}
				<TranslationSummary />
				<TranslationSummary />
				<TranslationSummary />
				<TranslationSummary />
			</div>
		</section>
	);
}

export default ProfilePage;
