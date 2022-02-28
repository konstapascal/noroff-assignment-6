import { getUsername } from './usernames';

const BASE_URL = 'https://kp-noroff-assignment-api.herokuapp.com/translations';
const API_KEY = 'nNRCAFo9Vox8b1qW8PrEzOxPTUB4K56XGNn6gC41OpYPgcAdSPHfu4TbMk3mdZ7K';

export async function addTranslation(username, translation) {
	const user = await getUsername(username);

	const req = await fetch(`${BASE_URL}/${user.id}`, {
		method: 'PATCH',
		headers: {
			'X-API-Key': API_KEY,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			translations: [...user.translations, translation]
		})
	});
	if (!req.ok) throw new Error('Could not patch translation!');

	const res = await req.json();

	return res;
}

export async function deleteTranslations(username, translationsToDelete) {
	const user = await getUsername(username);
	const translations = [...user.translations];

	// Removing translations that are included in translationsToDelete
	// Removing first match only, iterating reversed array (most recent translations)
	for (const translation of translationsToDelete) {
		const idx = translations.reverse().findIndex(el => el === translation);
		translations.splice(idx, 1);
	}

	// Update user with new translations
	const req = await fetch(`${BASE_URL}/${user.id}`, {
		method: 'PATCH',
		headers: {
			'X-API-Key': API_KEY,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			translations
		})
	});
	if (!req.ok) throw new Error('Could not patch translation!');

	const res = await req.json();

	return res;
}

export async function getTranslations(username) {
	const user = await getUsername(username);

	return user?.translations ?? [];
}
