import { writeFile } from 'node:fs/promises';
const error =  new Error('FS operation failed');

const create = async () => {
	try {
		await writeFile('fresh.txt', 'I am fresh and young.', {flag: 'wx'});
	} catch (err) {
		console.error(error.message);
	}
};

await create();