import { rename as renameFile, existsSync } from 'node:fs';
const rename = async () => {
	const errorMessage = 'FS operation failed';
	if (existsSync('files/properFilename.md') || !existsSync('files/wrongFilename.txt')) {
		throw new Error(errorMessage);
	}
	await renameFile('files/wrongFilename.txt', 'files/properFilename.md', error => {
		if (error) {
			throw error;
		}
	});
};

await rename();