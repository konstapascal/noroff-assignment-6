import { useLocation } from 'react-router-dom';
import NavbarLinks from './NavbarLinks';

function Navbar() {
	const location = useLocation();

	return (
		<section className='bg-slate-900 border-b-4 border-slate-800'>
			<nav className='container py-8 px-4 xl:px-0 max-w-5xl mx-auto flex  items-center text-center  justify-center lg:justify-between gap-6 '>
				<div
					className={
						'text-4xl md:text-5xl font-sister ' +
						(location.pathname !== '/' && 'hidden lg:block')
					}>
					Lost in Translation
				</div>
				{location.pathname !== '/' && <NavbarLinks />}
			</nav>
		</section>
	);
}

export default Navbar;
