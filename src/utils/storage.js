export function storageSave(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

export function storageRead(key) {
	const data = localStorage.getItem(key);
	const parsedData = JSON.parse(data);

	return parsedData;
}
