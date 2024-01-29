import fs from 'fs';


const remove = async () => {
    try {
		const dir = new URL('./files', import.meta.url).pathname;
		const filePath = `${dir}/fileToRemove.txt`;

		const isDirExists = fs.existsSync(dir);
		
		if (!isDirExists) {
			throw new Error('FS operation failed');
		}

		const isFileExists = fs.existsSync(filePath);

		if (!isFileExists) {
		  throw new Error('FS operation failed');
		}

		await fs.promises.rm(filePath);
	} catch (e) {
		console.error(e.message);
	}
};

await remove();