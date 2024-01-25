import fs from 'fs';

const filesDir = 'src/fs/files';
const fileName = 'fileToRead.txt';

const read = async () => {
	const filePath = `${ filesDir }/${ fileName }`;
	if (!fs.existsSync(filePath)) {
		throw new Error('FS operation failed');
	}

	const fileContent = fs.readFileSync(filePath).toString();
	console.log(fileContent);
};

await read();
