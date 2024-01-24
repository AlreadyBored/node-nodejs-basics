import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
	// Write your code here
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);

	const sourceFolderPath = path.join(__dirname, 'files');
	const destinationFolderPath = path.join(__dirname, 'files_copy');

	folderExists(sourceFolderPath)
		.then(sourceFolderExists => {
			if (!sourceFolderExists) {
				throw new Error("FS operation failed: 'files' folder does not exist");
			} else {
				return folderExists(destinationFolderPath);
			}
		})
		.then(destinationFolderExists => {
			if (destinationFolderExists) {
				throw new Error(
					"FS operation failed: 'files_copy' folder already exists",
				);
			} else {
				return createFolder(destinationFolderPath);
			}
		})
		.then(() => {
			return readDirectory(sourceFolderPath);
		})
		.then(files => {
			return Promise.all(
				files.map(file => {
					const sourceFilePath = path.join(sourceFolderPath, file);
					const destinationFilePath = path.join(destinationFolderPath, file);

					return stat(sourceFilePath).then(fileStats => {
						if (fileStats.isDirectory()) {
							return copyFolder(sourceFilePath, destinationFilePath);
						} else {
							return copyFile(sourceFilePath, destinationFilePath);
						}
					});
				}),
			);
		})
		.then(() => {
			console.log('Files folder copied successfully!');
		})
		.catch(err => {
			console.error(`Error: ${err.message}`);
		});
};

function folderExists(folderPath) {
	return new Promise(resolve => {
		fs.stat(folderPath, (err, stats) => {
			if (err) {
				resolve(false);
			} else {
				resolve(stats.isDirectory());
			}
		});
	});
}

function createFolder(folderPath) {
	return new Promise((resolve, reject) => {
		fs.mkdir(folderPath, err => {
			if (err) {
				reject(new Error(`FS operation failed: ${err.message}`));
			} else {
				resolve();
			}
		});
	});
}

function readDirectory(folderPath) {
	return new Promise((resolve, reject) => {
		fs.readdir(folderPath, (err, files) => {
			if (err) {
				reject(new Error(`FS operation failed: ${err.message}`));
			} else {
				resolve(files);
			}
		});
	});
}

function stat(file) {
	return new Promise((resolve, reject) => {
		fs.stat(file, (err, stats) => {
			if (err) {
				reject(new Error(`FS operation failed: ${err.message}`));
			} else {
				resolve(stats);
			}
		});
	});
}

function copyFile(source, destination) {
	return new Promise((resolve, reject) => {
		const readStream = fs.createReadStream(source);
		const writeStream = fs.createWriteStream(destination);

		readStream.on('error', err => {
			reject(new Error(`FS operation failed: ${err.message}`));
		});

		writeStream.on('error', err => {
			reject(new Error(`FS operation failed: ${err.message}`));
		});

		writeStream.on('close', () => {
			resolve();
		});

		readStream.pipe(writeStream);
	});
}

function copyFolder(source, destination) {
	return folderExists(destination)
		.then(destinationFolderExists => {
			if (!destinationFolderExists) {
				return createFolder(destination);
			}
		})
		.then(() => {
			return readDirectory(source);
		})
		.then(files => {
			return Promise.all(
				files.map(file => {
					const sourceFilePath = path.join(source, file);
					const destinationFilePath = path.join(destination, file);

					return stat(sourceFilePath).then(fileStats => {
						if (fileStats.isDirectory()) {
							return copyFolder(sourceFilePath, destinationFilePath);
						} else {
							return copyFile(sourceFilePath, destinationFilePath);
						}
					});
				}),
			);
		});
}

await copy();
