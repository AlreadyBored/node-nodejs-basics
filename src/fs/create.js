import { existsSync, appendFile } from 'node:fs';
const create = async () => {
	if (existsSync('files/fresh.txt')) {
		throw new Error('FS operation failed');
	}
	await appendFile('files/fresh.txt', 'I am fresh and young', error => {
		if (error) {
			throw error;
		}
	});
};

await create();