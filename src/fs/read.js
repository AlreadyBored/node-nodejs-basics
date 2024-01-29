import fs from 'fs';


const read = async () => {
    try {
		const srcPath = './files';
		const filePath = `${srcPath}/fileToRead.txt`;

		const isSrcExists = fs.existsSync(srcPath);

		if (!isSrcExists) {
			throw new Error('FS operation failed');
		}

		const isFileExists = fs.existsSync(filePath);

		if (!isFileExists) {
		  throw new Error('FS operation failed');
		} 

		const buffer = await fs.promises.readFile(filePath, 'utf8');

		console.log(buffer);
	} catch (e) {
		console.error(e.message)
	};
};

await read();