import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';

function Navbar() {
	return (
		<nav className='bg-slate-800'>
			<div className='container py-8 mx-auto flex items-center justify-between'>
				<div className='text-5xl'>Lost in Translation</div>
				<div className='flex text-lg text-blue-400 underline gap-4'>
					<Link to='/'>Home</Link>
					<Link to='/translation'>Translation</Link>
					<Link to='/profile'>Profile</Link>
				</div>
				<UserInfo />
			</div>
		</nav>
	);
}

export default Navbar;
