import fs from 'fs';

const create = async () => {
    try {
		const dirPath = './files';
		const filePath = `${dirPath}/fresh.txt`;

		const isDirExists = fs.existsSync(dirPath);

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