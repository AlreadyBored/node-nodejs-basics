import { cpSync, existsSync } from 'node:fs';
const copy = async () => {
	const errorMessage = 'FS operation failed';
	if (existsSync('files_copy') || !existsSync('files')) {
		throw new Error(errorMessage);
	}
	await cpSync('files', 'files_copy', {recursive: true});
};

await copy();
