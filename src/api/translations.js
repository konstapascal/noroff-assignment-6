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

export async function deleteTranslations(username, translationsToDeleteArr) {
	const user = await getUsername(username);
	const translations = user.translations;

	// Filtering old translations by removing the ones to be deleted
	const newTranslations = translations.filter(
		translation => !translationsToDeleteArr.includes(translation)
	);

	// Update user with new translations
	const req = await fetch(`${BASE_URL}/${user.id}`, {
		method: 'PATCH',
		headers: {
			'X-API-Key': API_KEY,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			translations: newTranslations
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
