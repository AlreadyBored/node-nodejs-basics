import { existsSync, readdir} from 'node:fs';
const list = async () => {
	const errorMessage = 'FS operation failed';
	const path = 'files';
	if (!existsSync(path)) {
		throw new Error(errorMessage);
	}
	await readdir(path, (error, files) => {
		if (error) {
			throw error;
		}
		files.forEach(fileName => {
			console.log(fileName);
		});
	});
};

await list();