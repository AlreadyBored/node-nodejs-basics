// import { promises as fs } from 'fs';
// import { join, dirname } from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const create = async () => {
// 	// const filePath = join(__dirname, 'files', 'fresh.txt');
// 	// const fileContent = 'I am fresh and young';
// 	// let fileExists = true;
// 	// // If the fs.access call is successful, meaning the file doesn't exists, fileExists is set to false
// 	// try {
// 	// 	await fs.access(filePath); // test the permission of a file path
// 	// } catch (error) {
// 	// 	if (error.code === 'ENOENT') {
// 	// 		fileExists = false;
// 	// 	} else {
// 	// 		throw error;
// 	// 	}
// 	// }
// 	// try {
// 	// 	if (fileExists) {
// 	// 		throw new Error('FS operation failed');
// 	// 	} else {
// 	// 		await fs.writeFile(filePath, fileContent);
// 	// 		console.log('Success! A new file was created');
// 	// 	}
// 	// } catch (error) {
// 	// 	console.error(error.message);
// 	// }

// 	const filePath = join(__dirname, 'files', 'fresh.txt');
// 	const fileContent = 'I am fresh and young';

// 	try {
// 		// test the permission to access the file (or file exists)
// 		await fs.access(filePath);
// 		throw new Error('FS operation failed');
// 	} catch (error) {
// 		// if a different error occurred, it is rethrown
// 		if (error.code !== 'ENOENT') {
// 			throw error;
// 		}
// 	}

// 	try {
// 		await fs.writeFile(filePath, fileContent);
// 		console.log('File created successfully');
// 	} catch (error) {
// 		// if any error occurs during file creation
// 		throw error;
// 	}
// };

// await create();

import { promises as fs, constants } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
	const filePath = join(__dirname, 'files', 'fresh.txt');
	const fileContent = 'I am fresh and young';

	try {
		// check with the constants.F_OK-flag if the file exists
		await fs.access(filePath, constants.F_OK);
		throw new Error('FS operation failed');
	} catch (error) {
		// if the file exists, it throws an error with the code 'ENOENT'
		if (error.code === 'ENOENT') {
			try {
				await fs.writeFile(filePath, fileContent);
				console.log('File created successfully');
			} catch (error) {
				// rethrown if any other error occurs during file creation
				console.error('FS operation failed');
			}
		} else {
			console.error('FS operation failed');
		}
	}
};

await create();
