import fs from 'fs';
import path from 'path';
import * as errors from './errors.mjs'

const copyFile = (filePath, destination) => {
	if (!fs.existsSync(filePath) || !fs.existsSync(destination)) {
		console.log(errors.operationFailed);
		return;
	}

	const copiedFilePath = path.join(destination, path.basename(filePath));
	fs.createReadStream(filePath).pipe(fs.createWriteStream(copiedFilePath));
}

const removeFile = (filePath) => {
	fs.rm(filePath, error => {
		if (error) {
			console.log(errors.operationFailed);
		}
	});
}

const handleFileCommand = async (inputArgs) => {
	switch (inputArgs[0]) {
		case 'cat':
			const pathToFile = inputArgs[1];
			if (!fs.existsSync(pathToFile)) {
				console.log(errors.operationFailed);
				return;
			}

			const readableStream = fs.createReadStream(pathToFile, {encoding: 'UTF-8'});
			const chunks = [];

			readableStream.on('data', (chunk) => {
				chunks.push(chunk);
			});

			readableStream.on('end', () => {
				console.log(chunks.join('').toString());
			});
			break;
		case 'add':
			const filePath = inputArgs[1];
			const writeStream = fs.createWriteStream(filePath, { flags: 'w' });
			writeStream.on('error', () => console.log(errors.operationFailed));
			writeStream.write('');
			writeStream.end();
			break;
		case 'rn':
			const sourcePath = inputArgs[1];
			const newFileName = inputArgs[2];
			const newFilePath = path.join(path.dirname(sourcePath), newFileName);
			fs.rename(sourcePath, newFilePath, error => {
				if (error) {
					console.log(errors.operationFailed);
				}
			});
			break;
		case 'cp':
			copyFile(inputArgs[1], inputArgs[2]);
			break;
		case 'mv':
			copyFile(inputArgs[1], inputArgs[2]);
			removeFile(inputArgs[1]);
			break;
		case 'rm':
			removeFile(inputArgs[1]);
			break;
		default:
			console.log(errors.invalidInput);
	}
}

export { handleFileCommand }