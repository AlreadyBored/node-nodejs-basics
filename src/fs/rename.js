import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'files', 'wrongFilename.txt');
const target = path.join(__dirname, 'files', 'properFilename.md');
const err_msg = 'FS operation failed';

const rename = async () => {
	// Write your code here

	if (!fs.existsSync(file) || fs.existsSync(target)) throw new Error(err_msg);

	fs.rename(file, target, (err) => {
		if (err) throw err;
		console.log('Renamed!');
	});
};

await rename();
