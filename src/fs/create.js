import fs from 'fs';

const create = async () => {
    try {
		const dir = new URL('./files', import.meta.url).pathname;
		const filePath = `${dir}/fresh.txt`;

		const isDirExists = fs.existsSync(dir);

		if (!isDirExists) {
			throw new Error('FS operation failed');
		}

		const isFileExists = fs.existsSync(filePath);

		if (isFileExists) {
		  throw new Error('FS operation failed');
		} 

		await fs.promises.writeFile(filePath, 'I am fresh and young');
	} catch (e) {
		console.error(e.message);
	}
};

await create();