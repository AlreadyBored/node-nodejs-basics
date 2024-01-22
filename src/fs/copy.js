import { promises as fs, constants } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
	const sourceFolder = join(__dirname, 'files');
	const destinationFolder = join(__dirname, 'files_copy');

	// simple variant
	try {
		await fs.cp(sourceFolder, destinationFolder, {
			recursive: true, // copy directories recursively
			force: false, // overwrite existing file or directory. The copy operation will ignore errors if set to false and the destination exists
			errorOnExist: true, // when force is false, and the destination exists, throw an error
		});
		console.log('All files copied successfully');
	} catch {
		throw new Error('FS operation failed');
	}

	// // more complicated variant
	// try {
	// 	// check if the source folder does exist
	// 	await fs.access(sourceFolder, constants.R_OK);
	// 	// check if the destination folder does not exist
	// 	await fs.access(destinationFolder, constants.F_OK);
	// 	throw new Error('FS operation failed');
	// } catch (error) {
	// 	if (error.code === 'ENOENT') {
	// 		try {
	// 			await fs.mkdir(destinationFolder);
	// 			const fileNames = await fs.readdir(sourceFolder);

	// 			for (const fileName of fileNames) {
	// 				const sourcePath = join(sourceFolder, fileName);
	// 				const destinationPath = join(destinationFolder, fileName);
	// 				await fs.copyFile(sourcePath, destinationPath);
	// 			}

	// 			console.log('All files copied successfully');
	// 		} catch (error) {
	// 			console.error('FS operation failed');
	// 		}
	// 	} else {
	// 		console.error('FS operation failed');
	// 	}
	// }
};

await copy();
