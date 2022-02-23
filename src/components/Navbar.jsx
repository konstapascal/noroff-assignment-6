import UserInfo from './UserInfo';

function Navbar() {
	return (
		<section className='bg-slate-900 border-b-4 border-slate-800'>
			<nav className='container py-6 sm:py-8 max-w-5xl mx-auto flex  items-center text-center justify-center xl:justify-between'>
				<div className='text-3xl md:text-4xl'>Lost in Translation</div>
				{/* <div className='flex text-lg text-blue-400 underline gap-4'>
					<Link to='/'>Home</Link>
					<Link to='/translation'>Translation</Link>
					<Link to='/profile'>Profile</Link>
				</div> */}
				<UserInfo />
			</nav>
		</section>
	);
}

export default Navbar;
