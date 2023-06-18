import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.join(__dirname, 'files');
const dist = path.join(__dirname, 'files_copy');
const err_msg = 'FS operation failed';

const copy = async () => {
	// Write your code here
	if (!fs.existsSync(source) || fs.existsSync(dist)) throw new Error(err_msg);

	await fs.cp(source, dist, { recursive: true }, (err) => {
		if (err) throw err;
		console.log('Copied!');
	});
};

await copy();
