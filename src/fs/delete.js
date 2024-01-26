import { rm, existsSync } from 'node:fs';
const remove = async () => {
	const errorMessage = 'FS operation failed';
	if (!existsSync('files/fileToRemove.txt')) {
		throw new Error(errorMessage);
	}
	await rm('files/fileToRemove.txt', error => {
		if (error) {
			throw error;
		}
	})
};

await remove();