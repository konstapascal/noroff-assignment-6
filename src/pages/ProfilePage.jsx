import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Translation from '../components/Translation';
import { useUser } from '../context/UserContext';

function ProfilePage() {
	const { username } = useUser();
	const navigate = useNavigate();

	useEffect(() => {
		// Redirect to / if not logged in
		if (!username) navigate('/');
	}, [username, navigate]);

	return (
		<section className='bg-slate-900 '>
			<div className='container py-20  mx-auto max-w-5xl  text-center'>
				<Translation />
				<Translation />
				<Translation />
				<Translation />
			</div>
		</section>
	);
}

export default ProfilePage;
