const BASE_URL = 'https://kp-noroff-assignment-api.herokuapp.com/translations';
const API_KEY = 'nNRCAFo9Vox8b1qW8PrEzOxPTUB4K56XGNn6gC41OpYPgcAdSPHfu4TbMk3mdZ7K';

export async function getUsername(username) {
	const req = await fetch(`${BASE_URL}?username=${username}`);
	if (!req.ok) throw new Error('Could not get username!');

	const userArr = await req.json();
	const user = userArr.pop();

	return user ?? null;
}
export async function createUsername(username) {
	const req = await fetch(BASE_URL, {
		method: 'POST',
		headers: {
			'X-API-Key': API_KEY,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username,
			translations: []
		})
	});
	if (!req.ok) throw new Error('Could not post username!');

	const user = await req.json();

	return user;
}
