import { existsSync, writeFile } from 'fs';

const path = './files/fresh.txt';

const create = async () => {
	try {
		if (existsSync(path)) {
			throw new Error('FS operation failed');
		}
		writeFile(path, 'I am fresh and young', err => {
			if (err) throw new Error('FS operation failed');
		});
	} catch (err) {
		console.error(err);
	}
};

await create();
