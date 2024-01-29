import fs from 'fs';


const remove = async () => {
    try {
		const dirPath = './files';
		const filePath = `${dirPath}/fileToRemove.txt`;

		const isDirExists = fs.existsSync(dirPath);
		
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