import fs from 'fs';


const rename = async () => {
	try {
		const dirPath = './files';
		const filePath = `${dirPath}/wrongFilename.txt`;
		const newFilePath = `${dirPath}/properFilename.md`;

		const isDirExists = fs.existsSync(dirPath);
		
		if (!isDirExists) {
			throw new Error('FS operation failed');
		}

		const isFileExists = fs.existsSync(filePath);
		const isNewFileExists = fs.existsSync(newFilePath);

		if (!isFileExists || isNewFileExists) {
		  throw new Error('FS operation failed');
		}

		await fs.promises.rename(filePath, newFilePath);
	} catch (e) {
		console.error(e.message);
	}
};

await rename();