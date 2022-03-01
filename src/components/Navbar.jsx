import { useLocation } from 'react-router-dom';

import NavbarLinks from './NavbarLinks';
import NavbarLogo from './NavbarLogo';

function Navbar() {
	const location = useLocation();

	return (
		<section className='bg-slate-900 border-b-4 border-slate-800'>
			<nav className='container py-8 px-4 xl:px-0 max-w-5xl mx-auto flex  items-center text-center  justify-center lg:justify-between gap-6 '>
				<NavbarLogo />
				{(location.pathname === '/translation' || location.pathname === '/profile') && (
					<NavbarLinks />
				)}
			</nav>
		</section>
	);
}

export default Navbar;
