import React from 'react';
import { useForm } from 'react-hook-form';

import { createUsername, getUsername } from '../api/usernames';
import { useUser } from '../context/UserContext';

function UserForm() {
	// State
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const { login } = useUser();

	async function onSubmitClick(data) {
		// Get username from API database
		let _username = await getUsername(data.username);

		// Create username if it doesn't exist
		if (!_username) _username = await createUsername(data.username);

		// Login the existing or newly created user
		login(_username);
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmitClick)}
			className='sm:flex text-lg xl:text-xl overflow-visible z-20 justify-center bg-slate-800 absolute bottom-0 w-11/12 md:w-5/6 lg:4/6 xl:w-full  rounded-2xl shadow-xl shadow-slate-900  translate-y-1/2 border-b-4 md:border-b-8 border-slate-300 py-8 sm:py-14 '>
			<label htmlFor='username' className='sr-only'>
				What's your name?
			</label>
			<input
				placeholder="What's your name?"
				className='  text-center  py-3 xl:py-4 bg-slate-300 rounded-md sm:rounded-r-none w-11/12 lg:w-64  sm:w-auto   text-slate-900'
				type='text'
				id='username'
				{...register('username', { required: true, minLength: 4 })}
			/>
			<input
				type='submit'
				className=' bg-customCyan mt-3 sm:mt-0 rounded-md sm:rounded-l-none hover:cursor-pointer font-semibold  py-3 px-6 sm:px-8'
			/>
			{errors.username?.type === 'required' && console.error('Username cannot be empty!')}
			{errors.username?.type === 'minLength' &&
				console.error('Username must be atleast 4 characters long!')}
		</form>
	);
}

export default UserForm;
