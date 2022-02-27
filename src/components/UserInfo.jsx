import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function UserInfo() {
	const location = useLocation();

	return (
		<div className='flex gap-6 md:gap-8  justify-center lg:justify-end items-center '>
			<div className='text-md leading-4 flex items-center flex-col text-slate-300 italic'>
				<span>Logged in as</span>
				<span className='font-bold text-lg text-slate-100 not-italic'>konstapascal</span>
			</div>
			<div className='flex flex-wrap justify-end  gap-2 sm:gap-3'>
				{location.pathname === '/translation' && (
					<Link to='/profile' className='bg-customCyan rounded-md   font-semibold  py-2 px-4'>
						Profile
					</Link>
				)}
				{location.pathname === '/profile' && (
					<Link
						to='/translation'
						className='bg-customCyan rounded-md   font-semibold  py-2 px-4'>
						Translation
					</Link>
				)}

				<Link to='/' className='bg-red-500 rounded-md   font-semibold  py-2 px-4'>
					Logout
				</Link>
			</div>
		</div>
	);
}

export default UserInfo;
