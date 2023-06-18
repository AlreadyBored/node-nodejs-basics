import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const target = path.join(__dirname, 'files', 'fileToRemove.txt');
const err_msg = 'FS operation failed';

const remove = async () => {
	// Write your code here
	fs.rm(target, (err) => {
		if (err) throw new Error(err_msg);
		console.log('removed!');
	});
};

await remove();
