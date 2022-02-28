import React from 'react';
import { useLocation } from 'react-router-dom';

function NavbarLogo() {
	const location = useLocation();

	return (
		<div
			className={
				'text-4xl md:text-5xl font-sister ' + (location.pathname !== '/' && 'hidden lg:block')
			}>
			Lost in Translation
		</div>
	);
}

export default NavbarLogo;
