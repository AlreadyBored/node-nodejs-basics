import { existsSync, readFile} from 'node:fs';
const read = async () => {
	const errorMessage = 'FS operation failed';
	const pathToFile = 'files/fileToRead.txt';
	if (!existsSync(pathToFile)) {
		throw new Error(errorMessage);
	}
	await readFile(pathToFile, 'utf8', (error, data) => {
		if (error) {
			throw error;
		}
		console.log(data);
	});
};

await read();